import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Services
  const services = [
    {
      name: "Construction Management",
      description: "Comprehensive project management services for construction projects of all sizes.",
      category: "Construction"
    },
    {
      name: "Real Estate Development",
      description: "Strategic real estate development and investment opportunities.",
      category: "Real Estate"
    },
    {
      name: "Investment Consulting",
      description: "Expert financial consulting and investment advisory services.",
      category: "Finance"
    },
    {
      name: "Property Management",
      description: "Professional property management services for residential and commercial properties.",
      category: "Real Estate"
    }
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { name: service.name },
      update: {},
      create: service
    })
  }

  // Seed Projects
  const projects = [
    {
      title: "Gaborone Office Complex",
      location: "Gaborone, Botswana",
      description: "Modern office complex development in the heart of Gaborone's business district.",
      date: new Date('2023-06-15'),
      status: "completed"
    },
    {
      title: "Francistown Residential Development",
      location: "Francistown, Botswana",
      description: "Luxury residential housing development with modern amenities.",
      date: new Date('2023-09-20'),
      status: "completed"
    },
    {
      title: "Maun Commercial Center",
      location: "Maun, Botswana",
      description: "Multi-purpose commercial center serving the tourism hub of Maun.",
      date: new Date('2024-01-10'),
      status: "in_progress"
    }
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { title: project.title },
      update: {},
      create: project
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })