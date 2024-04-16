import Icon from "$store/components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";

export interface Props {
  items: SiteNavigationElement[];
}

function SideItem({ items }: Props) {
  return (
    <div class="bg-[#F5F7F9] pt-[140px] px-[15px] order-3 w-1/3 max-md:w-full">
      <ul class="flex flex-col py-2 ">
        {items.map((item) => (
          <a href={item.url} key={item.url}>
            <li>
              <div
                className={`${
                  item.children && item.children.length > 0
                    ? "collapse collapse-plus"
                    : ""
                }`}
              >
                {item.children && item.children.length > 0 && (
                  <input type="checkbox" />
                )}

                <div
                  className={`collapse-title first:border-t-2 text-[50px] max-md:text-[40px] ${
                    item.children && item.children.length > 0
                      ? "text-[50px] max-md:text-[40px]"
                      : "text-[22px]"
                  } `}
                >
                  {item.name}
                </div>
                {item.children && item.children.length > 0 && (
                  <div className="collapse-content text-[22px !important]">
                    <ul>
                      {item.children.map((node, index) => (
                        <a href={node.url} key={index}>
                          <li>
                            <SideItem items={[node]} />
                          </li>
                        </a>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </a>
        ))}
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
      </ul>
    </div>
  );
}

export default SideItem;
