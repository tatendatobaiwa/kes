import HeroSection from '@/components/HeroSection'
import FeaturedServices from '@/components/FeaturedServices'
import FeaturedProjects from '@/components/FeaturedProjects'
import ContactSection from '@/components/ContactSection'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Home() {
  // Fetch featured data directly in server component for ultra-fast loading
  const [featuredServices, featuredProjects] = await Promise.all([
    prisma.service.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' }
    }),
    prisma.project.findMany({
      take: 3,
      orderBy: { date: 'desc' }
    })
  ])

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedServices services={featuredServices} />
      <FeaturedProjects projects={featuredProjects} />
      <ContactSection />
    </div>
  )
}