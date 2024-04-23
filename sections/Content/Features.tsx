import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Card from "deco-sites/uncode-init/components/daisy/Card.tsx";

/**
 * @titleBy title
 */
export interface Card {
  icon?: AvailableIcons;

  title: string;
  /**
   * @format html
   */
  text: string;
  href: string;
}

export interface Props {
  /**
   * @format html
   */
  title?: string;
  subtitle?: string;
  description?: string;
  cards: Card[];
}

function FeatureCard({ icon, title, text, href }: Card) {
  return (
    <div class="feature-card h-full px-[30px] group group-hover:-translate-y-3 w-[auto] max-md:w-full bg-[#FFFFFF] items-start relative max-w-[318px] max-md:max-w-full">
      {icon && (
        <div class="py-6 px-0 rounded-full bg-white text-[#1A1A1A]">
          <Icon id={icon} size={48} />
        </div>
      )}
      <div class="space-y-4 text-center">
        {title && (
          <div
            class="text-2xl font-[500] leading-[110%] text-[#1a1a1a] text-left"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <p
          class="leading-[120%] text-[#777777] text-[15px] text-left"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <a href={href} class="arrow-link bg-[#F5F7F9]">
        <div class="arrow w-[90px] h-[90px] transition-all duration-500 rounded-[0 0 0 30px] flex justify-center">
          <i class="rounded-full w-[70px] h-[70px] flex justify-center items-center icon-arrow">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_4616)">
                <path
                  d="M16.0062 1.56836V10.0418H15.065V3.17401L5.35486 12.8653L4.68945 12.1989L14.3977 2.50954H7.51204V1.56836H16.0062Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_4616">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.947266 0.629883)"
                  />
                </clipPath>
              </defs>
            </svg>
          </i>
        </div>
        <div class="left-top max-md:hidden">
          <svg
            viewBox="0 0 11 11"
            fill="#F5F7F9"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[42px] h-[25px]"
          >
            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z">
            </path>
          </svg>
        </div>
        <div class="right-bottom max-md:hidden">
          <svg
            viewBox="0 0 11 11"
            fill="#F5F7F9"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[35px] h-[34px]"
          >
            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z">
            </path>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function Features(
  { title, cards, subtitle, description }: Props,
) {
  return (
    <section class="relative text-[#1a1a1a]  max-w-screen">
      <div class="bg-[#F5F7F9] container py-[139px] pb-[139px]  max-md:py-[30px] max-md:pb-[30px] rounded-[30px] lg:px-[5%] max-md:px-[23px]">
        <div class="text-sm text-[#fc6001] font-[500] border-b-[1px] container pb-6">
          <span>{subtitle}</span>
        </div>
        <div class="container lg:mx-auto flex justify-between items-center flex-col gap-20">
          <div class="text_link flex flex-row justify-between items-center w-full mt-6 pt-[26px]">
            {title && (
              <h2
                class="font-normal text-[26px] lg:text-[45px] leading-[100%] text-center max-w-4xl z-10 mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
              >
              </h2>
            )}
            <div class="">
              <a
                href="/serviços"
                class="flex flex-row gap-[6px] items-center text-[#1a1a1a] text-[15px] group btn-service"
              >
                <span class="max-md:hidden">{description}</span>
                <i class="rounded-full  group-hover:bg-transparent w-[40px] h-[40px] flex justify-center items-center">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:text-gray-500"
                  >
                    <g clip-path="url(#clip0_8_4616)">
                      <path
                        d="M16.0062 1.56836V10.0418H15.065V3.17401L5.35486 12.8653L4.68945 12.1989L14.3977 2.50954H7.51204V1.56836H16.0062Z"
                        fill="#1A1A1A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8_4616">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.947266 0.629883)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              </a>
            </div>
          </div>
          <div class="features max-lg:flex-col  xl:flex-nowrap grid grid-cols-4 max-sm:grid-cols-1 max-[1200px]:grid-cols-2">
            {cards?.map((card) => <FeatureCard {...card} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
