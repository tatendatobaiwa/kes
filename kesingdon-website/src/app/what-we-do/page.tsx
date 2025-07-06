'use client'

import { useState, useEffect } from 'react'

interface Service {
  id: string
  name: string
  description: string
  category: string
}

export default function WhatWeDo() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      const data = await response.json()
      setServices(data)
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))]
  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kesingdon Investments provides comprehensive services across construction, real estate, and investment sectors, 
            helping to build Botswana's future through strategic partnerships and quality execution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
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
              <div className="flex items-center text-primary-600 font-semibold">
                <span>Learn More</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Contact us today to discuss how we can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}