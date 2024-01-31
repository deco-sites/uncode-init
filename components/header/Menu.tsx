import Icon from "$store/components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";

export interface Props {
  items: SiteNavigationElement[];
}

function MenuItem({ item }: { item: SiteNavigationElement }) {
  return (
    <div class="collapse collapse-plus">
      <input type="checkbox" />
      <div class="collapse-title first:border-t-2 text-[50px] not:hover:opacity-[0.5]">
        {item.name}
      </div>
      <div class="collapse-content">
        <ul>
          {
            /* <li>
            <a class="underline text-sm" href={item.url}>Ver todos</a>
          </li> */
          }
          {item.children?.map((node) => (
            <li class="text-[22px]">
              <MenuItem item={node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Menu({ items }: Props) {
  return (
    <div class="flex  max-md:flex-col flex-row h-full border-none relative top-[-3px] max-md:overflow-auto">
      <ul class="pl-4 flex-grow flex flex-col divide-y divide-base-200 pt-[140px] order-2 relative top-[-12%] w-1/3 max-md:w-full">
        {items.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
      <div class="order-1 w-1/3 max-md:hidden relavite">
        <h2 class="text-[10vw] font-bold uppercase rotate-[270deg] opacity-5 items-end flex origin-[100%_42%] absolute">
          MENU
        </h2>
      </div>
      <div class="bg-[#F5F7F9] pt-[140px] px-[15px] order-3 w-1/3 max-md:w-full">
        <ul class="flex flex-col py-2 ">
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
              class="flex items-center gap-4 px-4 py-2"
              href=""
            >
              <span class="text-sm">Facebook</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2"
              href=""
            >
              <span class="text-sm">Twitter</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2"
              href=""
            >
              <span class="text-sm">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-4 px-4 py-2"
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
        </ul>
      </div>
    </div>
  );
}

export default Menu;
