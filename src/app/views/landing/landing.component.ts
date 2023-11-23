import { Component, OnInit } from '@angular/core';
import { SanityService } from '../../services/sanity.service';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
  tsParticles,
} from "tsparticles-engine";
import { loadSlim } from 'tsparticles-slim';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
    id = "tsparticles";
 particles = tsParticles.domItem(0);

  constructor(
    private sanityService: SanityService,
  ) { }

particlesOptions = {
  duration: 400,
  fullScreen: {
  enable: true,
  zIndex: 0 
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: ClickMode.push,
      },
      onHover: {
        enable: true,
        mode: HoverMode.repulse,
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

particlesLoaded(container: Container): void {
  console.log(container);
}


async particlesInit(engine: Engine): Promise<void> {
  console.log(engine);
  await loadSlim(engine);
}

    imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }
}



