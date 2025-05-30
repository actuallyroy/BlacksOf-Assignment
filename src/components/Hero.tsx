export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/automotive.224e7418884105595114.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">Driven by performance</p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-4xl lg:text-4xl">
            Soft trims and <span className="text-cyan-400">NVH solutions</span>
            <br />
            <span className="text-white font-normal">for seamless rides</span>
          </h1>
        </div>
      </div>
    </section>
  )
} 