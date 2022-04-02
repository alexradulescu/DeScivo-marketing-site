import Particles from 'react-tsparticles'
import type { ISourceOptions } from 'tsparticles'

import { styled } from 'stitches.config'

const PARTICLES_OPTIONS: ISourceOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 650
      }
    },
    color: {
      value: '#40917e'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.8017060304327615,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.8120310520674316,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 160.3412060865523,
      color: '#40917e',
      opacity: 0.8,
      width: 0.9620472365193136
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 438.4967681164131,
        line_linked: {
          opacity: 0.5264803145719884
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

export const ParticlesBackground = () => {
  return <StyledParticles options={PARTICLES_OPTIONS} />
}

const StyledParticles = styled(Particles, {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,

  '& canvas': {
    backgroundColor: '#0f172a'
  }
})
