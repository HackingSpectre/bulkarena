"use client";

import { useEffect, useRef } from "react";
import * as Phaser from "phaser";

interface PhaserGameProps {
  letters: string[];
  isCorrect: boolean;
}

export default function PhaserGame({ letters, isCorrect }: PhaserGameProps) {
  const gameRef = useRef<HTMLDivElement>(null);
  const phaserGameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      parent: gameRef.current,
      width: typeof window !== 'undefined' ? Math.min(800, window.innerWidth - 40) : 800,
      height: 220,
      backgroundColor: '#1E1F23',
      transparent: false,
      scene: {
        preload: preloadScene,
        create: createScene,
        update: updateScene,
      },
    };

    let letterContainers: any[] = [];
    let particleEmitters: Phaser.GameObjects.Particles.ParticleEmitter[] = [];
    let scene: Phaser.Scene;

    function preloadScene(this: Phaser.Scene) {
      const graphics = this.add.graphics();
      graphics.fillStyle(0xFFFFFF, 1);
      graphics.fillRect(0, 0, 2, 2);
      graphics.generateTexture('pixel', 2, 2);
      graphics.destroy();
    }

    function createScene(this: Phaser.Scene) {
      scene = this;
      const gameWidth = this.cameras.main.width;
      const spacing = Math.min(80, gameWidth / (letters.length + 1));
      const startX = (gameWidth - (letters.length - 1) * spacing) / 2;

      const graphics = this.add.graphics();
      graphics.fillGradientStyle(0x0A0B0D, 0x0A0B0D, 0x1E1F23, 0x1E1F23, 1);
      graphics.fillRect(0, 0, gameWidth, 220);

      letters.forEach((letter, index) => {
        const x = startX + index * spacing;
        const y = -50;

        const shadow = this.add.text(x + 3, y + 3, letter, {
          fontSize: '56px',
          color: '#000000',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'bold',
        }).setOrigin(0.5).setAlpha(0.3);

        const letterText = this.add.text(x, y, letter, {
          fontSize: '56px',
          color: '#F8F8FF',
          fontFamily: 'Orbitron, monospace',
          fontStyle: 'bold',
        }).setOrigin(0.5);

        letterText.setPipeline('Light2D');
        letterText.setInteractive({ useHandCursor: true });

        const container = this.add.container(0, 0, [shadow, letterText]);
        container.setData('shadow', shadow);
        container.setData('letter', letterText);
        container.setData('originalX', x);
        container.setData('originalY', 110);
        container.setData('floatSpeed', 0.8 + Math.random() * 0.4);
        container.setData('floatOffset', Math.random() * Math.PI * 2);
        container.setData('rotationSpeed', 0.3 + Math.random() * 0.4);
        container.setData('depth', Math.random() * 50 + 50);

        this.tweens.add({
          targets: container,
          y: 110,
          duration: 800,
          delay: index * 120,
          ease: 'Elastic.easeOut',
          onStart: () => {
            this.tweens.add({
              targets: letterText,
              angle: { from: -720, to: 0 },
              scaleX: { from: 0.2, to: 1 },
              scaleY: { from: 0.2, to: 1 },
              duration: 800,
              ease: 'Back.easeOut',
            });
          },
        });

        letterText.on('pointerover', () => {
          this.tweens.add({
            targets: letterText,
            scaleX: 1.5,
            scaleY: 1.5,
            angle: 360,
            duration: 400,
            ease: 'Back.easeOut',
          });

          this.tweens.add({
            targets: shadow,
            scaleX: 1.5,
            scaleY: 1.5,
            x: x + 6,
            y: y + 6,
            alpha: 0.5,
            duration: 400,
            ease: 'Back.easeOut',
          });

          letterText.setTint(0x999999);
        });

        letterText.on('pointerout', () => {
          this.tweens.add({
            targets: letterText,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            duration: 400,
            ease: 'Back.easeIn',
          });

          this.tweens.add({
            targets: shadow,
            scaleX: 1,
            scaleY: 1,
            x: x + 3,
            y: y + 3,
            alpha: 0.3,
            duration: 400,
            ease: 'Back.easeIn',
          });

          letterText.clearTint();
        });

        letterText.on('pointerdown', () => {
          const particle = this.add.particles(0, 0, 'pixel', {
            speed: { min: 100, max: 200 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            lifespan: 600,
            gravityY: 200,
            tint: [0xF8F8FF, 0x999999],
          });
          
          particle.explode(20, x, container.y);
          
          setTimeout(() => particle.destroy(), 1000);
        });

        this.lights.addLight(x, 110, 200).setIntensity(2);

        letterContainers.push(container);
      });

      this.lights.enable().setAmbientColor(0x555555);
    }

    function updateScene(this: Phaser.Scene, time: number) {
      letterContainers.forEach((container, index) => {
        const floatSpeed = container.getData('floatSpeed');
        const floatOffset = container.getData('floatOffset');
        const rotationSpeed = container.getData('rotationSpeed');
        const originalX = container.getData('originalX');
        const originalY = container.getData('originalY');
        const depth = container.getData('depth');

        const letter = container.getData('letter');
        const shadow = container.getData('shadow');

        const floatY = Math.sin(time * 0.001 * floatSpeed + floatOffset) * 15;
        const floatX = Math.cos(time * 0.0008 * floatSpeed + floatOffset) * 5;
        const rotation = Math.sin(time * 0.001 * rotationSpeed + floatOffset) * 10;

        letter.x = originalX + floatX;
        letter.y = originalY + floatY;
        letter.angle = rotation;

        shadow.x = originalX + floatX + 3 + (floatY * 0.1);
        shadow.y = originalY + floatY + 3 + (floatY * 0.1);

        const scale = 1 + Math.sin(time * 0.002 + floatOffset) * 0.05;
        letter.setScale(scale);
        shadow.setScale(scale * 0.98);

        const depthEffect = Math.sin(time * 0.0005 + floatOffset) * depth;
        letter.setTint(Phaser.Display.Color.GetColor(
          Math.floor(0 + depthEffect * 0.3),
          Math.floor(212 + depthEffect * 0.2),
          Math.floor(255)
        ));
      });
    }

    phaserGameRef.current = new Phaser.Game(config);

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
      }
    };
  }, [letters]);

  useEffect(() => {
    if (isCorrect && phaserGameRef.current) {
      const scene = phaserGameRef.current.scene.scenes[0];
      if (scene) {
        scene.children.list.forEach((child: any) => {
          if (child.type === 'Container') {
            const letter = child.getData('letter');
            if (letter) {
              scene.tweens.add({
                targets: letter,
                y: letter.y - 100,
                alpha: 0,
                scaleX: 3,
                scaleY: 3,
                angle: 1080,
                duration: 1000,
                ease: 'Back.easeIn',
              });

              const particle = scene.add.particles(0, 0, 'pixel', {
                speed: { min: 200, max: 400 },
                angle: { min: 0, max: 360 },
                scale: { start: 1, end: 0 },
                blendMode: 'ADD',
                lifespan: 1000,
                gravityY: 300,
                tint: [0xFFFFFF, 0xF8F8FF, 0x999999],
              });
              
              particle.explode(30, letter.x, letter.y);
              setTimeout(() => particle.destroy(), 1500);
            }
          }
        });
      }
    }
  }, [isCorrect]);

  return (
    <div 
      className="w-full"
      style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        perspective: '1000px',
        perspectiveOrigin: 'center center'
      }}
    >
      <div 
        ref={gameRef} 
        className="w-full rounded-lg overflow-hidden border-2 border-game-milk/20 shadow-2xl transform-gpu"
        style={{ 
          boxShadow: '0 20px 60px rgba(248, 248, 255, 0.2), 0 0 30px rgba(0, 0, 0, 0.5)',
          transform: 'rotateX(5deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease-out'
        }}
      />
    </div>
  );
}
