import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class="btn btn-circle md:btn-sm btn-xs btn-ghost"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = !displayMenu.value;
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="currentColor"
      >
        <g></g>
        <path d="M17 2v1h-17v-1h17zM3 7h14v-1h-14v1zM0 11h17v-1h-17v1zM7 15h10v-1h-10v1z">
        </path>
      </svg>
    </Button>
  );
}
