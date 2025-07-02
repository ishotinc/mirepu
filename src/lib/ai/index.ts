import { generateGeminiReply } from './gemini'

export type Tone = 'professional' | 'friendly' | 'empathetic'

export async function generateReply(
  reviewContent: string,
  tone: Tone = 'professional'
): Promise<string> {
  return generateGeminiReply(reviewContent, tone)
}

// レート制限とリトライロジック
export async function generateReplyWithRetry(
  reviewContent: string,
  tone: Tone = 'professional',
  maxRetries: number = 3
): Promise<string> {
  let lastError: Error | null = null

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await generateReply(reviewContent, tone)
    } catch (error) {
      lastError = error as Error
      
      // レート制限エラーの場合は待機
      if (error instanceof Error && error.message.includes('rate limit')) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
      }
    }
  }

  throw lastError || new Error('Failed to generate reply after retries')
}