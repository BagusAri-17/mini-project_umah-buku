import { useState } from "react"
import OpenAI from "openai";

const TulisCerita = () => {

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleApiKey = async () => {
        setLoading(true);
        try {
            const openai = new OpenAI({
                apiKey: import.meta.env.VITE_OPENAI_API_KEY,
                dangerouslyAllowBrowser: true
            });
            const chatCompletion = await openai.chat.completions.create({
                messages: [{role: "system", content:"You will be given a prompts, and your task is to create a story, whether it's short or long, based on the given prompts. Give your answer with indonesia language"}, { role: "user", content: prompt }],
                model: "gpt-3.5-turbo",
                temperature: 0,
                max_tokens: 1024,
            });
            setResult(chatCompletion.choices[0].message.content);
        }
        catch(error){
            console.log("error to prompt ai", error)
        }
        setLoading(false)
    }

  return (
    <section id="robot-ai" className="h-screen flex justify-center items-center">
        <div className="container">
            <div className="max-w-[600px] lg:max-w-[800px] mx-auto">
                <div className="mt-8">
                    <label htmlFor="promt" className="block mb-2 text-sm font-medium text-gray-900">Your Prompt</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-l">💬</span>
                        <input value={prompt} onChange={(e) => setPrompt(e.target.value)}  type="text" placeholder="Type Your Prompt Here" className="flex-1 bg-gray-50 border border-l-0 border-gray-300 text-gray-900 text-sm rounded-r block w-full p-2.5" />  
                    </div>
                    <div className="mt-4">
                        <button onClick={handleApiKey} className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-primary/80">Ask</button>
                    </div>
                </div>
                {loading && (
                    <div role="status" className="mt-8">
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
                <div className="mt-8">
                    <div className="p-6 border border-gray-300 rounded">
                        <h1 className="text-3xl font-bold text-gray-900 text-center">RESULT</h1>
                        <p className="text-justify text-sm mt-4">{result}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TulisCerita;