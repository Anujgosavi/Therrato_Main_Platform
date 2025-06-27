"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function PatientProfileSetupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    gender: "",
    bio: "",
    languages: "",
  });

  const { toast } = useToast();
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get supabaseId and email from localStorage (set after login)
    const supabaseId = localStorage.getItem("supabaseId");
    const email = localStorage.getItem("email");

    if (!supabaseId || !email) {
      toast({
        title: "Not Authenticated",
        description: "Please sign in first.",
        variant: "destructive",
      });
      return;
    }

    const payload = {
      ...formData,
      supabaseId,
      email,
      age: formData.age ? Number(formData.age) : undefined,
      languages: formData.languages
        ? formData.languages.split(",").map((l) => l.trim())
        : [],
    };

    try {
      const res = await fetch(
        "https://therrato-main.onrender.com/api/v1/patients/createPatient",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        toast({
          title: "Error",
          description: data.message || "Failed to save profile.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Profile Saved!",
        description: "Your patient profile has been created successfully.",
      });

      router.push("/patient/dashboard");
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not connect to backend.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Set Up Your Patient Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Optional"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              min="0"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Optional"
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <Label htmlFor="languages">Languages (comma separated)</Label>
          <Input
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleInputChange}
            placeholder="e.g., English, Hindi"
          />
        </div>
        <div>
          <Label htmlFor="bio">About You</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tell us about yourself..."
            className="min-h-[100px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700"
        >
          Save Profile
        </Button>
      </form>
    </div>
  );
}
