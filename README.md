## About
* A Type-safe event emitter

## Usage
``` ts
import makeEmit from "@jcsj/emit"

const emit = makeEmit({
    msg(content:string) {},
    search(firstName:string, lastName:string) {},
});

// Correct
emit("msg", "Happy around!")

// Error: Expected 3 arguments, but got 2. ts(2554)
emit("search", "Izumo")
```

## With Interfaces
``` ts
interface Events {
    msg(content:string):void
    search(firstName:string, lastName:string):void
}
const emit = makeEmit<Events>({
    msg(content:string) {},
    // Error: Property 'search' is missing in type '{ msg(content: string): void; }' 
    // but required in type 'Events'.ts(2345)
    // search(firstName:string, lastName:string) {}
});
```

## With Partials
``` ts
const emit =  makeEmit<Partial<Events>>({
    msg(content:string) {},
    // Allowed
    // search(firstName:string, lastName:string) {}
})
```

## With String Enums as Record keys
``` ts
enum EV {
    msg = "msg",
    search = "search",
}

interface Handlers extends Record<EV, any> {
    msg(content: string): void
    search(firstName: string, lastName: string): void
}

const emit = makeEmit<Handlers>({
    search(firstName, lastName) {},
    msg(content) {},
});

emit(EV.msg, "Happy around!")
```
