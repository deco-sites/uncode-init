import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface ExtraLinks {
  label:
    | "Mail"
    | "Maps"
    | "PhoneFoo";
  link: string;
  text: string;
}

export default function Links(
  { content, vertical = false }: {
    content?: { title?: string; items?: ExtraLinks[]; text?: string };
    vertical?: boolean;
  },
) {
  return (
    <>
      {content && content.items && content.items.length > 0 && (
        <div class="flex flex-col gap-4">
          {content.title && <h3 class="text-lg">{content.title}</h3>}
          <ul
            class={`flex gap-[18px] max-sm:flex-col ${
              vertical ? "lg:flex-col lg:items-start" : "flex-wrap items-center"
            }`}
          >
            {content.items.map((item) => {
              return (
                <li>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} Logo`}
                    class="flex gap-2 items-center"
                  >
                    <span class="flex p-1 gap-[6px]">
                      <Icon size={24} id={item.label} />
                      {item.text}
                    </span>
                    {vertical && (
                      <div class="text-sm hidden lg:block">{item.label}</div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
