'use client';

import { useState } from "react";

export default function Home() {
  const [service, setService] = useState("");
  const [avatar, setAvatar] = useState("");
  const [tone, setTone] = useState("Bold & punchy");
  const [length, setLength] = useState("3–5 pages");
  const [extra, setExtra] = useState(false);
  const [struggles, setStruggles] = useState("");
  const [outcome, setOutcome] = useState("");
  const [cta, setCta] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [offer, setOffer] = useState("");
  const [focus, setFocus] = useState(""); // ✅ NEW STATE
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    return service.trim() && avatar.trim() && email.trim();
  };

  const handleGenerate = async () => {
    if (!isFormValid()) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service,
        avatar,
        tone,
        length,
        struggles,
        outcome,
        cta,
        platforms,
        offer,
        focus,
        email,
      }),
    });
    const data = await res.json();
    setOutput(data.result);
    setLoading(false);
  };

  return (
    <main className="bg-[#f7f7fa] min-h-screen text-black flex flex-col items-center px-4 py-10 font-sans">
      <div className="text-center mb-2">
        <div className="mb-3 text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block">
          ⚡ AI-Powered Marketing Generator
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Create Marketing-Agency-Grade Campaigns in Seconds
          </span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center leading-snug px-4">
          lead magnet, content plan & emails — no copywriter needed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 max-w-5xl">
        <FeatureCard
          icon="🧲"
          title="Full Lead Magnet"
          description="Editable, professionally written guide that speaks directly to your niche and solves a key problem."
          tooltip="A lead magnet is a downloadable freebie that attracts potential clients into your funnel."
        />
        <FeatureCard
          icon="📣"
          title="Organic + Paid Strategy"
          description="Done-for-you ad copy, post ideas, hooks, and headlines to drive traffic and conversions."
          tooltip="Organic strategies are free content (like social posts) while paid strategies include ads that drive traffic."
        />
        <FeatureCard
          icon="✉️"
          title="Email Campaign"
          description="Ready-to-send email sequence to nurture cold leads and boost action rates."
          tooltip="An email campaign is a series of messages sent to leads to build trust and encourage conversions."
        />
      </div>

      <div className="text-center mb-3">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 text-xs font-medium rounded-full">
          ✅ Used by over 1,500 coaches, consultants & creators
        </span>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-xl">
        <p className="text-center font-medium text-gray-700 mb-4">
          Fill in the details below — we’ll generate your custom campaign:
        </p>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your service <span className="text-black">*</span>
        </label>
        <input
          placeholder="e.g. Online Fitness Coach"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-gray-100"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your audience <span className="text-black">*</span>
        </label>
        <input
          placeholder="e.g. Busy mums, 30–45"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-gray-100"
        />

        <div className="mb-4">
          <label className="block mb-1 font-medium text-sm">Select Tone:</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
          >
            <option>Bold & punchy</option>
            <option>Calm & supportive</option>
            <option>Smart & educational</option>
            <option>Fun & cheeky</option>
            <option>Girly & upbeat</option>
            <option>Corporate & concise</option>
            <option>Empathetic & emotional</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-sm">Lead Magnet Length:</label>
          <div className="flex gap-4">
            {["1-page quick win", "3–5 pages", "10+ pages"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="length"
                  value={opt}
                  checked={length === opt}
                  onChange={() => setLength(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-2 mb-4 text-sm">
          <input type="checkbox" checked={extra} onChange={() => setExtra(!extra)} />
          Add more detail to improve your campaign
        </label>

        {extra && (
          <div className="space-y-4 mb-4">
            <textarea
              placeholder="Main client struggles..."
              value={struggles}
              onChange={(e) => setStruggles(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            />
            <textarea
              placeholder="Client’s dream outcome..."
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            />
            <select
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            >
              <option value="">Select CTA</option>
              <option>Book a call</option>
              <option>Join free challenge</option>
              <option>Sign up for coaching</option>
              <option>Download app</option>
            </select>
            <div>
              <label className="block font-medium text-sm mb-1">Platform Focus:</label>
              <div className="flex gap-3 flex-wrap text-sm">
                {["Instagram", "TikTok", "Facebook", "Email only"].map((p) => (
                  <label key={p} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value={p}
                      checked={platforms.includes(p)}
                      onChange={(e) =>
                        setPlatforms((prev) =>
                          e.target.checked ? [...prev, p] : prev.filter((i) => i !== p)
                        )
                      }
                    />
                    {p}
                  </label>
                ))}
              </div>
            </div>
            <input
              placeholder="Specific offer to mention (optional)"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
        )}

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Focus of Lead Magnet <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          name="leadMagnetFocus"
          placeholder="e.g. Growing biceps in men"
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Email <span className="text-black">*</span>
        </label>
        <input
          type="email"
          placeholder="Email to receive your plan (you agree to receive updates too)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-3 font-semibold text-white rounded-md bg-gradient-to-r from-blue-900 to-blue-400 mt-4 hover:shadow-md transition"
        >
          {loading ? "Generating..." : "Create My Unique Marketing Plan"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-2">
          No credit card required. Get your lead magnet instantly.
        </p>

        {loading && (
          <p className="text-sm mt-4 text-center text-gray-500">
            Generating your marketing plan... This usually takes 90 seconds, but could be up to 5 minutes.
          </p>
        )}
      </div>

      {output && (
        <div className="bg-white mt-10 p-6 rounded-xl shadow-lg max-w-3xl w-full whitespace-pre-line">
          <h3 className="text-xl font-semibold mb-4">Your Lead Magnet Plan ✅</h3>
          <div dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      )}

      {/* Testimonials */}
      <div className="max-w-5xl w-full mt-16 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
        {[
          {
            name: "Sophie L — Dog Trainer",
            text: "I’ve spent hundreds on copywriters. This nailed my niche better than anything I’ve bought before.",
          },
          {
            name: "Dan T — Online Coach",
            text: "Actually shocked. Generated a 4-page plan that I’m using in my Facebook ads right now.",
          },
          {
            name: "Emilia R — Wellness Consultant",
            text: "I expected fluff, but it delivered a real lead magnet, email flow, and 9 post ideas. For free.",
          },
        ].map((t, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-md">
            <p className="mb-2 italic">“{t.text}”</p>
            <p className="text-right font-semibold">– {t.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
  tooltip,
}: {
  icon: string;
  title: string;
  description: string;
  tooltip: string;
}) => (
  <div className="relative group bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition cursor-pointer">
    <div className="text-3xl mb-2">{icon}</div>
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-gray-500 mt-1 text-sm">{description}</p>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition z-10 pointer-events-none text-left">
      {tooltip}
    </div>
  </div>
);
