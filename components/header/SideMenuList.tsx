import { FunctionalComponent, h } from "preact";
import type { SiteNavigationElement } from "apps/commerce/types.ts";

interface SideMenuListProps {
  title: string;
  items: { label: string; url: string }[];
}

const SideMenuList: FunctionalComponent<SideMenuListProps> = ({
  title,
  items,
}) => {
  return (
    <ul className="flex flex-col py-2">
      <li>{title}</li>
      {items.map((item, index) => (
        <li key={index}>
          <a className="flex items-center gap-4 px-4 py-2" href={item.url}>
            <span className="text-sm">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideMenuList;
