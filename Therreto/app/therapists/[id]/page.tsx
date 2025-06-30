"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, CalendarIcon, Heart, Share2 } from "lucide-react";
import BookingForm from "@/components/booking-form";

export default function TherapistProfilePage() {
  const params = useParams();
  const { id } = params as { id: string };
  const [therapist, setTherapist] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTherapist() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://therrato-main.onrender.com/api/v1/therapists/${id}`
        );
        const data = await res.json();
        setTherapist(data.data?.therapist || null);
      } catch (err) {
        setTherapist(null);
      } finally {
        setLoading(false);
      }
    }
    fetchTherapist();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!therapist) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Therapist not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/therapists"
          className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
        >
          ← Back to therapists
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={
                    therapist.photo ||
                    therapist.image ||
                    "/placeholder-profile.png"
                  }
                  alt={therapist.firstName || therapist.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold mb-2">
                  {therapist.title ? therapist.title + " " : ""}
                  {therapist.firstName || ""}{" "}
                  {therapist.lastName || therapist.name || ""}
                </h1>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium mr-1">
                  {therapist.ratings ?? therapist.rating ?? 0}
                </span>
                <span className="text-gray-500">
                  ({therapist.reviewCount ?? 0} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {(
                  therapist.selectedSpecializations ||
                  therapist.specializations ||
                  []
                ).map((specialization: string, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-emerald-50 text-emerald-700"
                  >
                    {specialization}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>
                    {Number(therapist.experience) ||
                      therapist.yearsExperience ||
                      0}{" "}
                    years experience
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>Online Sessions</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>
                    Available: {(therapist.availability || []).join(", ")}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold text-black">
                    ${therapist.price}/session
                  </span>
                </div>
              </div>

              <div className="hidden md:block">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Book a Session
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about" className="mb-8">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="approach">Approach</TabsTrigger>
              {/* Add more tabs as needed */}
            </TabsList>

            <TabsContent value="about" className="space-y-4">
              <h2 className="text-xl font-semibold">
                About {therapist.firstName || therapist.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {therapist.bio || therapist.about}
              </p>
              {therapist.languages && therapist.languages.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {therapist.languages.map(
                      (language: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {language}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <div className="text-gray-700">
                  {therapist.education || "Not specified"}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Licenses & Certifications
                </h2>
                <div className="text-gray-700">
                  {therapist.certifications || "Not specified"}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="approach" className="space-y-4">
              <h2 className="text-xl font-semibold">Therapeutic Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                {therapist.approach || "Not specified"}
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
                <BookingForm therapistId={id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
