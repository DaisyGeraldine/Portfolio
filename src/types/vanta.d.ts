// declare module 'vanta/dist/vanta.birds.min.js' {
//     interface VantaEffect {
//         destroy(): void;
//     }

//     function BIRDS(options: {
//         el: HTMLElement;
//         backgroundColor: number;
//         color1: number;
//         color2: number;
//         birdSize: number;
//         wingSpan: number;
//         speedLimit: number;
//         separation: number;
//         alignment: number;
//         cohesion: number;
//     }): VantaEffect;

//     export default BIRDS;
// }

// declare module 'assets/vanta/vanta.birds.min' {
//   const VANTA: any;
//   export default VANTA;
// }

// declare module 'vanta' {
//   const VANTA: any;
//   export default VANTA;
// }

// declare global {
//   interface Window {
//     VANTA: any; // Puedes especificar el tipo más detallado si lo conoces
//   }
// }

// export {};

declare module 'vanta/dist/vanta.birds.min' {
  const BIRDS: any;
  export default BIRDS;
}