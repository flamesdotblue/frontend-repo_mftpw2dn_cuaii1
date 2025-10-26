import { BarChart3, Target, Clock3, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Subreddit discovery",
    desc: "Find where your audience truly hangs out with search, overlap, and intent signals.",
  },
  {
    icon: Clock3,
    title: "Smart scheduling",
    desc: "Queue authentic posts for peak windows and avoid spam triggers automatically.",
  },
  {
    icon: BarChart3,
    title: "Post analytics",
    desc: "Measure upvotes, saves, CTR, and comments across subreddits in one view.",
  },
  {
    icon: MessageSquare,
    title: "Comment insights",
    desc: "Surface themes from top comments to guide your next iteration and replies.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Everything you need to win on Reddit
          </h2>
          <p className="mt-3 text-neutral-600">
            A focused toolset for ethical growth and data-driven iteration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
