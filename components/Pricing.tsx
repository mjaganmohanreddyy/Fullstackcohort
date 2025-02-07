import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Affordable Investment in Your Future</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4">Full Stack Developer Cohort</h3>
          <p className="text-4xl font-bold mb-6">₹20,000</p>
          <p className="mb-6">for 3 months of intensive training</p>
          <ul className="text-left mb-8">
            <li className="mb-2">✅ Comprehensive curriculum</li>
            <li className="mb-2">✅ Hands-on projects</li>
            <li className="mb-2">✅ Expert instructors</li>
            <li>✅ Career support</li>
          </ul>
          <p className="mb-8 font-semibold">Installment plans available!</p>
          <Button size="lg" className="w-full">
            <Link href='https://dub.sh/Fullstackdevcohort'>Enroll Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}