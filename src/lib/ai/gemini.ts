import { GoogleGenerativeAI } from '@google/generative-ai'

if (!process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY) {
  throw new Error('NEXT_PUBLIC_GOOGLE_AI_API_KEY is not set in environment variables')
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY)

export async function generateGeminiReply(
  reviewContent: string,
  tone: 'professional' | 'friendly' | 'empathetic' = 'professional'
): Promise<string> {
  const toneInstructions = {
    professional: '丁寧でプロフェッショナルな口調で',
    friendly: '親しみやすくフレンドリーな口調で',
    empathetic: '共感的で理解を示す口調で',
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const prompt = `あなたは美容系ビジネスのカスタマーサポート担当者です。
お客様のレビューに対して、${toneInstructions[tone]}返信を作成してください。
以下の点に注意してください：
- お客様への感謝の気持ちを表現する
- 具体的な内容に言及する
- 建設的で前向きな内容にする
- 批判的なレビューの場合は、改善への取り組みを示す
- 200文字以内で簡潔にまとめる

以下のレビューに対する返信を作成してください：

${reviewContent}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return text
  } catch (error) {
    console.error('Gemini API error:', error)
    throw new Error('返信の生成に失敗しました')
  }
}