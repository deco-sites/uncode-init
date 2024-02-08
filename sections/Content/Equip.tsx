import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Card from "deco-sites/uncode-init/components/daisy/Card.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
/**
 * @titleBy title
 */
export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter";
  action?: {
    /** @description when user clicks on the image, go to this link */
    link: string;
  };
}
export interface Image {
  image: ImageWidget;
  altText: string;
}
export interface Card {
  icon?: AvailableIcons;
  image: ImageWidget;
  name?: string;
  description?: string;
  social?: {
    sociais: SocialItem[];
  };
  /**
   * @format html
   */

  // href: string;
}

export interface Props {
  title?: string;
  cards: Card[];
  // social?: {
  //   items: SocialItem[];
  //   link: string;
  // };
}

function FeatureCardEquip(
  { image, name, description, social }: Card,
) {
  return (
    <div class="feature-card w-1/3 relative justify-center items-center group bg-[#FFFFFF] pl-0 pr-0 h-full">
      <div class="image relative rounded--[8px] group z-10 w-full">
        {image && (
          <Image
            width={400}
            class="w-full object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        )}
        <div class="flex flex-col group absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-lg group-hover:translate-y-0 translate-y-[1rem] transition-all duration-500 opacity-0 group-hover:opacity-100 p-4 rounded-[10px]">
          <span class="text-xs text-white font-normal">{name}</span>
          <span class="text-lg text-white font-medium">{description}</span>
        </div>
      </div>

      <div class="right-content absolute rounded-[8px] bg-[#f5f7f9] backdrop-blur-lg group-hover:translate-x-[6.5rem] group-hover:rotate-[11deg] pt-2 pr-2 z-[2] top-[auto] left-[8px] bottom-[115px] w-[80%] h-[60%]  transition-all duration-500 border border-[0_0_0_0.05]">
        {social && social.sociais && (
          <ul class="list-none p-0 m-0 flex gap-4 flex-col items-end">
            {social.sociais.map((item) => (
              <li key={item.label}>
                <a
                  href={item.action?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} Logo`}
                  class="flex gap-2 items-center"
                >
                  <span class="block p-1 border rounded-full">
                    <Icon size={24} id={item.label} />
                  </span>
                  {/* Assuming you want to show label only for non-vertical layout */}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function FeaturesEquip({ title, cards }: Props) {
  return (
    <section class="relative text-[#1a1a1a] mt-32">
      <div class="container lg:px-[5%]">
        <div class="md:mx-6 container lg:mx-auto flex justify-between items-center flex-col gap-20 max-md:px-[10px]">
          <div class="features flex-col w-full gap-0 max-w-[100%]">
            <div class="content-top flex flex-row w-full justify-between max-md:flex-col-reverse">
              <div class="top-right max-w-[550px] w-[47%] max-md:w-full">
                <div class="text-sm text-[#fc6001] font-[500] container pb-6">
                  <span>AGRADECIMENTOS ESPECIAIS PARA</span>
                </div>
                <div class="text_link flex flex-row justify-between items-center w-full">
                  {title && (
                    <h2 class="font-medium text-[25px] lg:text-[38px] leading-[100%] text-center max-w-4xl z-10 mb-4">
                      {title}
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <div class="bottom-four flex flex-row w-full relative max-lg:flex-wrap max-lg:grid max-lg:grid-cols-2 gap-[70px]">
              {cards?.map((card) => (
                <FeatureCardEquip
                  {...card}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
