"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Everything you need to supercharge your productivity.",
      features: [
        "20 design generations/month",
        "Low-res downloads",
        "Basic style presets",
        "Limited customization options",
      ],
      buttonText: "Subscribe",
      popular: false,
    },
    {
      name: "Pro",
      price: { monthly: 17, yearly: 170 },
      description: "Unlock a new level of your personal productivity.",
      features: [
        "Everything in Free",
        "Enigma AI",
        "Unlimited design generations",
        "Custom Themes",
        "High-resolution Exports",
        "Custom Extensions",
        "Developer Tools",
      ],
      buttonText: "Subscribe",
      popular: true,
    },
    {
      name: "Team",
      price: { monthly: 37, yearly: 370 },
      description: "Everything you need to supercharge your productivity.",
      features: ["Everything in Free", "Unlimited Shared Commands", "Unlimited Shared Quicklinks", "Priority support"],
      buttonText: "Subscribe",
      popular: false,
    },
  ]

  return (
    <section 
      className="min-h-screen py-20 px-4"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose the Plan
            <br />
            That's Right for You
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Giving you access to essential features and over 1,000 creative tools. Upgrade to the Pro Plan to unlock
            powerful AI capabilities, cloud syncing, and a whole new level of creative freedom.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "monthly" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "yearly" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-black/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:bg-black/20 group ${
                plan.popular
                  ? "border-2 border-orange-500 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/20"
                  : "border border-slate-700 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-500/10"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/80 text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price[billingCycle]}</span>
                  <span className="text-white/70">/ {billingCycle === "monthly" ? "month" : "year"}</span>
                  {billingCycle === "yearly" && plan.price.yearly > 0 && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs ml-2">Save</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-white font-medium mb-4">What's included</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-white/90">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? "bg-orange-500" : "bg-slate-600"
                        }`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe Button */}
              <Button
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 group-hover:scale-105 ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {plan.buttonText}
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
