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
      <div className="mb-4 p-4 bg-gray-100 rounded-md">
        <h3 className="font-bold mb-2">Debug Information</h3>
        <div className="text-sm mb-2">API URL: {apiUrl}</div>
        <div className="text-sm">Response Count: {therapists.length}</div>
        {error && <div className="text-sm text-red-500">Error: {error}</div>}
      </div>

      {/* Rest of your UI remains the same */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find a Therapist</h1>
        <p className="text-gray-600">
          Browse our network of licensed mental health professionals to find the
          right match for you.
        </p>
      </div>

      {/* Search and Filter UI (same as your hardcoded version) */}
      {/* ... */}

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
