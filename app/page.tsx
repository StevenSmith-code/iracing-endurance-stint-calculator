import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Flag, Fuel, Clock, BarChart } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">
          FuelStint
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="hover:text-red-500 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#cta" className="hover:text-red-500 transition-colors">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Your Fuel Strategy</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Optimize your iRacing endurance race performance with precision fuel calculations
          </p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            Try It Now
          </Button>
        </section>

        <section id="features" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Fuel className="w-12 h-12 text-red-500" />}
                title="Precise Calculations"
                description="Get accurate fuel estimates based on your car and track data"
              />
              <FeatureCard
                icon={<Clock className="w-12 h-12 text-red-500" />}
                title="Stint Optimization"
                description="Plan perfect pit stops and maximize your time on track"
              />
              <FeatureCard
                icon={<BarChart className="w-12 h-12 text-red-500" />}
                title="Performance Tracking"
                description="Monitor your fuel consumption and improve efficiency"
              />
              <FeatureCard
                icon={<Flag className="w-12 h-12 text-red-500" />}
                title="Race Strategies"
                description="Develop winning strategies for any endurance race"
              />
            </div>
          </div>
        </section>

        <section id="cta" className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate the Track?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of teams who have optimized their fuel strategy</p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
                Get Early Access
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FuelStint. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

