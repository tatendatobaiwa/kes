export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Kesingdon Investments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Botswana's future through strategic investments, quality construction, and innovative development solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To be Botswana's leading investment and construction company, delivering exceptional value through 
              innovative solutions, quality craftsmanship, and strategic partnerships that contribute to the 
              nation's economic growth and development.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To transform Botswana's landscape through sustainable construction practices, strategic real estate 
              development, and investment opportunities that create lasting value for our clients and communities.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-6">
              Kesingdon Investments was founded with a vision to contribute to Botswana's development through 
              strategic investments and quality construction projects. Our company has grown from humble beginnings 
              to become a trusted partner for clients across various sectors.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              With a focus on excellence, innovation, and sustainability, we have successfully completed numerous 
              projects ranging from residential developments to commercial complexes, each designed to meet the 
              unique needs of our clients while contributing to the broader economic development of Botswana.
            </p>
            <p className="text-gray-700 text-lg">
              Today, Kesingdon Investments continues to expand its portfolio and expertise, always maintaining 
              our commitment to quality, integrity, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We deliver exceptional quality in every project, ensuring lasting value and satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical practices in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and methods to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices and sustainable development.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-primary-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-6">
              Let's discuss how Kesingdon Investments can help with your next project.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}