import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to:

1. Generate clear, concise, and effective flashcards designed to help users learn and retain information.
2. Ensure each flashcard focuses on a single concept, fact, or question.
3. Provide a straightforward prompt on one side of the flashcard.
4. Offer a precise, informative answer on the other side of the flashcard.
5. Ensure the content is accurate, easy to understand, and suitable for the target audience.
6. Adapt the difficulty level based on the user's needs and learning objectives.
7. Include additional context or examples when necessary to enhance understanding.
8. Consider various formats such as definitions, multiple-choice questions, true/false statements, or problem-solving exercises.
9. Aim to maximize the user's understanding and retention of the material.
10. Continuously improve flashcards based on user feedback to ensure effectiveness and engagement.

Return in the following JSON format
{
  "flashcards": [
  {
      "front": str,
      "back": str
  }
  ]
}
`;
export async function POST(request) {
  const openai = OpenAI();
  const data = await request.text();

  const completion = await openai.chat.completion.creaate({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: data,
      },
    ],
    model: "gpt-4o",
    response_format: { type: "json_obkect" },
  });

  const flashcard = JSON.parse(completion.choices[0].message.content);

  return NextResponse.json(flashcards.flashcard);
}
