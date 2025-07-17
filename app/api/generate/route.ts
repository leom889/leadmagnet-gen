import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { service, avatar } = await req.json();

  const prompt = `
You are a marketing expert. Create a simple 1-page lead magnet for this business:
Service: ${service}
Audience: ${avatar}

Include:
- A catchy title
- A hooky intro paragraph
- 3 quick win strategies
- A short call-to-action at the end
`;

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await openaiRes.json();
  console.log("OpenAI response data:", data);
const message = data.choices[0]?.message?.content;
  return NextResponse.json({ result: message });
}
