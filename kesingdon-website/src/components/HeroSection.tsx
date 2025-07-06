import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Botswana's Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Leading investment and construction company specializing in real estate development, 
            construction management, and strategic investments across Botswana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/what-we-do"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Our Services
            </Link>
            <Link 
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  )
}