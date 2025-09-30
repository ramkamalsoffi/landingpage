import { ArrowUpRight } from "lucide-react"

export function FeaturesSection() {
  return (
    <section 
      className="min-h-screen text-white py-20 px-6"
      style={{
        backgroundImage: "url('/hero/middle-0.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
          <div className="lg:max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              From Blind Spots to <br />
              <span className="text-orange-500">Bulletproof Security</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Transform your cybersecurity approach with AI-driven threat detection and automated response systems.
            </p>
          </div>

          {/* Geometric Icon */}
          <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-24 h-24 lg:w-32 lg:h-32">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-gray-400 stroke-current"
                fill="none"
                strokeWidth="1"
              >
                {/* Wireframe geometric shape */}
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
                <line x1="50" y1="10" x2="50" y2="50" />
                <line x1="50" y1="50" x2="90" y2="30" />
                <line x1="50" y1="50" x2="90" y2="70" />
                <line x1="50" y1="50" x2="10" y2="70" />
                <line x1="50" y1="50" x2="10" y2="30" />
                <line x1="10" y1="30" x2="90" y2="70" />
                <line x1="90" y1="30" x2="10" y2="70" />
              </svg>
            </div>
          </div>
        </div>

        {/* Problem-Agitate-Solution Sections */}
        <div className="mb-16 space-y-12">
          {/* Problem */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-105 animate-fade-in orange-gradient-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 animate-pulse">
                <span className="text-white text-xl">🚨</span>
              </div>
              <h3 className="text-3xl font-bold text-red-400">Problem</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Cyber threats are evolving faster than ever — mutating like living organisms in a vast digital universe. 
              Businesses today are flying blind, with sprawling IT environments hiding vulnerabilities that attackers 
              exploit before they are even discovered.
            </p>
          </div>

          {/* Agitate */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 animate-fade-in-delay orange-gradient-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 animate-bounce">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold text-yellow-400">Agitate</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Relying on manual scans, siloed tools, and scattered reports is like patching a spaceship while in battle. 
              It wastes time, drains resources, and leaves dangerous gaps wide open — risking not just data breaches, 
              but catastrophic compliance failures and business collapse.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105 animate-fade-in-delay-2 orange-gradient-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 animate-spin">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="text-3xl font-bold text-green-400">Solution</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Enter our AI-driven Cyber Defense Nexus: an all-in-one, continuously evolving platform that thinks, 
              scans, and secures for you. It fuses real-time scanning, integrated intelligence, and crystal-clear 
              actionable reports — transforming your entire infrastructure into an impenetrable fortress, fast and fearlessly.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Instant Ideation */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold">Instant Ideation</h3>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Skip the blank canvas and spark creativity instantly. Our AI generates high-quality concepts, layouts, and
              design elements in seconds.
            </p>
          </div>

          {/* Smart Adaptability */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold">Smart Adaptability</h3>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands
              your preferences, and adapts to your unique design language.
            </p>
          </div>

          {/* Multi-Format Export */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold">Multi-Format Export</h3>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for web, or
              mobile-optimized assets.
            </p>
          </div>

          {/* Seamless Revisions */}
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold">Seamless Revisions</h3>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
