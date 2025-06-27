"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

// Days of the week for availability selection
const daysOfWeek = [
  { id: "mon", label: "Monday" },
  { id: "tue", label: "Tuesday" },
  { id: "wed", label: "Wednesday" },
  { id: "thu", label: "Thursday" },
  { id: "fri", label: "Friday" },
  { id: "sat", label: "Saturday" },
  { id: "sun", label: "Sunday" },
];

// Time slots for availability
const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

// Specialization options
const specializations = [
  "Anxiety",
  "Depression",
  "Trauma",
  "PTSD",
  "Relationships",
  "Stress Management",
  "Grief",
  "Family Therapy",
  "Addiction",
  "Child Therapy",
  "ADHD",
  "Behavioral Issues",
  "Couples Therapy",
  "Communication",
  "Work-Life Balance",
];

export default function TherapistProfileSetupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "Dr.",
    bio: "",
    education: "",
    experience: "",
    approach: "",
    price: "",
    selectedSpecializations: [] as string[],
    availability: [] as string[],
    availabilityTimes: {} as Record<string, string[]>,
    profileImage: null as File | null,
    previewImage: "",
    languages: [] as string[],
    licenseNumber: "",
    certifications: "",
    // email: "",
    // password: "",
    // passwordConfirm: "",
  });

  const { toast } = useToast();
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecializationToggle = (specialization: string) => {
    setFormData((prev) => {
      const isSelected = prev.selectedSpecializations.includes(specialization);
      if (isSelected) {
        return {
          ...prev,
          selectedSpecializations: prev.selectedSpecializations.filter(
            (s) => s !== specialization
          ),
        };
      } else {
        return {
          ...prev,
          selectedSpecializations: [
            ...prev.selectedSpecializations,
            specialization,
          ],
        };
      }
    });
  };

  const handleAvailabilityToggle = (day: string) => {
    setFormData((prev) => {
      const isSelected = prev.availability.includes(day);
      const newAvailability = isSelected
        ? prev.availability.filter((d) => d !== day)
        : [...prev.availability, day];

      // If day is removed, also remove its time slots
      const newAvailabilityTimes = { ...prev.availabilityTimes };
      if (isSelected) {
        delete newAvailabilityTimes[day];
      } else {
        // Initialize with empty array if adding a new day
        newAvailabilityTimes[day] = [];
      }

      return {
        ...prev,
        availability: newAvailability,
        availabilityTimes: newAvailabilityTimes,
      };
    });
  };

  const handleTimeSlotToggle = (day: string, timeSlot: string) => {
    setFormData((prev) => {
      const currentTimeSlotsForDay = prev.availabilityTimes[day] || [];
      const isSelected = currentTimeSlotsForDay.includes(timeSlot);

      const newTimeSlotsForDay = isSelected
        ? currentTimeSlotsForDay.filter((t) => t !== timeSlot)
        : [...currentTimeSlotsForDay, timeSlot];

      return {
        ...prev,
        availabilityTimes: {
          ...prev.availabilityTimes,
          [day]: newTimeSlotsForDay,
        },
      };
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        previewImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim()) {
      const languageList = value.split(",").map((lang) => lang.trim());
      setFormData((prev) => ({ ...prev, languages: languageList }));
    } else {
      setFormData((prev) => ({ ...prev, languages: [] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.bio ||
      !formData.price
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    //  gdrhdrhd
    if (formData.selectedSpecializations.length === 0) {
      toast({
        title: "Missing Specializations",
        description: "Please select at least one specialization.",
        variant: "destructive",
      });
      return;
    }

    if (formData.availability.length === 0) {
      toast({
        title: "Missing Availability",
        description: "Please select at least one day of availability.",
        variant: "destructive",
      });
      return;
    }

    // Check if time slots are selected for each available day
    const missingTimeSlots = formData.availability.some(
      (day) =>
        !formData.availabilityTimes[day] ||
        formData.availabilityTimes[day].length === 0
    );

    if (missingTimeSlots) {
      toast({
        title: "Missing Time Slots",
        description:
          "Please select at least one time slot for each day you're available.",
        variant: "destructive",
      });
      return;
    }

    const supabaseId = localStorage.getItem("supabaseId");
    const email = localStorage.getItem("email"); // <-- get email

    if (!supabaseId || !email) {
      toast({
        title: "Not Authenticated",
        description: "Please sign in first.",
        variant: "destructive",
      });
      return;
    }

    // Prepare data for backend (add email, password, passwordConfirm as required by backend)
    const payload = {
      ...formData,
      supabaseId,
      email, // <-- add this line!
      price: Number(formData.price),
      photo: formData.previewImage || "",
    };

    try {
      const res = await fetch(
        "https://therrato-main.onrender.com/api/v1/therapists/createTherapist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to save profile.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Profile Saved!",
        description: "Your therapist profile has been created successfully.",
      });

      // router.push("/therapist/appointments");
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not connect to backend.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Set Up Your Therapist Profile
          </h1>
          <p className="text-gray-600">
            Complete your profile to start connecting with patients on Therreto.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-6">
                <div className="w-32 h-32 relative">
                  {formData.previewImage ? (
                    <Avatar className="w-32 h-32">
                      <AvatarImage
                        src={formData.previewImage || "/placeholder.svg"}
                        alt="Profile preview"
                      />
                      <AvatarFallback>
                        {formData.firstName.charAt(0)}
                        {formData.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  <Label
                    htmlFor="profileImage"
                    className="absolute bottom-0 right-0 bg-emerald-600 text-white p-2 rounded-full cursor-pointer"
                  >
                    <Upload className="h-4 w-4" />
                  </Label>
                  <Input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Select
                        value={formData.title}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, title: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dr.">Dr.</SelectItem>
                          <SelectItem value="Prof.">Prof.</SelectItem>
                          <SelectItem value="Mr.">Mr.</SelectItem>
                          <SelectItem value="Mrs.">Mrs.</SelectItem>
                          <SelectItem value="Ms.">Ms.</SelectItem>
                          <SelectItem value="Mx.">Mx.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="licenseNumber">License Number *</Label>
                    <Input
                      id="licenseNumber"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., PSY12345"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="languages">
                      Languages (comma separated)
                    </Label>
                    <Input
                      id="languages"
                      name="languages"
                      value={formData.languages.join(", ")}
                      onChange={handleLanguageChange}
                      placeholder="e.g., English, Spanish, French"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="bio">Professional Bio *</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell potential clients about yourself, your approach, and your experience..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="education">Education</Label>
                    <Textarea
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      placeholder="List your degrees, institutions, and years..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="certifications">Certifications</Label>
                    <Textarea
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      placeholder="List any relevant certifications..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="experience">Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Describe your professional experience, years in practice, etc."
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="approach">Therapeutic Approach</Label>
                  <Textarea
                    id="approach"
                    name="approach"
                    value={formData.approach}
                    onChange={handleInputChange}
                    placeholder="Describe your therapeutic approach and methodologies..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Specializations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Select the areas you specialize in. This helps patients find the
                right match for their needs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specializations.map((specialization) => (
                  <div
                    key={specialization}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`spec-${specialization}`}
                      checked={formData.selectedSpecializations.includes(
                        specialization
                      )}
                      onCheckedChange={() =>
                        handleSpecializationToggle(specialization)
                      }
                    />
                    <Label
                      htmlFor={`spec-${specialization}`}
                      className="text-sm"
                    >
                      {specialization}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="price">Session Price (USD) *</Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="pl-7"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Days Available *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {daysOfWeek.map((day) => (
                    <div key={day.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`day-${day.id}`}
                        checked={formData.availability.includes(day.id)}
                        onCheckedChange={() => handleAvailabilityToggle(day.id)}
                      />
                      <Label htmlFor={`day-${day.id}`}>{day.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {formData.availability.length > 0 && (
                <div className="space-y-4">
                  <Label className="block">Time Slots Available *</Label>
                  {formData.availability.map((day) => {
                    const dayLabel = daysOfWeek.find(
                      (d) => d.id === day
                    )?.label;
                    return (
                      <div key={day} className="border p-4 rounded-md">
                        <h4 className="font-medium mb-3">{dayLabel}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <div
                              key={`${day}-${time}`}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`time-${day}-${time}`}
                                checked={(
                                  formData.availabilityTimes[day] || []
                                ).includes(time)}
                                onCheckedChange={() =>
                                  handleTimeSlotToggle(day, time)
                                }
                              />
                              <Label
                                htmlFor={`time-${day}-${time}`}
                                className="text-sm"
                              >
                                {time}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Save Profile
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
