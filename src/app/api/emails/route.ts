// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // // With Resend
  // try {
  //   const { data, error } = await resend.emails.send({
  //     from: `${name} <${email}>`,
  //     to: ["johnadibe450@gmail.com"],
  //     subject: "[johnadibe] gldfkn",
  //     text: message,
  //   });

  //   if (error) {
  //     return Response.json({ error }, { status: 500 });
  //   }

  //   return Response.json(data);
  // } catch (error) {
  //   return Response.json({ error }, { status: 500 });
  // }

  // With Google Spreadsheet
  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Email", email);
  formData.append("Message", message);

  fetch(
    `https://script.google.com/macros/s/${process.env.DEPLOYMENT_ID}/exec`,
    { method: "POST", body: formData }
  )
    .then((data) => Response.json(data))
    .catch((error) => Response.json({ error }, { status: 500 }));
}
