import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Therreto</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connecting you with mental health professionals for a healthier mind.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Patients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/therapists" className="text-gray-600 hover:text-emerald-600">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-600 hover:text-emerald-600">
                  My Appointments
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-emerald-600">
                  Mental Health Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Therapists</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/therapist/profile-setup" className="text-gray-600 hover:text-emerald-600">
                  Profile Setup
                </Link>
              </li>
              <li>
                <Link href="/therapist/appointments" className="text-gray-600 hover:text-emerald-600">
                  Manage Appointments
                </Link>
              </li>
              <li>
                <Link href="/therapist/resources" className="text-gray-600 hover:text-emerald-600">
                  Professional Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-emerald-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-emerald-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-emerald-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-emerald-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Therreto Mental Health Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
