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
  duration: 40,
  fullScreen: {
  enable: true,
  zIndex: 0 // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
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

  // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  //await loadFull(engine);
  await loadSlim(engine);
}

    imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }
}



