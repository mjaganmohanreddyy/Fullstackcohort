import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </div>
  )
}
