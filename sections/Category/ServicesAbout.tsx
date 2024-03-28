import Header from "$store/components/ui/SectionHeaderDev.tsx";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "$store/components/ui/Button.tsx";
export interface Item {
  image?: ImageWidget;
  itemText?: string;
}
export interface ServicesAbout {
  href?: string;
  title?: string;
  item?: string;
  description?: string;
  image?: ImageWidget;
  /** @description Alternative text */
  label?: string;
  buttonText?: string;
  items?: Item[];
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
    // border: boolean;
  };
  list?: ServicesAbout[];

  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function ServicesAbout(props: Props) {
  const id = useId();
  const {
    header = {
      title: "Explore Our Categories",
      description: "Your description",
    },
    list = [
      {
        href: "/category",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/01c01ba9-ac16-4371-82ca-b93d17545f9c",
        label: "category",
        description: "description",
        item: "item",
        buttonText: "Explore collection",
      },
      {
        href: "/category",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/01c01ba9-ac16-4371-82ca-b93d17545f9c",
        label: "category",
        description: "description",
        item: "item",
        buttonText: "Explore collection",
      },
      {
        href: "/category",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/01c01ba9-ac16-4371-82ca-b93d17545f9c",
        label: "category",
        description: "description",
        item: "item",
        buttonText: "Explore collection",
      },
      {
        href: "/category",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/01c01ba9-ac16-4371-82ca-b93d17545f9c",
        label: "category",
        description: "description",
        item: "item",
        buttonText: "Explore collection",
      },
    ],
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "bottom",
        textAlignment: "left",
      },
    },
  } = props;

  return (
    <div
      id={id}
      class=" mt-16 "
    >
      <div class="container bg-[#F5F7F9] py-[139px] pb-[139px]  max-md:py-[30px] max-md:pb-[30px] rounded-[30px] lg:px-[5%] max-md:px-[10px]">
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={layout.headerAlignment || "center"}
        />

        <div class="flex gap-8 flex-col lg:flex-row">
          {list.map((
            { href, image, label, title, items, description },
          ) => (
            <div class="block-dev">
              <a
                href={href}
                class={`relative flex ${
                  layout.categoryCard?.textAlignment === "left"
                    ? "justify-start"
                    : "justify-start items-center"
                } ${
                  layout.categoryCard?.textPosition === "bottom"
                    ? "flex-col-reverse"
                    : "flex-col"
                }`}
              >
                <div class="card item-card">
                  <div class="mb-[120px] image-dev">
                    {image &&
                      (
                        <figure class="relative justify-end rounded-[0px_30px_0px_0px]">
                          <Image
                            class="w-full object-contain"
                            src={image}
                            alt={label}
                            width={880}
                            height={400}
                            loading="lazy"
                          />
                        </figure>
                      )}
                  </div>
                  <div class="middle relative">
                    {title &&
                      (
                        <h2 class="card-title text-[#1a1a1a] text-sm rounded-[30px] p-[13px_21px] border-[#0000001A] w-[fit-content] border">
                          {title}
                        </h2>
                      )}
                    {items && (
                      <ul class="grid grid-cols-2">
                        {items.map(({ image, itemText }) => (
                          <li class="flex ">
                            {image &&
                              (
                                <figure class="relative flex items-center">
                                  <Image
                                    class="w-[15px]"
                                    src={image}
                                    alt={label}
                                    width={15}
                                    height={15}
                                    loading="lazy"
                                  />
                                </figure>
                              )}
                            {itemText && <p>{itemText}</p>}
                          </li>
                        ))}
                      </ul>
                    )}

                    {description && (
                      <p class="text-[17px] text-[#777777]">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
                {
                  /* <Button
                  class="font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
                  aria-label={label}
                >
                  {buttonText}
                </Button> */
                }
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesAbout;
