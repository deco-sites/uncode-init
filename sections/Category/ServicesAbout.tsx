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

        <div class="grid md:grid-cols-2 grid-cols-1 mt-6 gap-[30px]">
          {list.map((
            { href, image, label, title, items, description },
          ) => (
            <div class="bg-[#eeeeee] rounded-[30px_30px_30px_0]">
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
                  <div class="middle relative pl-[50px]">
                    {title &&
                      (
                        <h2 class="card-title text-[#1a1a1a] text-sm rounded-[30px] p-[13px_21px] border-[#0000001A] w-[fit-content] border">
                          {title}
                        </h2>
                      )}
                    {items && (
                      <ul class="grid grid-cols-2">
                        {items.map(({ image, itemText }) => (
                          <li>
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

                    <div class="left-top max-md:hidden">
                      <svg
                        width="33"
                        height="34"
                        viewBox="0 0 33 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_9_5480)">
                          <path
                            d="M-0.999995 0.330044L-1 33.92L32.59 33.92C14.0388 33.92 -0.999995 18.8813 -0.999995 0.330044Z"
                            fill="#F5F7F9"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_5480">
                            <rect
                              width="33.59"
                              height="33.59"
                              fill="white"
                              transform="matrix(0 -1 1 0 -1 33.92)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div class="author flex gap-5 items-center">
                    {image &&
                      (
                        <figure class="relative max-w-[120px] justify-end bg-[#F5F7F9] rounded-[0px_30px_0px_0px] p-[20px]">
                          <Image
                            class="w-full"
                            src={image}
                            alt={label}
                            width={100}
                            height={100}
                            loading="lazy"
                          />
                        </figure>
                      )}
                    <div class="asign">
                      <div class="right-bottom max-md:hidden">
                        <svg
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_9_5482)">
                            <path
                              d="M4.73228e-06 0.529995L0 34.12L33.59 34.12C15.0388 34.12 4.95352e-06 19.0812 4.73228e-06 0.529995Z"
                              fill="#F5F7F9"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_9_5482">
                              <rect
                                width="33.59"
                                height="33.59"
                                fill="white"
                                transform="matrix(0 -1 1 0 0 34.12)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
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
