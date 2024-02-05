export interface Abouts {
  text: string;
}

export default function Abouts(
  { content }: {
    content?: { title?: string; items?: Abouts[]; text?: string };
  },
) {
  return (
    <>
      {content && content.items && content.items.length > 0 && (
        <div class="flex flex-col gap-4">
          {content.title && <h3 class="text-lg">{content.title}</h3>}
          <ul
            class={`flex gap-[18px] `}
          >
            {content.items.map((item) => {
              return (
                <li>
                  <span class="flex p-1 gap-[6px]">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
