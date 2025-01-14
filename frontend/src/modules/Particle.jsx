import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("Initializing particles...");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container);
  };

  return (
    <>
      {init && (
        <div className="particle-container">
          <Particles
            className="particles"
            particlesLoaded={particlesLoaded}
            options={{
              autoPlay: true,
              fpsLimit: 50,
              detectRetina: true,
              fullScreen: { enable: false }, // Disable full-screen mode
              interactivity: {
                detectsOn: "window",
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 500,
                    links: { opacity: 1 },
                  },
                  push: { quantity: 2 },
                  repulse: { distance: 100, duration: 0.1 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: {
                  color: "#ffffff",
                  distance: 250,
                  enable: true,
                  opacity: 0.4,
                  width: 1.5,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "out" },
                  random: false,
                  speed: 4.0,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 100,
                },
                opacity: { value: 0.9 },
                shape: { type: "polygon" },
                size: { value: { min: 1, max: 4 } },
              },
              background: {
                color: { value: "#2b5482" },
              },
              motion: {
                reduce: { factor: 4, value: true },
              },
            }}
          />
        </div>
      )}
    </>
  );
}
