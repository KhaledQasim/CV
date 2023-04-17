import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import config from "./config/config";
const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
    console.log(container.options.particles.number);
    setContainer(container);
  }, []);
  const [Container, setContainer] = useState("");
  return (
    <Particles
      id="SkillsParticlesSection"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -5,
        },
        
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        particles: {
          number: {
            value: 10,
            max: 10,
            density: {
              enable: false,
              value_area: 100,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "image",
            options: {
              image: [
                {
                  src: "/img/1200px-Laravel.svg.png",
                },
                {
                  src: "/img/spring-logo.png",
                },
                {
                  src: "/img/Java.png",
                },
                {
                  src: "/img/sql.png",
                },
                {
                  src: "/img/linux.png",
                },
              ],
            },
          },

          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 60,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 600,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onhover: {
              enable: true,
              mode: ["bubble","repulse"],
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 1,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
export default Particle;
