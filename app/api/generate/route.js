import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic
or content. Follow these guidelines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Tailor the difficulty level of the flashcards to the user's specified preferences.
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively.
11. Only generate 10 flashcards. 

Return the following JSON format:
{
  "flashcards": [
    {"front": "string", "back": "string"}
  ]
}
`;

export async function POST(req) {
    const openai = new OpenAI();
    const data = await req.text();
  
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: data },
        ],
      });
  
      const content = completion.choices[0].message.content;
  
      console.log("Received content:", content);
  
      let flashcards;
      try {
        flashcards = JSON.parse(content);
      } catch (err) {
        console.error("Error parsing OpenAI response:", err);
        return NextResponse.json({ error: "Failed to parse flashcard data" });
      }
  
      if (!flashcards || !flashcards.flashcards) {
        return NextResponse.json({ error: "No flashcards found in response" });
      }
  
      return NextResponse.json(flashcards.flashcards);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      return NextResponse.json({ error: "Failed to generate flashcards" });
    }
  }  