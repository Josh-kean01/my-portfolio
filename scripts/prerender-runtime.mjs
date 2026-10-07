const NativeMessageChannel = globalThis.MessageChannel;

class BuildMessageChannel extends NativeMessageChannel {
  constructor() {
    super();

    for (const port of [this.port1, this.port2]) {
      const descriptor = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(port),
        "onmessage",
      );

      if (descriptor?.get && descriptor?.set) {
        Object.defineProperty(port, "onmessage", {
          configurable: true,
          get() {
            return descriptor.get.call(this);
          },
          set(handler) {
            descriptor.set.call(this, handler);
            this.unref();
          },
        });
      }

      port.unref();
    }
  }
}

Object.defineProperty(globalThis, "MessageChannel", {
  configurable: true,
  value: BuildMessageChannel,
});
