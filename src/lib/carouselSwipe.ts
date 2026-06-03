export interface SwipeHandlers {
  onPrev: () => void;
  onNext: () => void;
}

// Listens for horizontal swipes / drags on `el` and fires the appropriate
// handler when the gesture exceeds the threshold. Vertical scroll is preserved
// because we only claim the gesture once horizontal movement dominates.
export function bindSwipe(
  el: HTMLElement,
  { onPrev, onNext }: SwipeHandlers,
  threshold = 40,
) {
  let startX = 0;
  let startY = 0;
  let active = false;
  let captured = false;

  el.style.touchAction = 'pan-y';

  const onDown = (e: PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest('button, a, input, select, textarea, [role="button"]')) return;
    startX = e.clientX;
    startY = e.clientY;
    active = true;
    captured = false;
  };

  const onMove = (e: PointerEvent) => {
    if (!active) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!captured && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      captured = true;
      try { el.setPointerCapture(e.pointerId); } catch {}
    }
  };

  const onUp = (e: PointerEvent) => {
    if (!active) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    active = false;
    captured = false;
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) onNext();
      else onPrev();
    }
  };

  const onCancel = () => {
    active = false;
    captured = false;
  };

  el.addEventListener('pointerdown', onDown);
  el.addEventListener('pointermove', onMove);
  el.addEventListener('pointerup', onUp);
  el.addEventListener('pointercancel', onCancel);
}
