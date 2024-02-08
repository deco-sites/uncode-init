import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Card from "deco-sites/uncode-init/components/daisy/Card.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
/**
 * @titleBy title
 */

export interface Image {
  image: ImageWidget;
  altText: string;
}
export interface Card {
  // icon?: AvailableIcons;
  image: ImageWidget;
  /**
   * @format html
   */

  href: string;
}

export interface Props {
  title?: string;
  cards: Card[];
}

function FeatureCardPartner({ href, image }: Card) {
  return (
    <div class="feature-card partner px-[30px] group group-hover:-translate-y-3 w-full max-md:w-full relative bg-[#F5F7F9] max-h-[289px] h-[289px] justify-center items-center">
      {
        /* {icon && (
        <div class="py-6 px-0 rounded-full bg-white text-[#1A1A1A]">
          <Icon id={icon} size={48} />
        </div>
      )} */
      }
      <div class="image w-[95%] h-[95%] flex justify-center items-center relative">
        {image && (
          <Image
            width={120}
            class="w-full lg:w-1/2 object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        )}
      </div>

      <a href={href} class="arrow-link bg-[#F5F7F9]">
      </a>
    </div>
  );
}

export default function FeaturesPartner({ title, cards }: Props) {
  return (
    <section class="relative text-[#1a1a1a]">
      <div class="bg-[#F5F7F9] container py-[139px] pb-[139px]  max-md:py-[30px] max-md:pb-[30px] rounded-[30px] lg:px-[5%]">
        <div class="md:mx-6 container lg:mx-auto flex justify-between items-center flex-col gap-20 max-md:px-[10px]">
          <div class="features flex-col w-full gap-0 max-w-[100%]">
            <div class="content-top flex flex-row w-full justify-between max-md:flex-col-reverse">
              <div class="top-left flex flex-row relative w-[50%] max-md:w-full">
                <div class="top-left icon-plus"></div>
                <div class="top-center icon-plus max-md:hidden"></div>
                <div class="top-right icon-plus"></div>
                {cards?.slice(0, 2).map((card) => (
                  <FeatureCardPartner
                    {...card}
                  />
                ))}
              </div>

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
            <div class="bottom-four flex flex-row w-full relative max-lg:flex-wrap max-lg:grid max-lg:grid-cols-2">
              <div class="top-left icon-plus"></div>
              <div class="top-center icon-plus"></div>
              <div class="top-middle icon-plus"></div>
              <div class="top-right icon-plus"></div>
              <div class="top-end icon-plus"></div>
              {cards?.slice(2, 6).map((card) => (
                <FeatureCardPartner
                  {...card}
                />
              ))}
              <div class="bottom-left bottom icon-plus"></div>
              <div class="bottom-center bottom icon-plus max-md:hidden"></div>
              <div class="bottom-middle bottom icon-plus"></div>
              <div class="bottom-right bottom icon-plus"></div>
              <div class="bottom-end bottom icon-plus"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
