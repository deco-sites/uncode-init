import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo, secondLogo } from "$store/components/header/Header.tsx";

function Navbar(
  {
    items,
    logo,
    buttons,
    logoPosition = "left",
    secondLogo,
    secondLogoPosition = "left",
  }: {
    items: SiteNavigationElement[];
    searchbar?: SearchbarProps;
    logo?: Logo;
    secondLogo?: secondLogo;
    buttons?: Buttons;
    logoPosition?: "left" | "center";
    secondLogoPosition?: "left" | "center";
  },
) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden grid grid-cols-3 justify-between items-center border-b border-base-200 w-full px-6 pb-6 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}
        {secondLogo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={secondLogo.src}
              alt={secondLogo.alt}
              width={secondLogo.width || 100}
              height={secondLogo.height || 13}
            />
          </a>
        )}
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:grid lg:grid-cols-3 items-center border-b border-base-200 w-full px-6 group">
        <div
          class={`flex gap-6 col-span-1 ${
            logoPosition === "left" ? "justify-center" : "justify-start"
          }`}
        >
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div
          class={`flex group-hover:hidden ${
            logoPosition === "left"
              ? "justify-start -order-1"
              : "justify-center"
          }`}
        >
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 100}
                height={logo.height || 13}
              />
            </a>
          )}
        </div>
        {/* secondlogo */}
        <div
          class={`hidden group-hover:flex ${
            secondLogoPosition === "left"
              ? "justify-start -order-1"
              : "justify-center"
          }`}
        >
          {secondLogo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block"
            >
              <Image
                src={secondLogo.src}
                alt={secondLogo.alt}
                width={secondLogo.width || 100}
                height={secondLogo.height || 13}
              />
            </a>
          )}
        </div>

        <div class="flex-none flex items-center justify-end gap-6 col-span-1">
          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
