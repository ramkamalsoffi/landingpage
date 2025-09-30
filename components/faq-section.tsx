"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How does network scanning help protect my business?",
    answer:
      "Network scanning identifies open ports, misconfigurations, and vulnerable services across your IT infrastructure. This ensures you can fix issues before attackers exploit them, keeping your systems compliant and secure.",
  },
  {
    question: "What is the difference between web application scanning and penetration testing?",
    answer:
      "Web application scanning is automated and continuous, designed to detect vulnerabilities like SQL injection or XSS. Penetration testing, on the other hand, is a one-time, manual process. Our SaaS platform offers ongoing web app scanning to catch risks between pen tests.",
  },
  {
    question: "Why is database scanning important for compliance?",
    answer:
      "Databases often hold sensitive data. Continuous database scanning helps detect weak passwords, unpatched software, and misconfigurations that may violate GDPR, HIPAA, or PCI-DSS. This makes compliance reporting easier and reduces audit risks.",
  },
  {
    question: "How does endpoint scanning prevent insider and malware threats?",
    answer:
      "Host/endpoint scanning checks for unpatched systems, unauthorized applications, and malware indicators on devices such as laptops and servers. This protects against insider misuse and ransomware attacks that start at the endpoint level.",
  },
  {
    question: "Can cloud and container scanning secure multi-cloud environments?",
    answer:
      "Yes. Our cloud/container scanning identifies misconfigurations, exposed APIs, and insecure images across AWS, Azure, GCP, and Kubernetes. It provides a unified dashboard, enabling you to enforce security policies across all environments in real-time.",
  },
]

interface FAQSectionProps {
  className?: string
}

export function FAQSection({ className = "" }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section 
      className={`relative min-h-screen py-20 px-4 ${className}`}
      style={{
        backgroundImage: "url('/hero/above footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Find everything you need to know about using our platform, plans, and
            features.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-black/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-black/20"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between group"
              >
                <span className="text-white text-lg md:text-xl font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
