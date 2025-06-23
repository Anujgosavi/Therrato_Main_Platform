import Link from "next/link";

export default function Page() {
  return (
    <main>
      <ServicesSection />
      {/* Other content */}
    </main>
  );
}

export function ServicesSection() {
  return (
    <div className="w-full">
      {/* <div className="w-full bg-gradient-to-r from-emerald-50 to-white py-16 border-b">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            For Patients
          </h2>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/therapists"
              className="flex-1 min-w-[300px] group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700">
                Find a Therapist
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Browse our network of qualified mental health professionals and
                find your ideal match.
              </p>
            </Link>

            <Link
              href="/appointments"
              className="flex-1 min-w-[300px] group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700">
                My Appointments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule and manage your therapy sessions all in one place.
              </p>
            </Link>

            <Link
              href="/resources"
              className="flex-1 min-w-[300px] group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700">
                Mental Health Resources
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access helpful resources and guides for your mental health
                journey.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Therapist Section 
      <div className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            For Therapists
          </h2>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/therapist/profile-setup"
              className="flex-1 min-w-[300px] group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700">
                Profile Setup
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create and customize your professional profile to attract
                potential clients.
              </p>
            </Link>

            <Link
              href="/therapist/appointments"
              className="flex-1 min-w-[300px] group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700">
                Manage Appointments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your schedule and manage client appointments
                efficiently.
              </p>
            </Link>

            <Link
              href="/therapist/resources"
              className="flex-1 min-w-[300px] group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700">
                Professional Resources
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access tools and resources to enhance your practice.
              </p>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
