import ContactSection from '@/components/ContactSection'

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team to discuss how we can help bring your vision to life.
          </p>
        </div>

        {/* Contact Section */}
        <ContactSection />

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Kesingdon Investments?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                <p className="text-gray-600">We complete projects on time and within budget.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Every project meets our high standards of quality.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Our experienced professionals deliver exceptional results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}