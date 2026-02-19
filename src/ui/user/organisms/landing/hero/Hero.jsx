import { useEffect, useRef, useState } from "react";

const frames = [
  {
    label: "Avant-Garde",
    desc: "For the bold visionary",
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&q=85",
  },
  {
    label: "Classic Noir",
    desc: "Timeless sophistication",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=1200&q=85",
  },
  {
    label: "Solar Edit",
    desc: "Summer without limits",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=85",
  },
];

const Hero = () => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((p) => (p + 1) % frames.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 18,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const current = frames[activeFrame];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: #0d2744;
          min-height: 92vh;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }

        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 1;
        }

        .hero-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 90px 90px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, #18406f55 0%, transparent 70%);
          top: -150px; left: -150px;
          pointer-events: none;
          z-index: 0;
          animation: glowPulse 7s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%,100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        /* LEFT PANEL */
        .left-panel {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 6rem 4rem 5rem 6rem;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: slideUp 0.7s ease 0.1s forwards;
        }
        .eyebrow-bar {
          width: 36px; height: 1.5px;
          background: #5b99d0;
        }
        .eyebrow-text {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #5b99d0;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          line-height: 1.05;
          margin-bottom: 2rem;
          opacity: 0;
          animation: slideUp 0.75s ease 0.25s forwards;
        }
        .hero-title .t1 {
          display: block;
          font-size: clamp(3rem, 4.5vw, 5.5rem);
          color: rgba(255,255,255,0.88);
          letter-spacing: -0.01em;
        }
        .hero-title .t2 {
          display: block;
          font-size: clamp(3rem, 4.5vw, 5.5rem);
          font-style: italic;
          color: #8bbde0;
          letter-spacing: -0.01em;
        }
        .hero-title .t3 {
          display: block;
          font-size: clamp(3rem, 4.5vw, 5.5rem);
          color: rgba(255,255,255,0.88);
          letter-spacing: -0.01em;
        }

        .hero-sub {
          font-size: 0.875rem;
          font-weight: 300;
          color: rgba(255,255,255,0.38);
          line-height: 1.85;
          max-width: 300px;
          margin-bottom: 3rem;
          letter-spacing: 0.02em;
          opacity: 0;
          animation: slideUp 0.75s ease 0.4s forwards;
        }

        .hero-btns {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          opacity: 0;
          animation: slideUp 0.75s ease 0.55s forwards;
        }

        .btn-solid {
          background: #18406f;
          border: 1.5px solid #2a5d9f;
          color: #fff;
          padding: 0.9rem 2.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .btn-solid::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-solid:hover {
          border-color: #5b99d0;
          box-shadow: 0 0 24px rgba(91,153,208,0.25);
        }
        .btn-solid:hover::after { opacity: 1; }

        .btn-ghost {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.45);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0;
          transition: color 0.3s;
        }
        .btn-ghost:hover { color: rgba(255,255,255,0.85); }
        .arrow-line {
          display: block;
          width: 28px; height: 1px;
          background: currentColor;
          position: relative;
          transition: width 0.3s;
        }
        .btn-ghost:hover .arrow-line { width: 44px; }
        .arrow-line::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          width: 6px; height: 6px;
          border-top: 1px solid currentColor;
          border-right: 1px solid currentColor;
          transform: rotate(45deg);
        }

        .stats-row {
          display: flex;
          gap: 3rem;
          margin-top: 4.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.07);
          opacity: 0;
          animation: slideUp 0.75s ease 0.7s forwards;
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #fff;
          line-height: 1;
        }
        .stat-num sup { font-size: 1rem; color: #5b99d0; }
        .stat-lbl {
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-top: 0.35rem;
        }

        /* RIGHT PANEL */
        .right-panel {
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 1.4s ease, transform 1.8s ease;
        }
        .slide-img.on  { opacity: 1; }
        .slide-img.off { opacity: 0; transform: scale(1.06); }

        .img-grad {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, #0d2744 0%, #0d274420 35%, transparent 60%),
            linear-gradient(to top, #0d2744 0%, transparent 35%);
          z-index: 2;
          pointer-events: none;
        }

        .img-tint {
          position: absolute;
          inset: 0;
          background: #18406f22;
          mix-blend-mode: multiply;
          z-index: 3;
          pointer-events: none;
        }

        .badge {
          position: absolute;
          top: 2.5rem;
          right: 2.5rem;
          z-index: 20;
          background: rgba(13,39,68,0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(91,153,208,0.18);
          padding: 1.2rem 1.6rem;
          border-radius: 4px;
          text-align: right;
          opacity: 0;
          animation: fadeIn 0.75s ease 1.1s forwards;
        }
        .badge-lbl {
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.3rem;
        }
        .badge-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 300;
          color: #fff;
        }
        .badge-desc {
          font-size: 0.7rem;
          color: #5b99d0;
          margin-top: 0.2rem;
          letter-spacing: 0.05em;
        }

        .dot-nav {
          position: absolute;
          bottom: 5rem;
          right: 2.5rem;
          z-index: 20;
          display: flex;
          gap: 0.6rem;
          opacity: 0;
          animation: fadeIn 0.75s ease 1.3s forwards;
        }
        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.3);
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: all 0.4s;
        }
        .dot.on {
          background: #5b99d0;
          border-color: #5b99d0;
          transform: scale(1.4);
        }

        .progress-bar {
          position: absolute;
          bottom: 3rem;
          left: 0;
          height: 2px;
          background: linear-gradient(to right, #5b99d0, #18406f);
          z-index: 20;
          animation: progress 4.5s linear infinite;
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .ticker {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          overflow: hidden;
          padding: 0.75rem 0;
          background: rgba(13,39,68,0.85);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(91,153,208,0.12);
        }
        .ticker-track {
          display: flex;
          animation: tickerMove 22s linear infinite;
          white-space: nowrap;
        }
        .tick-item {
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          padding: 0 2.5rem;
          border-right: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .tick-item.accent { color: #5b99d0; }
        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (max-width: 860px) {
          .hero-root { grid-template-columns: 1fr; }
          .left-panel { padding: 3.5rem 2rem 2.5rem; }
          .right-panel { height: 55vw; }
          .stats-row { gap: 1.5rem; margin-top: 2.5rem; }
        }
      `}</style>

      <section className="hero-root" ref={heroRef}>
        <div className="hero-glow" />

        {/* LEFT */}
        <div className="left-panel">
          <div className="eyebrow">
            <span className="eyebrow-bar" />
            <span className="eyebrow-text">2025 Collection</span>
          </div>

          <h1 className="hero-title">
            <span className="t1">Stylish &</span>
            <span className="t2">Comfortable</span>
            <span className="t3">Eyewear</span>
          </h1>

          <p className="hero-sub">
            Discover frames that don't just complement your vision —
            they define how the world sees you.
          </p>

          <div className="hero-btns">
            <button className="btn-solid">Explore Now</button>
            <button className="btn-ghost">
              <span className="arrow-line" />
              Become a Dealer
            </button>
          </div>

          <div className="stats-row">
            {[
              { n: "240", s: "+", l: "Frame styles" },
              { n: "18",  s: "yr", l: "Heritage" },
              { n: "50",  s: "k+", l: "Happy clients" },
            ].map((s, i) => (
              <div key={i}>
                <div className="stat-num">{s.n}<sup>{s.s}</sup></div>
                <div className="stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-panel">
          <div className="img-wrap">
            {frames.map((f, i) => (
              <img
                key={i}
                src={f.img}
                alt={f.label}
                className={`slide-img ${i === activeFrame ? "on" : "off"}`}
                style={{
                  transform: i === activeFrame
                    ? `scale(1) translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)`
                    : "scale(1.06)",
                }}
              />
            ))}

            <div className="img-grad" />
            <div className="img-tint" />

            <div className="badge">
              <div className="badge-lbl">Now Viewing</div>
              <div className="badge-name">{current.label}</div>
              <div className="badge-desc">{current.desc}</div>
            </div>

            <div className="dot-nav">
              {frames.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeFrame ? "on" : ""}`}
                  onClick={() => setActiveFrame(i)}
                />
              ))}
            </div>

            <div className="progress-bar" key={activeFrame} />

            <div className="ticker">
              <div className="ticker-track">
                {[...Array(2)].flatMap((_, r) =>
                  ["Premium Optics", "✦", "Free Shipping", "✦", "Handcrafted Frames", "✦", "UV400 Protection", "✦", "2-Year Warranty", "✦", "200+ Styles", "✦"].map((t, i) => (
                    <span key={`${r}-${i}`} className={`tick-item ${t === "✦" ? "accent" : ""}`}>{t}</span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;