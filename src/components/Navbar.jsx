import { Rocket, BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-pink-500 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">UpvoteIQ</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <a href="#features" className="transition hover:text-neutral-900">Features</a>
          <a href="#pricing" className="transition hover:text-neutral-900">Pricing</a>
          <a href="#" className="transition hover:text-neutral-900">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 md:inline-flex">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">
            <BarChart3 className="h-4 w-4" />
            Start free trial
          </button>
        </div>
      </div>
    </header>
  );
}
