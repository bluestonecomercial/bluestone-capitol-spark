import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import DiagnosticModal from "@/components/DiagnosticModal";

const mocks = vi.hoisted(() => ({ insert: vi.fn(), send: vi.fn() }));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: () => ({ insert: mocks.insert }) } }));
vi.mock("@emailjs/browser", () => ({ default: { init: vi.fn(), send: mocks.send } }));

function fill() {
  render(<DiagnosticModal open onOpenChange={() => {}} />);
  fireEvent.change(screen.getByPlaceholderText("Seu nome completo"), { target: { value: "Teste" } });
  fireEvent.change(screen.getByPlaceholderText("(27) 99999-9999"), { target: { value: "27999999999" } });
  screen.getAllByRole("button", { name: "7%", exact: true }).forEach(button => fireEvent.click(button));
  ["Não", "PJ", "Menor que R$10MM"].forEach(name => fireEvent.click(screen.getByRole("button", { name, exact: true })));
  fireEvent.click(screen.getByRole("button", { name: "Falar com Especialista" }));
}

describe("diagnostic delivery", () => {
  beforeEach(() => { vi.clearAllMocks(); });
  afterEach(cleanup);
  it("does not confirm or email when saving fails", async () => {
    mocks.insert.mockResolvedValue({ error: { message: "failed" } });
    fill();
    expect(await screen.findByRole("alert")).toHaveTextContent("Não foi possível salvar");
    expect(mocks.send).not.toHaveBeenCalled();
    expect(screen.queryByText("Obrigado! Recebemos suas respostas.")).not.toBeInTheDocument();
  });
  it("retries email without duplicating the saved lead", async () => {
    mocks.insert.mockResolvedValue({ error: null });
    mocks.send.mockRejectedValueOnce(new Error("failed")).mockResolvedValueOnce({ status: 200 });
    fill();
    expect(await screen.findByRole("alert")).toHaveTextContent("Suas respostas foram salvas");
    fireEvent.click(screen.getByRole("button", { name: "Tentar novamente" }));
    expect(await screen.findByText("Obrigado! Recebemos suas respostas.")).toBeInTheDocument();
    expect(mocks.insert).toHaveBeenCalledTimes(1);
    expect(mocks.send).toHaveBeenCalledTimes(2);
    expect(Object.keys(mocks.send.mock.calls[0][2])).toHaveLength(7);
  });
  it("waits for email confirmation and prevents repeated sends", async () => {
    mocks.insert.mockResolvedValue({ error: null });
    let finish: ((value: { status: number }) => void) | undefined;
    mocks.send.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
    fill();
    await waitFor(() => expect(mocks.send).toHaveBeenCalledTimes(1));
    expect(screen.getByRole("button", { name: "Enviando..." })).toBeDisabled();
    expect(screen.queryByText("Obrigado! Recebemos suas respostas.")).not.toBeInTheDocument();
    finish?.({ status: 200 });
    expect(await screen.findByText("Obrigado! Recebemos suas respostas.")).toBeInTheDocument();
  });
});