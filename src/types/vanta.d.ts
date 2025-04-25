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

declare module 'vanta/dist/vanta.birds.min' {
    const VANTA: any;
    export default VANTA;
  }
  
  declare module 'vanta' {
    const VANTA: any;
    export default VANTA;
  }