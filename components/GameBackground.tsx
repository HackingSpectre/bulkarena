"use client";

import { useEffect, useRef } from "react";
import * as Phaser from "phaser";

interface GameBackgroundProps {
  children: React.ReactNode;
}

export default function GameBackground({ children }: GameBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const phaserGameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!backgroundRef.current || phaserGameRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      parent: backgroundRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
      scene: {
        create: createScene,
        update: updateScene,
      },
      physics: {
        default: 'arcade',
      },
    };

    let bulktradeText: Phaser.GameObjects.Text;
    let facts: Phaser.GameObjects.Text[] = [];
    let particles: Phaser.GameObjects.Particles.ParticleEmitter[] = [];

    const bulktradeFacts = [
      "~20ms matching speed",
      "80% consensus threshold",
      "Zero MEV protection",
      "Built on Solana blockchain",
      "One Exchange, Infinite Markets",
      "Decentralized perpetual futures",
      "Reed-Solomon erasure coding",
      "BLS signature aggregation",
      "Deterministic FIFO matching",
      "Bulk-agave validator client"
    ];

    function createScene(this: Phaser.Scene) {
      // Create BULKTRADE floating text
      bulktradeText = this.add.text(
        this.cameras.main.width / 2,
        100,
        'BULKTRADE',
        {
          fontSize: '48px',
          fontFamily: 'Orbitron, monospace',
          color: '#F8F8FF',
          fontStyle: 'bold',
        }
      ).setOrigin(0.5).setAlpha(0.1);

      // Create floating facts
      for (let i = 0; i < 3; i++) {
        const fact = this.add.text(
          this.cameras.main.width + 200,
          150 + i * 200,
          bulktradeFacts[Math.floor(Math.random() * bulktradeFacts.length)],
          {
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            color: '#F8F8FF',
          }
        ).setAlpha(0.3);

        facts.push(fact);

        // Animate facts moving across screen
        this.tweens.add({
          targets: fact,
          x: -300,
          duration: 15000 + Math.random() * 5000,
          ease: 'Linear',
          repeat: -1,
          delay: i * 3000,
          onRepeat: () => {
            fact.setText(bulktradeFacts[Math.floor(Math.random() * bulktradeFacts.length)]);
            fact.y = 100 + Math.random() * (this.cameras.main.height - 200);
          }
        });
      }

      // Create subtle particle effects
      const graphics = this.add.graphics();
      graphics.fillStyle(0xF8F8FF, 1);
      graphics.fillRect(0, 0, 2, 2);
      graphics.generateTexture('white', 2, 2);
      graphics.destroy();

      for (let i = 0; i < 2; i++) {
        const emitter = this.add.particles(0, 0, 'white', {
          x: { min: 0, max: this.cameras.main.width },
          y: { min: 0, max: this.cameras.main.height },
          scale: { start: 0.1, end: 0 },
          speed: { min: 10, max: 30 },
          lifespan: { min: 3000, max: 6000 },
          frequency: 2000,
          alpha: { start: 0.1, end: 0 },
        });
        
        particles.push(emitter);
      }
    }

    function updateScene(this: Phaser.Scene, time: number) {
      // Animate BULKTRADE text floating
      if (bulktradeText) {
        bulktradeText.y = 100 + Math.sin(time * 0.001) * 20;
        bulktradeText.rotation = Math.sin(time * 0.0005) * 0.05;
      }
    }

    // Create white pixel texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 2;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#F8F8FF';
      ctx.fillRect(0, 0, 2, 2);
    }

    phaserGameRef.current = new Phaser.Game(config);

    // Handle resize
    const handleResize = () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.scale.resize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div 
        ref={backgroundRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}