export default function makeEmit<H extends Record<string | number | symbol, any>>(handlers: H): <K extends keyof H>(ev: K, ...args: Parameters<H[K]>) => void;
