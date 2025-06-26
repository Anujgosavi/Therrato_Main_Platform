// AuthModal.tsx
import { useState } from "react";

export default function AuthModal({
  mode,
  onClose,
  onSwitch,
}: {
  mode: "signin" | "signup";
  onClose: () => void;
  onSwitch: () => void;
}) {
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const endpoint =
        mode === "signup"
          ? "https://therrato-main.onrender.com/api/v1/auth/signup"
          : "https://therrato-main.onrender.com/api/v1/auth/signin";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong.");
      } else if (mode === "signup") {
        setMessage(
          "Sign up successful! Please check your email to confirm your account."
        );
      } else if (mode === "signin") {
        setMessage("Sign in successful!");
        setTimeout(() => {
          onClose();
        }, 1200); // show message for 1.2 seconds
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-emerald-500 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-emerald-600 text-center">
          {mode === "signin" ? "Sign In to Therreto" : "Create Your Account"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm((f) => ({ ...f, password: e.target.value }))
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
            disabled={loading}
          >
            {loading
              ? mode === "signin"
                ? "Signing In..."
                : "Signing Up..."
              : mode === "signin"
              ? "Sign In"
              : "Sign Up"}
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-sm text-emerald-600">
            {message}
          </div>
        )}
        <div className="mt-4 text-center text-sm text-gray-600">
          {mode === "signin" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={onSwitch}
                className="text-emerald-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={onSwitch}
                className="text-emerald-500 hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
