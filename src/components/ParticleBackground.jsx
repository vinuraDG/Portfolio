import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Read accent color from CSS variable
    const getAccent = () => {
      const s = getComputedStyle(document.documentElement);
      return s.getPropertyValue("--accent").trim() || "#1447E6";
    };

    // Parse hex to rgb
    const hexToRgb = (hex) => {
      const h = hex.replace("#", "");
      return {
        r: parseInt(h.substring(0, 2), 16),
        g: parseInt(h.substring(2, 4), 16),
        b: parseInt(h.substring(4, 6), 16),
      };
    };

    // Bubble factory
    const makeBubble = (forced) => {
      const size = forced
        ? 18 + Math.random() * 40
        : 6 + Math.random() * 50;
      return {
        x: Math.random() * W,
        y: forced ? H + size : Math.random() * H,
        r: size,
        speedY: 0.18 + Math.random() * 0.45,
        speedX: (Math.random() - 0.5) * 0.3,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.008 + Math.random() * 0.012,
        alpha: 0.07 + Math.random() * 0.18,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.008,
      };
    };

    const COUNT = Math.min(70, Math.floor((W * H) / 18000));
    bubblesRef.current = Array.from({ length: COUNT }, () => makeBubble(false));

    // Large background orbs (slow, very translucent)
    const orbs = [
      { x: W * 0.15, y: H * 0.3,  r: Math.min(W, H) * 0.28, dx: 0.12, dy: 0.08 },
      { x: W * 0.8,  y: H * 0.65, r: Math.min(W, H) * 0.22, dx: -0.1, dy: -0.06 },
      { x: W * 0.5,  y: H * 0.1,  r: Math.min(W, H) * 0.18, dx: 0.07, dy: 0.11 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const accent = getAccent();
      const rgb = hexToRgb(accent.length === 7 ? accent : "#1447E6");

      // ── Background orbs ──
      orbs.forEach((orb) => {
        orb.x += orb.dx;
        orb.y += orb.dy;
        if (orb.x < -orb.r || orb.x > W + orb.r) orb.dx *= -1;
        if (orb.y < -orb.r || orb.y > H + orb.r) orb.dy *= -1;

        const g = ctx.createRadialGradient(
          orb.x - orb.r * 0.3, orb.y - orb.r * 0.3, 0,
          orb.x, orb.y, orb.r
        );
        g.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.10)`);
        g.addColorStop(0.5, `rgba(${rgb.r},${rgb.g},${rgb.b},0.05)`);
        g.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // ── Bubbles ──
      const bubbles = bubblesRef.current;
      bubbles.forEach((b, i) => {
        b.wobble += b.wobbleSpeed;
        b.pulse  += b.pulseSpeed;
        b.y -= b.speedY;
        b.x += b.speedX + Math.sin(b.wobble) * 0.4;

        const pulsedR = b.r + Math.sin(b.pulse) * (b.r * 0.06);
        const alpha   = b.alpha + Math.sin(b.pulse) * 0.03;

        if (b.y + pulsedR < -10) {
          bubbles[i] = makeBubble(true);
          return;
        }

        // Outer ring
        ctx.beginPath();
        ctx.arc(b.x, b.y, pulsedR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${(alpha * 0.9).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner fill
        const fill = ctx.createRadialGradient(
          b.x - pulsedR * 0.3, b.y - pulsedR * 0.3, pulsedR * 0.05,
          b.x, b.y, pulsedR
        );
        fill.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${(alpha * 0.35).toFixed(3)})`);
        fill.addColorStop(0.6, `rgba(${rgb.r},${rgb.g},${rgb.b},${(alpha * 0.1).toFixed(3)})`);
        fill.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        ctx.beginPath();
        ctx.arc(b.x, b.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();

        // Highlight (top-left shine)
        if (pulsedR > 10) {
          const hi = ctx.createRadialGradient(
            b.x - pulsedR * 0.32, b.y - pulsedR * 0.32, 0,
            b.x - pulsedR * 0.32, b.y - pulsedR * 0.32, pulsedR * 0.38
          );
          hi.addColorStop(0, `rgba(255,255,255,${(alpha * 1.2).toFixed(3)})`);
          hi.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.arc(b.x, b.y, pulsedR, 0, Math.PI * 2);
          ctx.fillStyle = hi;
          ctx.fill();
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};

export default ParticleBackground;
