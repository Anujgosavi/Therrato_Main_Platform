"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";
import TherapistCard from "@/components/therapist-card";

// Mock data for therapists
const therapists = [
  {
    id: 1,
    name: "Dr. Kavita Sharma",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-1.jpg-QmL8eBPTMftimvTdtRaUiPMwUz4Spi.png",
    specializations: ["Anxiety", "Depression", "Trauma"],
    rating: 4.9,
    reviewCount: 124,
    price: 85,
    gender: "Female",
    yearsExperience: 8,
    availability: ["Mon", "Wed", "Fri"],
  },
  {
    id: 2,
    name: "Dr. Rajiv Gupta",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-2.jpg-e8xyOHUgV9D2Z3zxzI9AYhuHnJAAIs.png",
    specializations: [
      "Relationships",
      "Stress Management",
      "Work-Life Balance",
    ],
    rating: 4.7,
    reviewCount: 98,
    price: 75,
    gender: "Male",
    yearsExperience: 6,
    availability: ["Tue", "Thu", "Sat"],
  },
  {
    id: 3,
    name: "Dr. Anjali Patel",
    image: "/placeholder.svg?height=200&width=200",
    specializations: ["PTSD", "Grief", "Family Therapy"],
    rating: 4.8,
    reviewCount: 112,
    price: 90,
    gender: "Female",
    yearsExperience: 10,
    availability: ["Mon", "Tue", "Wed", "Thu"],
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    image: "/placeholder.svg?height=200&width=200",
    specializations: ["Addiction", "Depression", "Anxiety"],
    rating: 4.6,
    reviewCount: 87,
    price: 80,
    gender: "Male",
    yearsExperience: 7,
    availability: ["Wed", "Thu", "Fri", "Sat"],
  },
  {
    id: 5,
    name: "Dr. Priya Desai",
    image: "/placeholder.svg?height=200&width=200",
    specializations: ["Child Therapy", "ADHD", "Behavioral Issues"],
    rating: 4.9,
    reviewCount: 135,
    price: 95,
    gender: "Female",
    yearsExperience: 9,
    availability: ["Mon", "Tue", "Fri"],
  },
  {
    id: 6,
    name: "Dr. Suresh Iyer",
    image: "/placeholder.svg?height=200&width=200",
    specializations: ["Couples Therapy", "Communication", "Relationships"],
    rating: 4.8,
    reviewCount: 104,
    price: 85,
    gender: "Male",
    yearsExperience: 12,
    availability: ["Tue", "Wed", "Sat", "Sun"],
  },
];

export default function TherapistsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [specialization, setSpecialization] = useState("");
  const [gender, setGender] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("rating");

  // Filter therapists based on search and filters
  const filteredTherapists = therapists
    .filter((therapist) => {
      // Search term filter
      const matchesSearch =
        therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        therapist.specializations.some((spec) =>
          spec.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Price range filter
      const matchesPrice =
        therapist.price >= priceRange[0] && therapist.price <= priceRange[1];

      // Specialization filter
      const matchesSpecialization =
        specialization === "" ||
        therapist.specializations.some(
          (spec) => spec.toLowerCase() === specialization.toLowerCase()
        );

      // Gender filter
      const matchesGender =
        gender === "" ||
        therapist.gender.toLowerCase() === gender.toLowerCase();

      return (
        matchesSearch && matchesPrice && matchesSpecialization && matchesGender
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price_low":
          return a.price - b.price;
        case "price_high":
          return b.price - a.price;
        case "experience":
          return b.yearsExperience - a.yearsExperience;
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find a Therapist</h1>
        <p className="text-gray-600">
          Browse our network of licensed mental health professionals to find the
          right match for you.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto w-full flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <Card className="mt-4">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <div className="pt-4">
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Specialization</label>
                  <Select
                    value={specialization}
                    onValueChange={setSpecialization}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specializations</SelectItem>
                      <SelectItem value="Anxiety">Anxiety</SelectItem>
                      <SelectItem value="Depression">Depression</SelectItem>
                      <SelectItem value="Trauma">Trauma</SelectItem>
                      <SelectItem value="Relationships">
                        Relationships
                      </SelectItem>
                      <SelectItem value="Stress Management">
                        Stress Management
                      </SelectItem>
                      <SelectItem value="PTSD">PTSD</SelectItem>
                      <SelectItem value="Grief">Grief</SelectItem>
                      <SelectItem value="Addiction">Addiction</SelectItem>
                      <SelectItem value="Child Therapy">
                        Child Therapy
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Gender</label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Gender</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Non-binary">Non-binary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setPriceRange([0, 200]);
                    setSpecialization("");
                    setGender("");
                  }}
                  className="mr-2"
                >
                  Reset
                </Button>
                <Button
                  onClick={() => setShowFilters(false)}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            {filteredTherapists.length} therapists found
          </p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Sort by Rating</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTherapists.map((therapist) => (
          <TherapistCard key={therapist.id} therapist={therapist} />
        ))}
      </div>

      {filteredTherapists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">
            No therapists match your search criteria.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setPriceRange([0, 200]);
              setSpecialization("");
              setGender("");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
