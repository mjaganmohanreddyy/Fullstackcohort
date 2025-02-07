import { CheckCircle } from "lucide-react"

const topics = ["HTML & CSS", "JavaScript", "Node.js", "React.js", "Next.js"]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-lg font-semibold">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
