import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function GetStartedSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Secure Your Digital World Today.</h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a freelancer, a team, or a growing agency—our tools adapt to your workflow. Design faster.
            Deliver better.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Get Free Scan Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
