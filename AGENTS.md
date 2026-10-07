# Implementation rules
- Save diagnostic leads before attempting EmailJS delivery, and retain the saved payload during retries so an email failure does not duplicate a lead.
- Keep EmailJS recipient configuration in its external template and its seven-field payload unchanged because the existing template rejects additional fields.