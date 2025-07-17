<div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-xl space-y-5">
  <p className="text-center font-medium text-gray-700">
    Fill in the details below — we’ll generate your custom campaign:
  </p>

  <div>
    <label className="block text-sm font-medium text-black mb-1">
      Your service <span className="text-black">*</span>
    </label>
    <input
      placeholder="e.g. Online Fitness Coach"
      value={service}
      onChange={(e) => setService(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-black mb-1">
      Your audience <span className="text-black">*</span>
    </label>
    <input
      placeholder="e.g. Busy mums, 30–45"
      value={avatar}
      onChange={(e) => setAvatar(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-black mb-1">
      Email <span className="text-black">*</span>
    </label>
    <input
      type="email"
      placeholder="Email to get plan (agree to communications)"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
    />
  </div>

  <div>
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

  <div>
    <label className="block mb-1 font-medium text-sm">Lead Magnet Length:</label>
    <div className="flex gap-4 flex-wrap">
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

  <div>
    <label className="block text-sm font-medium text-black">
      Focus of Lead Magnet <span className="text-gray-400 text-xs">(optional)</span>
    </label>
    <input
      type="text"
      name="leadMagnetFocus"
      placeholder="e.g. Growing biceps in men with low testosterone"
      value={focus}
      onChange={(e) => setFocus(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
    />
  </div>

  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" checked={extra} onChange={() => setExtra(!extra)} />
    Add more detail to improve your campaign
  </label>

  {extra && (
    <div className="space-y-4 border-t border-gray-200 pt-4">
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

  <button
    onClick={handleGenerate}
    disabled={loading}
    className="w-full py-3 font-semibold text-white rounded-md bg-gradient-to-r from-blue-900 to-blue-400 hover:shadow-md transition"
  >
    {loading ? "Generating..." : "Create My Unique Marketing Plan"}
  </button>

  <p className="text-center text-sm text-gray-500">
    No credit card required. Get your lead magnet instantly.
  </p>

  {loading && (
    <p className="text-sm mt-4 text-center text-gray-500">
      Generating your marketing plan... This usually takes 90 seconds, but could be up to 5 minutes.
    </p>
  )}
</div>
