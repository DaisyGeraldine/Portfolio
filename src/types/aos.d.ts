declare module 'aos/dist/aos.js' {
    export function init(options?: any): void;
    export function refresh(): void;
    export function refreshHard(): void;
    export function refreshInit(): void;
    export function setConfig(config: any): void;
    export function destroy(): void;
    export function update(): void;
}