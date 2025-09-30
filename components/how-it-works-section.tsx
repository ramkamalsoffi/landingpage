import { Shield, Search, Lock } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section 
      className="py-20 px-6"
      style={{
        backgroundImage: "url('/hero/middle-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Defend, Detect, and <span className="text-orange-500">Secure</span> — All in One Platform
          </h2>
        </div>

        {/* How It Works Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Proactive Network Defense */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 orange-gradient-hover group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Proactive Network Defense
              </h3>
              
              <p className="text-white/90 leading-relaxed">
                Eliminate blind spots with continuous network scanning — keeping threats out before they strike.
              </p>
              
              {/* Animated line */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Smart Vulnerability Protection */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 orange-gradient-hover group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-bounce">
                <Search className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Smart Vulnerability Protection
              </h3>
              
              <p className="text-white/90 leading-relaxed">
                Identify and fix weaknesses instantly with automated vulnerability scanning.
              </p>
              
              {/* Animated line */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Secure Admin Access */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 orange-gradient-hover group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-spin">
                <Lock className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Secure Admin Access
              </h3>
              
              <p className="text-white/90 leading-relaxed">
                Protect critical accounts with advanced admin security, stopping unauthorized access in its tracks.
              </p>
              
              {/* Animated line */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-1/2 left-1/6 w-2/3 h-0.5 bg-gradient-to-r from-orange-500/30 via-orange-500/50 to-orange-500/30 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/6 w-0.5 h-8 bg-gradient-to-b from-orange-500/50 to-transparent transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/6 w-0.5 h-8 bg-gradient-to-b from-transparent to-orange-500/50 transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  )
}
