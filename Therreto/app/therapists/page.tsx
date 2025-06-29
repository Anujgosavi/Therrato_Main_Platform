"use client";

import { useEffect, useState } from "react";
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

type Therapist = {
  _id: string;
  firstName: string;
  lastName: string;
  selectedSpecializations?: string[];
  ratings?: number;
  price?: number;
  experience?: number;
  gender?: string;
  photo?: string;
  reviewCount?: number;
  availability?: string[];
};

export default function TherapistsPage() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [specialization, setSpecialization] = useState("");
  const [gender, setGender] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("rating");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  const fetchTherapists = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();

      // Only add filters if user sets them!
      if (searchTerm) params.append("name", searchTerm);
      if (specialization && specialization !== "all" && specialization !== "")
        params.append("selectedSpecializations", specialization);
      if (gender && gender !== "any" && gender !== "")
        params.append("gender", gender);

      // Only add price filter if user changes it from default
      if (priceRange[0] !== 0)
        params.append("price[gte]", priceRange[0].toString());
      if (priceRange[1] !== 200)
        params.append("price[lte]", priceRange[1].toString());

      // Sorting
      let sortParam = "";
      switch (sortBy) {
        case "rating":
          sortParam = "-ratings";
          break;
        case "price_low":
          sortParam = "price";
          break;
        case "price_high":
          sortParam = "-price";
          break;
        case "experience":
          sortParam = "-experience";
          break;
        default:
          sortParam = "-ratings";
      }
      params.append("sort", sortParam);

      // Pagination
      params.append("page", "1");
      params.append("limit", "9");

      const url = `https://therrato-main.onrender.com/api/v1/therapists/getAllTherapists?${params.toString()}`;
      setApiUrl(url); // For debugging
      console.log("API URL:", url); // Debug log

      const response = await fetch(url);
      console.log("Response status:", response.status); // Debug log

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Debug log

      if (!data.data?.therapists) {
        throw new Error("No therapists data in response");
      }

      setTherapists(data.data.therapists);
    } catch (err) {
      console.error("Fetch error:", err);
      if (err instanceof Error) {
        setError(`Error loading therapists: ${err.message}`);
      } else {
        setError("Error loading therapists: An unknown error occurred");
      }
      setTherapists([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchTherapists, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, priceRange, specialization, gender, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Debug Panel - Remove in production */}
      {/* <div className="mb-4 p-4 bg-gray-100 rounded-md">
        <h3 className="font-bold mb-2">Debug Information</h3>
        <div className="text-sm mb-2">API URL: {apiUrl}</div>
        <div className="text-sm">Response Count: {therapists.length}</div>
        {error && <div className="text-sm text-red-500">Error: {error}</div>}
      </div> */}

      {/* Rest of your UI remains the same */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find a Therapist</h1>
        <p className="text-gray-600">
          Browse our network of licensed mental health professionals to find the
          right match for you.
        </p>
      </div>

      {/* Search and Filter UI */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by name..."
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

      {/* Sorting UI */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            {loading
              ? "Loading therapists..."
              : `${therapists.length} therapists found`}
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

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapists.map((therapist) => (
              <TherapistCard
                key={therapist._id}
                therapist={{
                  id: therapist._id,
                  name: `${therapist.firstName} ${therapist.lastName}`,
                  image: therapist.photo || "/placeholder-profile.png",
                  specializations: therapist.selectedSpecializations || [],
                  rating: therapist.ratings || 0,
                  reviewCount: therapist.reviewCount || 0,
                  price: therapist.price || 0,
                  gender: therapist.gender || "Not specified",
                  yearsExperience: therapist.experience || 0,
                  availability: therapist.availability || [],
                }}
              />
            ))}
          </div>

          {therapists.length === 0 && !loading && (
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
                  setSortBy("rating");
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
