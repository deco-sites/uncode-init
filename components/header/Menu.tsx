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
        className={`collapse-title first:border-t-2 text-[50px] max-md:text-[22px] active:font-black focus:font-black
         ${hasChildren ? "text-[50px] max-md:text-[22px]" : "text-[22px]"}`}
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
      <ul class="pl-4 flex-grow flex flex-col divide-y divide-base-200 pt-[60px] order-2 relative w-1/3 max-md:w-full">
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
      <div class="bg-[#F5F7F9] pt-[60px] px-[15px] order-3 w-1/3 max-md:w-full">
        <SideItem itemsSide={itemsSide} />
      </div>
    </div>
  );
}

export default Menu;
