import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Navigation Header */}
      <header className="flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center">
          <div className="w-32 h-32 rounded flex items-center justify-center">
            <img 
              src="/Cybersecurity research-01.png" 
              alt="Cyberix Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Services
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Contact us
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            About us
          </a>
        </nav>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">Login</Button>
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 text-center">
        {/* Customer Testimonial Badge */}
        <div className="mb-8 flex items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <div className="flex -space-x-2 mr-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 border-2 border-white"></div>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
            ))}
          </div>
          <span className="text-white text-sm ml-2">115+ happy clients</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-8xl leading-tight">
        Never Miss a Threat — Always-On AI <span className="text-orange-500">Cybersecurity</span> with 360°
          <br />
           Enterprise Security Coverage
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
           Using Proven Cybersecurity Frameworks & Tools
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Request Your Security Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
