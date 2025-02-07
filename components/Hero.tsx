import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="text-blue-600 font-semibold text-lg mb-2">Launch Your Tech Career</p>
        <h1 className="text-5xl font-bold mb-6">Become a Full Stack Developer</h1>
        <h2 className="text-3xl font-semibold mb-8 text-gray-700">From Beginner to Job-Ready in Just 12 Weeks</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our intensive 3-month cohort and gain the skills to build, deploy, and maintain modern web applications.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          
          <Link href='https://dub.sh/Fullstackdevcohort'>Join the Cohort</Link>
        </Button>
        <p className="mt-6 text-gray-600">Limited spots available. Next cohort starts soon!</p>
      </div>
    </section>
  )
}
