import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { from, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: ["johnadibe450@gmail.com"],
      subject: "[johnadibe] gldfkn",
      text: message,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
