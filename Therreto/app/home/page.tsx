import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PatientSection from "@/components/PatientSection";
import TherapistSection from "@/components/TherapistSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-20 bg-emerald-50 rounded-xl">
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="w-full flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center md:text-left">
                  Your mental health journey starts here
                </h1>
                <p className="text-xl text-gray-600 text-center md:text-left">
                  Connect with licensed therapists for personalized support from
                  the comfort of your home.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
              {/* You can uncomment and use your image section here if needed */}
            </div>
          </div>
        </div>
      </section>
      <PatientSection />
      <TherapistSection />
    </div>
  );
}
