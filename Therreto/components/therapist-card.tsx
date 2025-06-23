import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Calendar } from "lucide-react"

interface TherapistCardProps {
  therapist: {
    id: number
    name: string
    image: string
    specializations: string[]
    rating: number
    reviewCount: number
    price: number
    gender: string
    yearsExperience: number
    availability: string[]
  }
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img src={therapist.image || "/placeholder.svg"} alt={therapist.name} className="object-cover w-full h-full" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{therapist.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{therapist.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({therapist.reviewCount})</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-3">{therapist.yearsExperience} years experience</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {therapist.specializations.map((specialization, index) => (
            <Badge key={index} variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
              {specialization}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{therapist.availability.join(", ")}</span>
          </div>
          <p className="font-semibold">${therapist.price}/session</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/therapists/${therapist.id}`} className="w-full">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
