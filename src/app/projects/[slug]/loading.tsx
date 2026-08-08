export default function Loading() {
  return (
    <main className="min-h-screen bg-bg-primary text-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 animate-pulse">
        {/* Back link skeleton */}
        <div className="h-4 w-36 rounded bg-white/5 mb-12" />

        {/* Title skeleton */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="h-3 w-24 rounded bg-white/5" />
          <div className="h-14 w-3/4 rounded bg-white/5" />
          <div className="h-5 w-48 rounded bg-white/5" />
        </div>

        {/* Cover image skeleton */}
        <div className="w-full aspect-[21/9] rounded-3xl bg-white/5 mb-16" />

        {/* Content skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="h-6 w-48 rounded bg-white/5" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-white/5" />
              <div className="h-4 w-5/6 rounded bg-white/5" />
              <div className="h-4 w-4/6 rounded bg-white/5" />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="h-40 rounded-2xl bg-white/5" />
            <div className="h-48 rounded-2xl bg-white/5" />
          </div>
        </div>
      </div>
    </main>
  );
}
