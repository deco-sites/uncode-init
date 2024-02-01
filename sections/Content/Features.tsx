import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

/**
 * @titleBy title
 */
export interface Card {
  icon?: AvailableIcons;
  /**
   * @format html
   */
  title: string;
  text: string;
}

export interface Props {
  title?: string;
  cards: Card[];
}

function FeatureCard({ icon, title, text }: Card) {
  return (
    <div class="feature-card group group-hover:-translate-y-3 w-[23%]">
      {icon && (
        <div class="p-6 rounded-full bg-white text-[#1A1A1A]">
          <Icon id={icon} size={48} />
        </div>
      )}
      <div class="space-y-4 text-center">
        {title && (
          <div
            class="text-2xl font-semibold leading-[110%]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <p class="leading-[120%]" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default function Features({ title, cards }: Props) {
  return (
    <section class="relative bg-[#F5F7F9] text-[#1a1a1a] py-[139px] pb-[139px] max-w-screen max-md:py-[30px] max-md:pb-[30px]">
      <div class="text-sm text-[#fc6001] font-[500] px-6 border-b-[1px] section-content pb-6">
        <span>NOSSA ESPECIALIZAÇÃO</span>
      </div>
      <div class="mx-6 section-content lg:mx-auto flex justify-between items-center flex-col gap-20">
        <div class="text_link flex flex-row justify-between items-center px-6 w-full mt-6 pt-[26px]">
          {title && (
            <h2 class="font-medium text-[26px] lg:text-[45px] leading-[100%] text-center max-w-4xl z-10">
              {title}
            </h2>
          )}
          <div class="">
            <a
              href="/serviços"
              class="flex flex-row gap-[6px] items-center text-[#1a1a1a] text-[15px]"
            >
              Visualizar serviços
              <i class="rounded-full bg-[#0000000D] w-[40px] h-[40px] flex justify-center items-center">
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
        <div class="features">
          {cards?.map((card) => <FeatureCard {...card} />)}
        </div>
      </div>
    </section>
  );
}
