import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Career in Tech?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don't miss this opportunity to learn from industry experts and build a portfolio that will make you stand out
          to employers.
        </p>
        <Button size="lg" variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100 text-lg px-8 py-6">
          
          <Link href='https://dub.sh/Fullstackdevcohort'>Apply Now and Transform Your Future</Link>

        </Button>
        <p className="mt-8 text-sm">Limited spots available. Next cohort starts soon!</p>
      </div>
    </section>
  )
}

