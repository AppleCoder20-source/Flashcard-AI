import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `Develop an AI-powered flashcard app that enables users to create, study, and review flashcards efficiently
The app should allow users to input questions and answers, organize flashcards into decks, 
and track progress over time. Additionally, the AI should be able to parse JSON data provided by users
and display flashcards based on the JSON values. 

Return the following JSON format 
    "flashcards": {
    "front":str,
    "back":str
    }
  `
  export async function POST(req) {
    const completion = await openai.chat.completion.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: date },
        ],
        model: 'gpt-4o',
        response_format: 'json', 
    });

    const flashcards = JSON.parse(completion.choices[0].message.content);
    return NextResponse.json(flashcards.flashcard);
}

