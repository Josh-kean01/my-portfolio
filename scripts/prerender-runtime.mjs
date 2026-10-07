const NativeMessageChannel = globalThis.MessageChannel;

class BuildMessageChannel extends NativeMessageChannel {
  constructor() {
    super();
    this.port1.unref();
    this.port2.unref();
  }
}

Object.defineProperty(globalThis, "MessageChannel", {
  configurable: true,
  value: BuildMessageChannel,
});
