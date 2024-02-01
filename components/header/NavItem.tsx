import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { headerHeight } from "./constants.ts";

function NavItem({ item }: { item: SiteNavigationElement }) {
  const { url, name, children } = item;
  const image = item?.image?.[0];

  return (
    <li class="group flex items-center relative hover:underline menu-sub">
      <a href={url} class="py-6">
        <span class="text-xs font-thin">
          {name}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="absolute hidden transition-all duration-1000 h-0 opacity-0 group-hover:opacity-100 group-hover:block subitem bg-[#fff]"
            style={{
              top: "0px",
              left: "0px",
              marginTop: headerHeight,
              width: "fit-content",
            }}
          >
            {image?.url && (
              <Image
                class="p-6"
                src={image.url}
                alt={image.alternateName}
                width={300}
                height={332}
                loading="lazy"
              />
            )}
            <ul class="hidden h-0 overflow-hidden group-hover:flex items-start justify-center gap-3 flex-col group-hover:max-h-screen group-hover:opacity-100 group-hover:h-[auto]">
              {children.map((node) => (
                <li class="py-1 text-[#1a1a1a]">
                  <a class="hover:underline" href={node.url}>
                    <span>{node.name}</span>
                  </a>

                  <ul class="flex flex-col gap-1">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline" href={leaf.url}>
                          <span class="text-xs">{leaf.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
