import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PatientSection from "@/components/PatientSection";
import TherapistSection from "@/components/TherapistSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Your mental health journey starts here
            </h1>
            <p className="text-xl text-gray-600">
              Connect with licensed therapists for personalized support from the
              comfort of your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/therapists">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Find a Therapist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/therapist/profile-setup">
                <Button size="lg" variant="outline">
                  Therapist Profile Setup
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center">
              <img
                src="./main.png"
                alt="Therapy session illustration"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <PatientSection />
      <TherapistSection />
    </div>
  );
}
