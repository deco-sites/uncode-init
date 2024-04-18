import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import SideItem from "./SideItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo, secondLogo } from "$store/components/header/Header.tsx";

function Navbar(
  {
    items,
    itemsSide,
    logo,
    buttons,
    logoPosition = "left",
    secondLogo,
    secondLogoPosition = "left",
  }: {
    items: SiteNavigationElement[];
    itemsSide: SiteNavigationElement[];
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
        class="lg:hidden grid grid-cols-2 max-lg:flex flex-row-reverse justify-between items-center border-b border-base-200 w-full px-6 pt-6 pb-6 gap-2 group border-none relative"
      >
        <div>
          {/* Conteúdo da Navbar */}
          <SideItem itemsSide={itemsSide} />
          {/* Passe itemsSide como propriedade para SideItem */}
        </div>
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center max-lg:justify-start"
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
            class="flex-grow items-center justify-center hidden max-lg:justify-start"
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
      <div class="hidden lg:grid lg:grid-cols-3 items-center w-full px-6 container relative">
        <div
          class={`flex gap-6 col-span-1 ${
            logoPosition === "left" ? "justify-center" : "justify-start"
          }`}
        >
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div
          class={`flex  ${
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
          class={`hidden ${
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

        <div class="flex-none flex items-center gap-[30px] col-span-1 w-[fit-content] absolute right-0 h-full min-w-[90px] border-l border-[#FFFFFF33]">
          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
