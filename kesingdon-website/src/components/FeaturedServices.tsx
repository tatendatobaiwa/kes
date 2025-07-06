import Link from 'next/link'

interface Service {
  id: string
  name: string
  description: string
  category: string
}

interface FeaturedServicesProps {
  services: Service[]
}

export default function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive investment and construction services to help build Botswana's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                href="/what-we-do"
                className="text-primary-600 font-semibold hover:text-primary-700 transition duration-300"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/what-we-do"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}