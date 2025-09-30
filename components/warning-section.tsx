import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function WarningSection() {
  return (
    <section 
      className="py-20 px-4"
      style={{
        backgroundImage: "url('/hero/middle-0.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div 
          className="backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center"
          style={{
            backgroundImage: "url('/hero/getin-Section.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
           <div className="flex justify-center mb-6">
             <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
               <Shield className="w-8 h-8 text-white" />
             </div>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Don't Wait Until It's <span className="text-orange-500">Too Late</span>
           </h2>
           
           <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
             Cyber threats evolve every second. Delaying protection means risking costly breaches and downtime.
           </p>
           
           <Button
             size="lg"
             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
           >
            Protect My Business Now
          </Button>
        </div>
      </div>
    </section>
  )
}
