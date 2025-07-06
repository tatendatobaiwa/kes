import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Save contact to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
      },
    })

    return NextResponse.json(
      { message: 'Contact saved successfully', id: contact.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    )
  }
}