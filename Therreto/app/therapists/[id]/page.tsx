"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, CalendarIcon, Heart, Share2 } from "lucide-react";
import BookingForm from "@/components/booking-form";

// Mock data for a single therapist
const therapist = {
  id: 1,
  name: "Dr. Kavita Sharma",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/therapist-1.jpg-QmL8eBPTMftimvTdtRaUiPMwUz4Spi.png",
  specializations: ["Anxiety", "Depression", "Trauma", "Stress Management"],
  rating: 4.9,
  reviewCount: 124,
  price: 85,
  gender: "Female",
  yearsExperience: 8,
  availability: ["Mon", "Wed", "Fri"],
  education: [
    {
      degree: "Ph.D. in Clinical Psychology",
      institution: "Delhi University",
      year: "2015",
    },
    {
      degree: "M.A. in Psychology",
      institution: "Jawaharlal Nehru University",
      year: "2012",
    },
    {
      degree: "B.A. in Psychology",
      institution: "University of Mumbai",
      year: "2010",
    },
  ],
  licenses: [
    "Licensed Clinical Psychologist - Delhi #PSY12345",
    "Certified Cognitive Behavioral Therapist",
  ],
  languages: ["English", "Hindi"],
  approach:
    "I use an integrative approach combining cognitive-behavioral therapy, mindfulness techniques, and solution-focused strategies tailored to each client's unique needs. My goal is to create a safe, supportive environment where you can explore challenges, develop insights, and build practical skills for lasting change.",
  about:
    "With over 8 years of experience, I specialize in helping adults navigate anxiety, depression, trauma, and life transitions. I believe in a collaborative therapeutic relationship that honors your strengths while compassionately addressing areas for growth. My approach is both evidence-based and heart-centered, focusing on practical strategies while acknowledging the importance of emotional healing.",
  reviews: [
    {
      id: 1,
      author: "Ramesh Gupta",
      rating: 5,
      date: "March 15, 2023",
      content:
        "Dr. Kavita Sharma has been incredibly helpful in my journey with anxiety. Her approach is compassionate yet practical, and I've gained valuable tools to manage my symptoms.",
    },
    {
      id: 2,
      author: "Priya Mehta",
      rating: 5,
      date: "February 3, 2023",
      content:
        "I was hesitant about therapy, but Dr. Kavita Sharma made me feel comfortable from our first session. She's helped me work through some difficult trauma with patience and understanding.",
    },
    {
      id: 3,
      author: "Amit Patel",
      rating: 4,
      date: "January 12, 2023",
      content:
        "Dr. Kavita Sharma is professional, insightful, and genuinely caring. She's helped me develop better coping mechanisms for stress and anxiety.",
    },
  ],
};

export default function TherapistProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

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
                  src={therapist.image || "/placeholder.svg"}
                  alt={therapist.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold mb-2">{therapist.name}</h1>
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
                <span className="font-medium mr-1">{therapist.rating}</span>
                <span className="text-gray-500">
                  ({therapist.reviewCount} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {therapist.specializations.map((specialization, index) => (
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
                  <span>{therapist.yearsExperience} years experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>Online Sessions</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>Available: {therapist.availability.join(", ")}</span>
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
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-4">
              <h2 className="text-xl font-semibold">About {therapist.name}</h2>
              <p className="text-gray-700 leading-relaxed">{therapist.about}</p>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {therapist.languages.map((language, index) => (
                    <Badge key={index} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <ul className="space-y-4">
                  {therapist.education.map((edu, index) => (
                    <li
                      key={index}
                      className="border-l-2 border-emerald-500 pl-4"
                    >
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-gray-600">
                        {edu.institution}, {edu.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Licenses & Certifications
                </h2>
                <ul className="space-y-2">
                  {therapist.licenses.map((license, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 mr-2"></div>
                      <span>{license}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="approach" className="space-y-4">
              <h2 className="text-xl font-semibold">Therapeutic Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                {therapist.approach}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Treatment Methods</h3>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600">
                        • Cognitive Behavioral Therapy (CBT)
                      </li>
                      <li className="text-sm text-gray-600">
                        • Mindfulness-Based Therapy
                      </li>
                      <li className="text-sm text-gray-600">
                        • Solution-Focused Brief Therapy
                      </li>
                      <li className="text-sm text-gray-600">
                        • Trauma-Informed Care
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Session Structure</h3>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600">
                        • 50-minute standard sessions
                      </li>
                      <li className="text-sm text-gray-600">
                        • Initial assessment (60 minutes)
                      </li>
                      <li className="text-sm text-gray-600">
                        • Goal-setting and progress tracking
                      </li>
                      <li className="text-sm text-gray-600">
                        • Optional between-session resources
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Client Reviews</h2>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium mr-1">{therapist.rating}</span>
                  <span className="text-gray-500">
                    ({therapist.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {therapist.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{review.author}</h3>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
                <BookingForm therapistId={params.id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
