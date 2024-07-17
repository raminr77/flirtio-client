import { ISourceOptions } from "@tsparticles/engine";

export const PARTICLES_CONFIG: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
            enable: true,
            mode: ['grab']
        },
      },
      modes: {
        grab: {
            distance: 100,
            line_linked: {
              opacity: 0.3
            }
          },
          bubble: {
            size: 0,
            speed: 3,
            opacity: 0,
            duration: 2,
            distance: 250
          },
          repulse: {
            duration: 0.4,
            distance: 400
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
      },
    },
    particles: {
        number: {
          value: 50,
          density: {
            enable: true,
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 2,
        },
        line_linked: {
          enable: false,
          distance: 150,
          opacity: 0.8,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          attract: {
            enable: false,
          }
        }
      },
    detectRetina: true,
  };