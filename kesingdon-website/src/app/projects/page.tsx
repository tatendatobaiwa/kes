'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  location: string
  description: string
  date: Date
  status: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState<string>('All')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const statuses = ['All', 'completed', 'in_progress']
  const filteredProjects = selectedStatus === 'All' 
    ? projects 
    : projects.filter(project => project.status === selectedStatus)

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
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of construction and development projects across Botswana. 
            From residential developments to commercial complexes, we deliver quality results.
          </p>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                selectedStatus === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status === 'All' ? 'All Projects' : status === 'completed' ? 'Completed' : 'In Progress'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary-100">📍 {project.location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-primary-600 font-semibold">
                  <span>View Details</span>
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Let's discuss how we can help bring your construction or development project to life.
            </p>
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}