import Icon from "$store/components/ui/Icon.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";

export interface Props {
  itemsSide: SiteNavigationElement[];
}

function SideItem({ itemsSide }: Props) {
  return (
    <div className="">
      <ul className="flex flex-col py-2">
        {/* Mapeia cada pai */}
        {itemsSide.map((parent, parentIndex) => (
          <li key={parentIndex}>
            {/* Renderiza o nome do pai */}
            {parent.name}
            {/* Se houverem filhos, renderiza-os */}
            {parent.children && parent.children.length > 0 && (
              <ul className="flex flex-col gap-1">
                {/* Mapeia cada filho */}
                {parent.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <a
                      className="flex items-center gap-4 px-4 py-2 hover:translate-x-[-4px] transition-all"
                      href={child.url}
                    >
                      <span className="text-sm">{child.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideItem;
