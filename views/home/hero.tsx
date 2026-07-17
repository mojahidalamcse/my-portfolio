import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-8">
        <h1 className="text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I am
          <br />Ishowspeed
        </h1>

        <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
          A front-end developer passionate about building accessible and user-friendly websites.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-4xl font-extrabold text-white">3.78</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">CGPA</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-4xl font-extrabold text-white">1650</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">Codeforces Rating</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-4xl font-extrabold text-white">04</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">Shipped Projects</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl bg-gray-300 p-6 md:p-8 sm:p-8">
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl sm:h-[420px] md:h-[480px]">
            <Image src="/profile.svg" alt="Profile" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
