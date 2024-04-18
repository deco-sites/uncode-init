import Icon from "$store/components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import SideItem from "./SideItem.tsx";
export interface Props {
  items: SiteNavigationElement[];
  itemsSide: SiteNavigationElement[];
}

function MenuItem({ item }: { item: SiteNavigationElement }) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={`${hasChildren ? "collapse collapse-plus" : ""}`}>
      {hasChildren && <input type="checkbox" />}

      <div
        className={`collapse-title first:border-t-2 text-[50px] max-md:text-[40px] ${
          hasChildren ? "text-[50px] max-md:text-[40px]" : "text-[22px]"
        }`}
      >
        {item.name}
      </div>
      {hasChildren && (
        <div className="collapse-content text-[22px !important]">
          <ul>
            {item.children?.map((node, index) => (
              <a href={node.url}>
                <li key={index}>
                  <MenuItem item={node} />
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Menu({ items, itemsSide }: Props) {
  return (
    <div class="flex  max-md:flex-col flex-row h-full border-none relative top-[-3px] max-md:overflow-auto">
      <ul class="pl-4 flex-grow flex flex-col divide-y divide-base-200 pt-[140px] order-2 relative w-1/3 max-md:w-full">
        {items.map((item) => (
          <a href={item.url}>
            <li>
              <MenuItem item={item} />
            </li>
          </a>
        ))}
      </ul>
      <div class="order-1 w-[23%] max-md:hidden relavite">
        <h2 class="text-[10vw] font-bold uppercase rotate-[270deg] opacity-5 items-end flex origin-[90%_98%] absolute">
          MENU
        </h2>
      </div>
      <div class="bg-[#F5F7F9] pt-[140px] px-[15px] order-3 w-1/3 max-md:w-full">
        <SideItem itemsSide={itemsSide} />
        {
          /* <ul class="flex flex-col py-2 ">
          <li>
            Endereço
            <a
              class="flex items-center gap-4 px-4 py-2"
              href=""
            >
              <span class="text-sm">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </a>
          </li>
        </ul>
        <ul class="flex flex-col py-2 ">
          <li>
            Redes Socials
            <a
              class="flex items-center gap-4 px-4 py-2 hover:translate-x-[-4px] transition-all"
              href=""
            >
              <span class="text-sm">Facebook</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2 hover:translate-x-[-4px] transition-all"
              href=""
            >
              <span class="text-sm">Twitter</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2 hover:translate-x-[-4px] transition-all"
              href=""
            >
              <span class="text-sm">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2 hover:translate-x-[-4px] transition-all"
              href=""
            >
              <span class="text-sm">Instagram</span>
            </a>
          </li>
        </ul>
        <ul class="flex flex-col py-2 ">
          <li>
            Contato
            <a
              class="flex items-center gap-4 px-4 py-2"
              href=""
            >
              <span class="text-sm">email@email.com</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2"
              href=""
            >
              <span class="text-sm">11954564654</span>
            </a>
          </li>
        </ul> */
        }
      </div>
    </div>
  );
}

export default Menu;
