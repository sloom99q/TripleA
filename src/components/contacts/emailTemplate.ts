type EmailTemplateProps = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function contactEmailTemplate({
  name,
  email,
  phone,
  subject,
  message,
}: EmailTemplateProps) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6">
      <h2>TripleA Website form</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr />

      <p>${message}</p>
    </div>
  `;
}
