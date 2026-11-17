import { useEffect } from "react";

type CueType = "hover" | "click";

class InteractionSoundEngine {
  private context: AudioContext | null = null;
  private lastHoverAt = 0;

  play(type: CueType) {
    try {
      if (type === "hover" && !this.context) return;
      this.context ??= new window.AudioContext();
      const context = this.context;

      if (context.state !== "running") {
        if (type === "hover") return;
        void context.resume().then(() => this.playTone(type)).catch(() => undefined);
        return;
      }

      this.playTone(type);
    } catch {
      // Keep the interface usable if Web Audio isn't available.
    }
  }

  private playTone(type: CueType) {
    const context = this.context;
    if (!context || context.state !== "running") return;

    const now = context.currentTime;
    if (type === "hover" && now - this.lastHoverAt < 0.14) return;
    this.lastHoverAt = now;

    const oscillator = context.createOscillator();
    const overtone = context.createOscillator();
    const envelope = context.createGain();
    const fundamentalLevel = context.createGain();
    const overtoneLevel = context.createGain();
    const startFrequency = type === "hover" ? 587.33 : 440;
    const endFrequency = type === "hover" ? 659.25 : 523.25;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(startFrequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, now + 0.07);
    overtone.type = "sine";
    overtone.frequency.setValueAtTime(startFrequency * 2, now);
    overtone.frequency.exponentialRampToValueAtTime(endFrequency * 2, now + 0.07);
    fundamentalLevel.gain.value = type === "hover" ? 0.009 : 0.014;
    overtoneLevel.gain.value = 0.002;
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(0.65, now + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

    oscillator.connect(fundamentalLevel);
    overtone.connect(overtoneLevel);
    fundamentalLevel.connect(envelope);
    overtoneLevel.connect(envelope);
    envelope.connect(context.destination);
    oscillator.start(now);
    overtone.start(now);
    oscillator.stop(now + 0.17);
    overtone.stop(now + 0.17);

    const disconnect = () => {
      oscillator.disconnect();
      overtone.disconnect();
      fundamentalLevel.disconnect();
      overtoneLevel.disconnect();
      envelope.disconnect();
    };
    oscillator.onended = disconnect;
    overtone.onended = disconnect;
  }

  dispose() {
    if (this.context) void this.context.close();
  }
}

export const useInteractionSounds = () => {
  useEffect(() => {
    const engine = new InteractionSoundEngine();
    let lastHoverTarget: Element | null = null;

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target = event.target instanceof Element ? event.target.closest("a, button") : null;
      if (!target || target === lastHoverTarget) return;
      if (event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) return;
      lastHoverTarget = target;
      engine.play("hover");
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a, button") : null;
      if (target) engine.play("click");
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("click", onClick);
      engine.dispose();
    };
  }, []);
};
