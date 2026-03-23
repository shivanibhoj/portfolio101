/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { TechMarquee } from './components/TechMarquee';
import { motion, useMotionValue, useSpring, useScroll } from 'motion/react';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-neon-blue origin-left z-[100] shadow-[0_0_10px_#00f2ff] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 80 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none -z-10"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
};

const Triangle3DBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const mouseRef = React.useRef({ x: -1000, y: -1000 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let triangles: Triangle[] = [];
    const triangleCount = 50;

    class Triangle {
      x: number;
      y: number;
      z: number;
      size: number;
      rotationX: number;
      rotationY: number;
      rotationZ: number;
      rotationSpeedX: number;
      rotationSpeedY: number;
      rotationSpeedZ: number;
      color: string;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 400 - 200;
        this.size = Math.random() * 25 + 10;
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.03;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.03;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.03;
        this.color = Math.random() > 0.5 ? '0, 242, 255' : '188, 19, 254';
        this.opacity = Math.random() * 0.2 + 0.05;
      }

      update(width: number, height: number, mx: number, my: number) {
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;

        // Interaction: Drift towards mouse
        const dx = mx - this.x;
        const dy = my - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 400) {
          const force = (400 - dist) / 400;
          this.x += dx * 0.015 * force;
          this.y += dy * 0.015 * force;
          this.opacity = Math.min(0.5, this.opacity + 0.01);
        } else {
          this.opacity = Math.max(0.05, this.opacity - 0.005);
        }

        // Constant slow drift
        this.x += Math.sin(this.rotationX) * 0.5;
        this.y += Math.cos(this.rotationY) * 0.5;

        // Wrap around screen
        if (this.x < -100) this.x = width + 100;
        if (this.x > width + 100) this.x = -100;
        if (this.y < -100) this.y = height + 100;
        if (this.y > height + 100) this.y = -100;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const fov = 500;
        const perspective = fov / (fov + this.z);
        
        const cx = this.x;
        const cy = this.y;

        // Triangle vertices in local space
        const vertices = [
          { x: 0, y: -this.size, z: 0 },
          { x: this.size * 0.866, y: this.size * 0.5, z: 0 },
          { x: -this.size * 0.866, y: this.size * 0.5, z: 0 }
        ];

        // Rotate and project vertices
        const projected = vertices.map(v => {
          // Rotate X
          let y1 = v.y * Math.cos(this.rotationX) - v.z * Math.sin(this.rotationX);
          let z1 = v.y * Math.sin(this.rotationX) + v.z * Math.cos(this.rotationX);
          
          // Rotate Y
          let x2 = v.x * Math.cos(this.rotationY) + z1 * Math.sin(this.rotationY);
          let z2 = -v.x * Math.sin(this.rotationY) + z1 * Math.cos(this.rotationY);
          
          // Rotate Z
          let x3 = x2 * Math.cos(this.rotationZ) - y1 * Math.sin(this.rotationZ);
          let y3 = x2 * Math.sin(this.rotationZ) + y1 * Math.cos(this.rotationZ);

          return {
            x: cx + x3 * perspective,
            y: cy + y3 * perspective
          };
        });

        ctx.beginPath();
        ctx.moveTo(projected[0].x, projected[0].y);
        ctx.lineTo(projected[1].x, projected[1].y);
        ctx.lineTo(projected[2].x, projected[2].y);
        ctx.closePath();

        ctx.strokeStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = `rgba(${this.color}, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      triangles = [];
      for (let i = 0; i < triangleCount; i++) {
        triangles.push(new Triangle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      triangles.forEach(t => {
        t.update(canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y);
        t.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none -z-10 bg-dark-bg overflow-hidden"
    />
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-blue/30 selection:text-white custom-scrollbar overflow-x-hidden">
      <ScrollProgressBar />
      <LoadingScreen />
    /*<Triangle3DBackground />*/
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
