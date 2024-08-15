import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `You are an intelligent flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Each flashcard should have a clear question on one side and a concise answer on the other. Follow these guidelines:

1. Create questions that test understanding, not just memorization.
2. Ensure answers are brief but comprehensive.
3. Use clear and simple language.
4. Cover key concepts, definitions, and relationships within the topic.
5. Avoid overly complex or ambiguous questions.
6. Maintain a balance between different types of questions (e.g., definitions, explanations, comparisons).
7. Tailor the difficulty level to the user's specified preferences.

Your output should be in a format that's easy to parse, with each flashcard clearly separated and labeled.

Return in the following JSON format:
{
    "flashcards": [
        {
            "front": str,
            "back": str
        }
    ]
}
`;

export async function POST(req) {
  const openai = new OpenAI();
  const data = await req.text();

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    response_format: { type: "json_object" },
    model: "gpt-3.5-turbo",
  });

  const flashcards = JSON.parse(completion.choices[0].message.content);
  return NextResponse.json(flashcards.flashcards);
}
