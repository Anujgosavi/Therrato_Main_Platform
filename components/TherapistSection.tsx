import Link from "next/link";
import styles from "./TherapistSection.module.css";

export default function TherapistSection() {
  return (
    <div className={`w-full py-12 ${styles.section}`}>
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">For Therapists</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="/therapist/profile-setup"
              className="block w-full px-6 py-4 rounded-lg shadow"
            >
              Profile Setup
            </Link>
          </li>
          <li>
            <Link
              href="/therapist/appointments"
              className="block w-full px-6 py-4 rounded-lg shadow"
            >
              Manage Appointments
            </Link>
          </li>
          <li>
            <Link
              href="/therapist/resources"
              className="block w-full px-6 py-4 rounded-lg shadow"
            >
              Professional Resources
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
