export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-neutral-600">14-day free trial on every plan. No credit card required.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Starter</h3>
              <p className="mt-1 text-sm text-neutral-600">For solo makers testing the waters.</p>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-extrabold tracking-tight">$19</span>
              <span className="text-neutral-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>• 5 tracked subreddits</li>
              <li>• Basic analytics</li>
              <li>• Manual scheduling</li>
            </ul>
            <button className="mt-8 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
              Choose Starter
            </button>
          </div>

          {/* Growth */}
          <div className="flex flex-col rounded-xl border-2 border-neutral-900 bg-white p-6 shadow-sm">
            <div>
              <span className="inline-block rounded-full bg-neutral-900 px-2 py-0.5 text-xs font-semibold text-white">Popular</span>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">Growth</h3>
              <p className="mt-1 text-sm text-neutral-600">For teams focused on consistent growth.</p>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-extrabold tracking-tight">$49</span>
              <span className="text-neutral-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>• 25 tracked subreddits</li>
              <li>• Advanced analytics + CTR</li>
              <li>• Smart scheduling</li>
              <li>• Export reports</li>
            </ul>
            <button className="mt-8 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
              Choose Growth
            </button>
          </div>

          {/* Scale */}
          <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Scale</h3>
              <p className="mt-1 text-sm text-neutral-600">For brands running multi-market ops.</p>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-extrabold tracking-tight">$129</span>
              <span className="text-neutral-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>• Unlimited subreddits</li>
              <li>• Team workspaces</li>
              <li>• API access</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-8 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
              Choose Scale
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
