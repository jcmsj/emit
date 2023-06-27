export default function makeEmit(handlers) {
    return (ev, ...args) => {
        handlers[ev]?.(...args);
    };
}
