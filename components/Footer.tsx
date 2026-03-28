import portfolioData from '@/data/portfolio.json'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-poppins">
              {portfolioData.name}
            </div>
            <p className="text-purple-200">
              {portfolioData.role}
            </p>
            <p className="text-purple-300 text-sm">
              {portfolioData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-purple-200 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-purple-200 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="text-purple-200 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="text-purple