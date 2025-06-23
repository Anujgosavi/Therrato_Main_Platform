import Link from "next/link";
import PatientSection from "@/components/PatientSection";
import TherapistSection from "@/components/TherapistSection";

export default function Footer() {
  return (
    <div className="bg-white py-16">
      {/* <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4"></div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-900">For Patients</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/therapists"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link
                  href="/appointments"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  My Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Mental Health Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-900">For Therapists</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/therapist/profile-setup"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Profile Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/therapist/appointments"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Manage Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/therapist/resources"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Professional Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Therreto Mental Health Platform.
            All rights reserved.
          </p>
        </div>
      </div> */}
    </div>
  );
}

// Example usage in a page
export function SomePage() {
  return (
    <div>
      <PatientSection />
      <TherapistSection />
      {/* Other content */}
    </div>
  );
}
