# Kesingdon Investments Website

A modern, AI-powered website for Kesingdon Investments built with Next.js 14, PostgreSQL, and Prisma.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Database Integration**: PostgreSQL with Prisma ORM for type-safe database access
- **AI-Powered Chatbot**: Smart inquiry assistant named "Kesi" to help visitors
- **Responsive Design**: Mobile-first design that works on all devices
- **Dynamic Content**: Database-driven services and projects pages
- **Contact Management**: Form submissions stored in database
- **SEO Optimized**: Proper metadata and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Vercel Postgres)
- **ORM**: Prisma
- **Hosting**: Vercel
- **AI**: Configurable for Hugging Face or Groq APIs

## 📁 Project Structure

```
kesingdon-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── chat/          # AI chatbot endpoint
│   │   │   ├── contact/       # Contact form handler
│   │   │   ├── projects/      # Projects API
│   │   │   └── services/      # Services API
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects page
│   │   ├── what-we-do/        # Services page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Chatbot.tsx        # AI chatbot component
│   │   ├── ContactSection.tsx # Contact form
│   │   ├── FeaturedProjects.tsx
│   │   ├── FeaturedServices.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   └── Navbar.tsx
│   └── lib/
│       └── prisma.ts          # Prisma client configuration
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts               # Database seeding script
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── .env.example              # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or Vercel Postgres)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kesingdon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database credentials:
   ```env
   POSTGRES_URL="your_postgres_connection_string"
   POSTGRES_PRISMA_URL="your_postgres_connection_string?pgbouncer=true&connect_timeout=15"
   POSTGRES_URL_NON_POOLING="your_postgres_connection_string"
   
   # Optional: AI API keys
   HUGGINGFACE_API_KEY="your_huggingface_api_key"
   # OR
   GROQ_API_KEY="your_groq_api_key"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev --name init
   
   # Seed the database with sample data
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🗄️ Database Schema

The application uses three main models:

- **Service**: Company services with categories
- **Project**: Construction/development projects
- **Contact**: Contact form submissions

## 🤖 AI Chatbot Integration

The chatbot "Kesi" is configured to:
- Answer questions about company services and projects
- Provide contact information
- Use company data from the database for context

### Integrating Real AI APIs

To use a real AI model instead of the simulated responses:

1. **For Hugging Face:**
   ```typescript
   // In src/app/api/chat/route.ts
   const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1', {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       inputs: `${systemPrompt}\n\nUser: ${userMessage}\nAssistant:`,
       parameters: { max_new_tokens: 200, temperature: 0.7 }
     }),
   })
   ```

2. **For Groq:**
   ```typescript
   const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       model: 'mixtral-8x7b-32768',
       messages: [
         { role: 'system', content: systemPrompt },
         { role: 'user', content: userMessage }
       ]
     }),
   })
   ```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables in Vercel dashboard

3. **Set up Vercel Postgres**
   - In Vercel dashboard, go to Storage tab
   - Create a new Postgres database
   - Copy connection strings to environment variables

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with sample data

## 🎨 Customization

### Adding New Services/Projects

Use Prisma Studio or create admin interface:
```bash
npx prisma studio
```

### Styling

The project uses Tailwind CSS. Main color scheme is defined in `tailwind.config.js`:
- Primary: Blue tones (#3b82f6, #2563eb, #1d4ed8)

### Content Management

For a full CMS experience, consider adding:
- Admin dashboard at `/admin`
- Authentication with NextAuth.js
- Image upload with Vercel Blob or Cloudinary

## 📞 Support

For questions about this implementation:
- Email: kesingdontechnical@gmail.com
- Phone: 74506120

## 📄 License

This project is proprietary to Kesingdon Investments.

---

Built with ❤️ for Kesingdon Investments - Building Botswana's Future
