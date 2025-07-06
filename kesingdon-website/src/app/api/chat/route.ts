import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Fetch company data to provide context to AI
    const [services, projects] = await Promise.all([
      prisma.service.findMany(),
      prisma.project.findMany()
    ])

    // Construct system prompt with company data
    const systemPrompt = `You are Kesi, a helpful assistant for Kesingdon Investments, a leading investment and construction company in Botswana. 

Answer user questions based ONLY on the following information. Be friendly, professional, and helpful. If you don't know the answer based on the provided information, say so politely.

COMPANY SERVICES:
${services.map(service => `- ${service.name} (${service.category}): ${service.description}`).join('\n')}

COMPLETED PROJECTS:
${projects.map(project => `- ${project.title} in ${project.location}: ${project.description} (${project.status}, ${new Date(project.date).getFullYear()})`).join('\n')}

CONTACT INFORMATION:
- Email: kesingdontechnical@gmail.com
- Phone: 74506120
- Location: Botswana

Remember to be helpful and direct users to contact the company for specific inquiries or quotes.`

    // For demo purposes, we'll simulate an AI response
    // In production, you would call an actual AI API like Hugging Face or Groq
    const aiResponse = generateSimulatedResponse(message, services, projects)

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error('Error processing chat:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}

// Simulated AI response function - replace with actual AI API call
function generateSimulatedResponse(message: string, services: any[], projects: any[]): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! I'm Kesi, your assistant from Kesingdon Investments. How can I help you today? I can tell you about our services, recent projects, or help you get in touch with our team."
  }

  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
    const serviceList = services.map(s => `• ${s.name}: ${s.description}`).join('\n')
    return `Kesingdon Investments offers the following services:\n\n${serviceList}\n\nWould you like more details about any specific service?`
  }

  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    const recentProjects = projects.slice(0, 3).map(p => `• ${p.title} in ${p.location}: ${p.description}`).join('\n')
    return `Here are some of our recent projects:\n\n${recentProjects}\n\nWe have experience across various construction and development projects in Botswana.`
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
    return "You can reach Kesingdon Investments through:\n\n📧 Email: kesingdontechnical@gmail.com\n📞 Phone: 74506120\n📍 Location: Botswana\n\nFeel free to contact us for any inquiries or project discussions!"
  }

  if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
    return "Kesingdon Investments is based in Botswana. We work on projects across the country, including major cities like Gaborone, Francistown, and Maun."
  }

  return "Thank you for your question! I can help you with information about our services, recent projects, or contact details. For specific inquiries or detailed discussions about your project needs, I'd recommend contacting our team directly at kesingdontechnical@gmail.com or 74506120."
}

// Example of how you would integrate with Hugging Face API:
/*
async function callHuggingFaceAPI(systemPrompt: string, userMessage: string) {
  const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: `${systemPrompt}\n\nUser: ${userMessage}\nAssistant:`,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.7,
      }
    }),
  })
  
  const result = await response.json()
  return result[0]?.generated_text || 'I apologize, but I cannot process your request right now.'
}
*/