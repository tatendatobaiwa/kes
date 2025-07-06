import Link from 'next/link'

interface Project {
  id: string
  title: string
  location: string
  description: string
  date: Date
  status: string
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest construction and development projects across Botswana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
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
                <Link 
                  href="/projects"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition duration-300"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}