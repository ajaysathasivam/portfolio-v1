import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center flex flex-col items-center gap-6">
        <p className="text-xs font-semibold text-accent-indigo uppercase tracking-widest">404 — Not Found</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">Project not found</h1>
        <p className="text-text-secondary max-w-md text-base md:text-lg font-light">
          The project you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
