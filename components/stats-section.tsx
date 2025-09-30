export function StatsSection() {
  return (
    <section 
      className="py-16 px-6 lg:px-12"
      style={{
        backgroundImage: "url('/hero/middle-0.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {/* Clients Stat */}
          <div className="space-y-2">
            <p className="text-orange-500 text-lg font-medium">Actionable Custom Reports</p>
            <p className="text-white text-4xl md:text-5xl font-bold">120K+</p>
          </div>

          {/* Projects Stat */}
          <div className="space-y-2">
            <p className="text-orange-500 text-lg font-medium">AI-Driven Instant Fixes</p>
            <p className="text-white text-4xl md:text-5xl font-bold">150+</p>
          </div>

          {/* Reviews Stat */}
          <div className="space-y-2">
            <p className="text-orange-500 text-lg font-medium">Unified 360° Scanning</p>
            <p className="text-white text-4xl md:text-5xl font-bold">32K+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
