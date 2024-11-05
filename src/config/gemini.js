
import { GoogleGenerativeAI, HarmCategory,
  HarmBlockThreshold } 
  from "@google/generative-ai";



const apiKey = "AIzaSyC_RVDDokeLVVGiQ0RhZ44Sw635zqZYULE";
//const API_KEY = process.env.apiKey;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
}

export default run;