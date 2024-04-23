import { useId } from "$store/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

interface Props {
  onClose?: () => void;
  open?: boolean;
  class?: string;
  loading?: "eager" | "lazy";
  children: ComponentChildren;
  aside: ComponentChildren;
}

function Drawer(props: Props) {
  const {
    children,
    aside,
    open,
    onClose,
    class: _class = "",
    loading = "lazy",
  } = props;
  const lazy = useSignal(loading === "lazy" && !open);
  const id = useId();
  const [dragStartY, setDragStartY] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      (e.key === "Escape" || e.keyCode === 27) && open && onClose?.();

    addEventListener("keydown", handler);

    return () => {
      removeEventListener("keydown", handler);
    };
  }, [open]);

  useEffect(() => {
    lazy.value = false;
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    setDragStartY(e.touches[0].clientY);
    setDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!dragging) return;

    const deltaY = e.touches[0].clientY - dragStartY;

    if (deltaY > 0) {
      onClose?.();
      setDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <div class={`drawer ${_class}`}>
      <input
        id={id}
        checked={open}
        type="checkbox"
        class="drawer-toggle"
        onChange={(e) => e.currentTarget.checked === false && onClose?.()}
      />

      <div class="drawer-content">
        {children}
      </div>

      <aside
        class="drawer-side h-full z-50 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <label for={id} class="drawer-overlay" />
        {!lazy.value && aside}
      </aside>
    </div>
  );
}

export default Drawer;
