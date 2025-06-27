import Link from "next/link";
import styles from "./PatientSection.module.css";

export default function PatientSection() {
  return (
    <div className={`w-full py-12 mb-8 ${styles.section}`}>
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">For Patients</h2>
        <li>
          <Link
            href="/patient/profile-setup"
            className="block w-full px-6 py-4 rounded-lg shadow"
          >
            Profile Setup
          </Link>
        </li>
        <ul className="space-y-4">
          <li>
            <Link
              href="/therapists"
              className="block w-full px-6 py-4 rounded-lg shadow"
            >
              Find a Therapist
            </Link>
          </li>
          <li>
            <Link
              href="/appointments"
              className="block w-full px-6 py-4 rounded-lg shadow"
            >
              My Appointments
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="block w-full px-6 py-4 rounded-lg shadow"
            >
              Mental Health Resources
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
