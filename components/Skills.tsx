import portfolioData from '@/data/portfolio.json'

export default function Skills() {
  const getGradientColor = (index: number) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4 font-poppins">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.name}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold gradient-text mb-2">
                  {skillCategory.name}
                </h3>
                <div className={`h-1 w-12 bg-gradient-to-r ${getGradientColor(categoryIndex)} rounded-full`}></div>
              </div>
              
              <div className="space-y-3">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-200"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${getGradientColor(categoryIndex)} rounded-full`}></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}