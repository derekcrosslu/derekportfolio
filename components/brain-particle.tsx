import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(false);
  const animationFrameRef = useRef<number>();

  const PARAMS = {
    particleCount: 400,
    particleSize: 0.5,
    particleColor: '#00ffff',
    linkColor: '#ffffff',
    linkOpacity: 0.3,
    linkWidth: 0.5,
    linkDistance: 40,
    speed: 1,
    bubbleRadius: 6,
    bubbleDistance: 80,
  };

  const createParticle = (canvas: HTMLCanvasElement): Particle => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * PARAMS.speed,
    vy: (Math.random() - 0.5) * PARAMS.speed,
    size: PARAMS.particleSize,
    opacity: 0.5,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize particles
    particlesRef.current = Array.from({ length: PARAMS.particleCount }, () =>
      createParticle(canvas)
    );

    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Check for mouse interaction
        if (mouseActiveRef.current) {
          const dx = mousePosRef.current.x - particle.x;
          const dy = mousePosRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < PARAMS.bubbleDistance) {
            const size =
              PARAMS.particleSize +
              (PARAMS.bubbleRadius - PARAMS.particleSize) *
                (1 - distance / PARAMS.bubbleDistance);
            particle.size = size;
            particle.opacity = 1;
          } else {
            particle.size = PARAMS.particleSize;
            particle.opacity = 0.5;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${PARAMS.particleColor}${Math.floor(
          particle.opacity * 255
        )
          .toString(16)
          .padStart(2, '0')}`;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < PARAMS.linkDistance && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${PARAMS.linkColor}${Math.floor(
              PARAMS.linkOpacity * 255
            )
              .toString(16)
              .padStart(2, '0')}`;
            ctx.lineWidth = PARAMS.linkWidth;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none'>
      <canvas
        ref={canvasRef}
        className='block w-full h-full'
        onMouseMove={(e) => {
          mousePosRef.current = { x: e.clientX, y: e.clientY };
        }}
        onMouseEnter={() => {
          mouseActiveRef.current = true;
        }}
        onMouseLeave={() => {
          mouseActiveRef.current = false;
        }}
      />
    </div>
  );
};

export default ParticleSystem;
