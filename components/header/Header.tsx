import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import SideItem from "./SideItem.tsx";
import { headerHeight } from "./constants.ts";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface secondLogo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface Buttons {
  hideAccountButton?: boolean;
  hideWishlistButton?: boolean;
  hideCartButton?: boolean;
}

export interface Props {
  alerts?: string[];

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;
  itemsSide?: SiteNavigationElement[] | null;
  /** @title Logo */
  logo?: Logo;

  logoPosition?: "left" | "center";

  // 2logo
  /** @title Logo */
  secondLogo?: secondLogo;
  secondLogoPosition?: "left" | "center";
  // fim 2logo

  buttons?: Buttons;
}

function Header({
  alerts,
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Feminino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Masculino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sale",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Linktree",
      url: "/",
    },
  ],
  itemsSide = [
    {
      "@type": "SiteNavigationElement",
      name: "Feminino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Masculino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sale",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Linktree",
      url: "/",
    },
  ],
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 100,
    height: 16,
    alt: "Logo",
  },
  logoPosition = "center",
  secondLogo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 100,
    height: 16,
    alt: "Logo",
  },
  secondLogoPosition = "center",
  buttons,
}: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];
  const itemsSides = itemsSide ?? [];

  return (
    <>
      <header class="home">
        <Drawers
          menu={{ items, itemsSide: itemsSides }} // Corrigindo o nome da propriedade
          platform={platform}
        >
          <div class="bg-[#FFFFFF01] fixed w-full z-50 text-[#fff] top-0">
            {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
            <Navbar
              items={items}
              itemsSide={itemsSides} // Passando itemsSide como propriedade
              logo={logo}
              logoPosition={logoPosition}
              secondLogo={secondLogo}
              secondLogoPosition={secondLogoPosition}
              buttons={buttons}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
