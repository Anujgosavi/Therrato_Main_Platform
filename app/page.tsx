"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardCheck,
  PenLine,
  Calculator,
  Brain,
  Users,
  School,
} from "lucide-react";
import AuthModal from "./appointments/AuthModel";

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            Therreto
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-gray-700 hover:text-emerald-500"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-emerald-500"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-emerald-500"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-emerald-500"
            >
              Testimonials
            </Link>
            <button
              onClick={() => setShowSignIn(true)}
              className="ml-4 px-4 py-2 rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-50 font-medium transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowSignUp(true)}
              className="ml-2 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 font-medium transition-colors"
            >
              Sign Up
            </button>
          </nav>
          <Link
            href="/home"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Sign In Modal */}
      {showSignIn && (
        <AuthModal
          mode="signin"
          onClose={() => setShowSignIn(false)}
          onSwitch={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
      )}
      {/* Sign Up Modal */}
      {showSignUp && (
        <AuthModal
          mode="signup"
          onClose={() => setShowSignUp(false)}
          onSwitch={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      )}

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-emerald-50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                <span className="block">Clinically proven.</span>
                <span className="block text-emerald-500">Kid-approved.</span>
              </h1>
              <p className="text-lg text-gray-600">
                Therreto helps diagnose and address learning disabilities
                including ADHD, Dyslexia, Dyscalculia, and Dysgraphia with
                expert therapists and proven methods.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/home"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#how-it-works"
                  className="border border-gray-300 hover:border-emerald-500 hover:text-emerald-500 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/main_image.png"
                alt="Child illustration"
                width={550}
                height={550}
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full border-4 border-emerald-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">
                      68%
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-t-4 border-r-4 border-emerald-500 rotate-45"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Parent-Reported Improvement
                </h3>
                <p className="text-gray-600">
                  of parents reported improvement in{" "}
                  <span className="text-emerald-500">
                    ADHD-related impairments
                  </span>{" "}
                  after two months of treatment.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Based on clinical studies
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full border-4 border-emerald-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">
                      73%
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-t-4 border-r-4 border-emerald-500 rotate-45"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Attention Enhancement
                </h3>
                <p className="text-gray-600">
                  of children reported an{" "}
                  <span className="text-emerald-500">
                    improvement in their attention
                  </span>{" "}
                  with regular use of Therreto.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Based on exit surveys
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full border-4 border-emerald-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">0%</span>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-t-4 border-r-4 border-emerald-500 rotate-45"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Safe & Effective</h3>
                <p className="text-gray-600">
                  There were no serious adverse events seen in any clinical
                  trials of Therreto.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Based on rigorous testing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Stats */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">
                  90%
                </div>
                <h3 className="text-lg font-medium mb-2">User Satisfaction</h3>
                <p className="text-sm text-gray-600">
                  of parents and educators would recommend Therreto to others
                  working with children who have learning disabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">
                  30+
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Specialized Assessments
                </h3>
                <p className="text-sm text-gray-600">
                  Our platform includes over 30 specialized assessments to
                  accurately diagnose various learning disabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">
                  10+
                </div>
                <h3 className="text-lg font-medium mb-2">Years of Expertise</h3>
                <p className="text-sm text-gray-600">
                  Years of combined expertise in learning disability assessment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">
                  5,000+
                </div>
                <h3 className="text-lg font-medium mb-2">Children Helped</h3>
                <p className="text-sm text-gray-600">
                  Children helped through our platform and methodologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Transforming how we identify and support learning differences
                with technology and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-18%20154050-hglh3tdpFHlMfzEuYhXuYRi1K4cIjJ.png"
                  alt="Two people smiling at the beach"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    At Therreto, we're dedicated to making learning disability
                    diagnosis accessible, accurate, and actionable. Our platform
                    combines clinical expertise with innovative technology to
                    identify ADHD, Dyslexia, Dysgraphia, Dyscalculia and other
                    learning differences.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    What Makes Us Different
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Comprehensive assessments developed by leading experts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Personalized intervention plans based on individual
                        needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Ongoing progress monitoring with actionable insights
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Collaboration tools connecting parents, educators, and
                        therapists
                      </span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="#services"
                  className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Explore Our Services
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive assessment and support solutions for learning
                disabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <Brain className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">ADHD Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive evaluation to identify attention and
                  hyperactivity challenges using standardized tools and clinical
                  interviews.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Attention span evaluation</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Executive function testing</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Behavioral observation</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="text-emerald-500 hover:text-emerald-600 inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <ClipboardCheck className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dyslexia Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Specialized reading and language processing evaluation to
                  identify reading disabilities and create effective
                  interventions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Phonological awareness testing</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Reading fluency assessment</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Comprehension evaluation</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="text-emerald-500 hover:text-emerald-600 inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <PenLine className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Dysgraphia Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed evaluation of writing skills and fine motor
                  coordination to identify and address writing difficulties.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Handwriting analysis</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Fine motor skills testing</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Written expression evaluation</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="text-emerald-500 hover:text-emerald-600 inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <Calculator className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Dyscalculia Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Mathematical skills evaluation to identify difficulties with
                  numbers, calculations, and mathematical reasoning.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Number sense assessment</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Math fluency testing</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Mathematical reasoning evaluation</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="text-emerald-500 hover:text-emerald-600 inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <svg
                    className="h-6 w-6 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Personalized Intervention
                </h3>
                <p className="text-gray-600 mb-4">
                  Customized strategies and support plans tailored to individual
                  needs based on assessment findings.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Customized learning strategies</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Assistive technology recommendations</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Progress monitoring tools</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="text-emerald-500 hover:text-emerald-600 inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <Users className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Educator & Parent Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Resources, training, and guidance for educators and parents to
                  effectively support children with learning disabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Educational workshops</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Classroom accommodation guides</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Home support strategies</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="text-emerald-500 hover:text-emerald-600 inline-flex items-center text-sm font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our simple, effective process helps identify and address
                learning disabilities with personalized support.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 transform -translate-x-1/2"></div>

              <div className="space-y-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-16">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold mb-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      1
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Initial Assessment
                    </h3>
                    <p className="text-gray-600">
                      Complete our comprehensive online screening that evaluates
                      multiple areas of learning and cognitive function.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>20-minute online questionnaire</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>Parent and teacher input options</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>Evaluates across multiple learning domains</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>Secure and confidential</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                    </ul>
                  </div>
                  <div className="md:hidden"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:hidden"></div>
                  <div className="md:pl-16">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold mb-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      2
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Professional Analysis
                    </h3>
                    <p className="text-gray-600">
                      Our team of specialists reviews your assessment results
                      and provides a detailed evaluation report.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>Expert evaluation by licensed specialists</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>
                          Detailed analysis of strengths and challenges
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>
                          Identification of specific learning disabilities
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>Completed within 48 hours</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-16">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold mb-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      3
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Personalized Plan
                    </h3>
                    <p className="text-gray-600">
                      Receive a customized intervention plan with specific
                      strategies tailored to the identified learning needs.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>Customized intervention strategies</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>School accommodation recommendations</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>At-home support activities</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                      <li className="flex items-center md:justify-end text-sm text-gray-600">
                        <span>Technology and tool recommendations</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-2" />
                      </li>
                    </ul>
                  </div>
                  <div className="md:hidden"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:hidden"></div>
                  <div className="md:pl-16">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold mb-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      4
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Connect with our specialists for implementation guidance
                      and track progress with regular check-ins.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>Scheduled check-ins with specialists</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>Progress tracking dashboard</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>Plan adjustments based on results</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>Community support resources</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Validated Assessment Tools
                </h3>
                <p className="text-gray-600">
                  Evidence-based diagnostic tools developed with leading
                  researchers and clinically validated.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customized Approach</h3>
                <p className="text-gray-600">
                  Personalized intervention plans tailored to each child's
                  unique learning profile and specific needs.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <School className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Collaborative Platform
                </h3>
                <p className="text-gray-600">
                  Connect parents, teachers, and specialists on one platform to
                  ensure consistent support across environments.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#get-started"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Start Your Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from parents and educators about their experience with
                Therreto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-500 text-white p-8 rounded-lg">
                <div className="text-4xl font-serif mb-4">"</div>
                <p className="italic mb-6">
                  "He had been using Therreto for probably a couple of weeks,
                  and one of the first things his teacher said to us during our
                  parent-teacher conference was, I don't know what's changed
                  over the last three weeks, but he's like a different student
                  academically."
                </p>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-emerald-100">
                    Parent of a child with ADHD
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Improved academic performance</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Better focus in class</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Increased confidence</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Noticeable changes within weeks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <span className="font-bold text-emerald-500">AW</span>
                  </div>
                  <div>
                    <p className="font-bold">Amanda Wilson</p>
                    <p className="text-sm text-gray-600">School Psychologist</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Therreto has transformed our assessment process at school.
                  The detailed reports help us create more targeted IEPs, and
                  the parent resources ensure continuity between school and home
                  interventions."
                </p>
                <div className="flex">
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Improved academic performance</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Better focus in class</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Increased confidence</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Noticeable changes within weeks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <span className="font-bold text-emerald-500">AW</span>
                  </div>
                  <div>
                    <p className="font-bold">Amanda Wilson</p>
                    <p className="text-sm text-gray-600">School Psychologist</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Therreto has transformed our assessment process at school.
                  The detailed reports help us create more targeted IEPs, and
                  the parent resources ensure continuity between school and home
                  interventions."
                </p>
                <div className="flex">
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Improved academic performance</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Better focus in class</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Increased confidence</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Noticeable changes within weeks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <span className="font-bold text-emerald-500">AW</span>
                  </div>
                  <div>
                    <p className="font-bold">Amanda Wilson</p>
                    <p className="text-sm text-gray-600">School Psychologist</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Therreto has transformed our assessment process at school.
                  The detailed reports help us create more targeted IEPs, and
                  the parent resources ensure continuity between school and home
                  interventions."
                </p>
                <div className="flex">
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Improved academic performance</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Better focus in class</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Increased confidence</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Noticeable changes within weeks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">
                  97%
                </div>
                <p className="text-gray-600">Parent satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">
                  1,200+
                </div>
                <p className="text-gray-600">Schools using our platform</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">
                  89%
                </div>
                <p className="text-gray-600">Students showing improvement</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="#get-started"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Get Started with Therreto
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="get-started" className="py-16 bg-emerald-500">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Stay informed</h2>
                  <p className="text-gray-600 mb-6">
                    Receive updates on new resources, research opportunities,
                    testimonials, and industry insights to help your child
                    succeed.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your Last Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                        required
                      />
                      <label
                        htmlFor="consent"
                        className="ml-2 block text-sm text-gray-600"
                      >
                        By submitting this form, you consent to Therreto sending
                        marketing communications about our products and
                        services.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                      SUBSCRIBE
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-4">
                    We respect your privacy. You can unsubscribe at any time.
                    View our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">
                    What you'll receive:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Monthly learning strategies tailored to specific
                        learning disabilities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Early access to new assessment tools and resources
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Expert articles from leading researchers and
                        practitioners
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Success stories and testimonials from families
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Exclusive webinar invitations and educational events
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                      <span>
                        Special offers and discounts on Therreto services
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 bg-emerald-50 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <div className="flex -space-x-2 mr-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center border-2 border-white">
                          <span className="text-xs font-bold text-emerald-500">
                            JM
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center border-2 border-white">
                          <span className="text-xs font-bold text-emerald-500">
                            KL
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center border-2 border-white">
                          <span className="text-xs font-bold text-emerald-500">
                            TR
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center border-2 border-white">
                          <span className="text-xs font-bold text-emerald-500">
                            +5k
                          </span>
                        </div>
                      </div>
                      <span className="text-sm">
                        Join over 5,000 parents and educators receiving our
                        newsletter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Banner */}
        <section className="py-12 bg-emerald-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="text-4xl font-serif mb-6">"</div>
            <p className="text-xl md:text-2xl italic max-w-4xl mx-auto mb-6">
              "The Therreto newsletter has been an invaluable resource for our
              family. The strategies we've learned have made a tremendous
              difference in how we support our daughter with dyslexia."
            </p>
            <p className="font-medium">Lisa Thompson, Parent</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-emerald-400 font-bold text-xl mb-4">
                Therreto
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Learning Disability Platform
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Empowering children with learning disabilities through accurate
                diagnosis and personalized support strategies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-5-9a1 1 0 110-2 1 1 0 010 2zm5-3a1 1 0 110-2 1 1 0 010 2zm5 3a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#get-started"
                    className="text-gray-400 hover:text-white"
                  >
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Learning Disability Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    For Parents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    For Educators
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Research & Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-emerald-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+1 (800) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-emerald-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">support@therreto.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-emerald-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-gray-400">
                    <p>123 Learning Lane</p>
                    <p>San Francisco, CA 94103</p>
                  </div>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>
                &copy; {new Date().getFullYear()} Therreto. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
