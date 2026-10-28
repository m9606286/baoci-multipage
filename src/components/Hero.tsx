import { Heart } from 'lucide-react';

const heroImage = '/images/hero.png';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden bg-ink-950">
      {/* Background image with subtle warmth & optimized rendering */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="溫暖金色光芒與永續守護"
          className="w-full h-full object-cover brightness-105 contrast-[1.02] transform-gpu"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
        {/* 通透輕柔的遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950/50" />
      </div>

      {/* Content */}
      <div className="relative h-full mx-auto max-w-8xl px-6 flex flex-col justify-center z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <Heart className="w-5 h-5 text-gold-300 drop-shadow" />
            <span className="text-gold-300 text-sm tracking-[0.3em] uppercase font-semibold drop-shadow">
              Apex BaoCi-Life
            </span>
          </div>

          <h1
            className="font-serif-tc text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] font-bold animate-fade-up drop-shadow-lg"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            用愛心規劃
            <span className="block gold-text-gradient mt-2">讓家人安心</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-ivory-100 leading-relaxed max-w-2xl animate-fade-up drop-shadow"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            幫助您提早規劃，讓生命的每一刻
            <br />
            都充滿尊嚴與意義。
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in z-10" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <span className="text-white/80 text-xs tracking-widest drop-shadow">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-100 to-transparent z-10" />
    </section>
  );
}
