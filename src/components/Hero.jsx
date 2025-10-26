import { Sparkles, Target, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-neutral-50">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <div className="absolute -top-16 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-500/30 via-pink-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 md:px-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
            <Sparkles className="h-3.5 w-3.5" />
            The cleanest Reddit marketing suite
          </span>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Grow on Reddit with precision and clarity
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Discover high-intent subreddits, schedule authentic posts, and measure what truly works. All in one lightweight dashboard designed for speed and signal.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
            >
              <BarChart3 className="h-4 w-4" />
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
            >
              <Target className="h-4 w-4" />
              Explore features
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-5xl rounded-xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-md bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-neutral-500">Trending subreddits</p>
                <p className="mt-2 text-2xl font-bold">r/Entrepreneur</p>
                <p className="text-sm text-neutral-600">+142% engagement</p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-neutral-500">Best posting window</p>
                <p className="mt-2 text-2xl font-bold">Wed 8–11am UTC</p>
                <p className="text-sm text-neutral-600">Median +38% upvotes</p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-neutral-500">Top-performing angle</p>
                <p className="mt-2 text-2xl font-bold">Case study</p>
                <p className="text-sm text-neutral-600">Short + visual works best</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                { label: "Mentions", value: "1.2k" },
                { label: "Avg. upvotes", value: "154" },
                { label: "CTR", value: "3.7%" },
                { label: "Saves", value: "412" },
              ].map((m) => (
                <div key={m.label} className="rounded-md bg-white p-3 text-center shadow-sm">
                  <p className="text-xs font-medium text-neutral-500">{m.label}</p>
                  <p className="mt-1 text-xl font-semibold text-neutral-900">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
