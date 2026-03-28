import portfolioData from '@/data/portfolio.json'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4 font-poppins">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Currently: <span className="gradient-text">{portfolioData.currentRole}</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {portfolioData.about}
              </p>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">{portfolioData.experience}+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">{portfolioData.projects.length}+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold gradient-text">Key Achievements</h3>
            <div className="space-y-4">
              {portfolioData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-white to-purple-50 rounded-lg border border-purple-100"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}