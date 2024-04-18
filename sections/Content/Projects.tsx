import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";

export interface Props {
  /**
   * @format html
   */
  title?: string;
  /**
   * @format html
   */
  subtitle?: string;
  posts?: Post[];
  layout?: {
    numberOfSliders?: {
      mobile?: 1 | 2 | 3 | 4 | 5;
      desktop?: 1 | 2 | 3 | 4 | 5;
    };
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large" | "Small";
    showArrows?: boolean;
  };
}

export interface Post {
  href?: string;
  image: ImageWidget;
  alt?: string;
  name?: string;
  description?: string;
  date?: string;
}

function Projects({
  title = "Projects",
  subtitle = "Subtitle",
  layout = {
    numberOfSliders: {
      mobile: 1,
      desktop: 3,
    },
    headerAlignment: "center",
    headerfontSize: "Normal",
    showArrows: false,
  } as Props["layout"],
  posts = [
    {
      href: "/",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
      alt: "alternative text",
      description: "Description",
    },
    {
      href: "/",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
      alt: "alternative text",
      name: "Title Post",
      description: "Description",
    },
    {
      href: "/",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
      alt: "alternative text",
      name: "Title Post",
      description: "Description",
    },
  ],
}: Props) {
  const id = useId();

  if (!posts || posts.length === 0) {
    return null;
  }
  const slideDesktop = {
    1: "md:w-full",
    2: "md:w-1/2",
    3: "md:w-1/3",
    4: "md:w-[24%]",
    5: "md:w-1/5",
  };

  const slideMobile = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
    5: "w-1/5",
  };

  const Card = ({ post }: { post: Post }) => (
    <a href={post.href} class="block">
      <article class="flex flex-col relative group">
        <figure class="w-full">
          <Image
            class="w-full object-cover"
            src={post.image}
            alt={post.alt}
            width={442}
            height={568}
          />
          {/* <figcaption class="text-2xl mt-4 font-light">{post.name}</figcaption> */}
        </figure>
        <div class="flex flex-col gap-1 absolute left-[30px] bottom-[30px] w-full group-hover:opacity-100 opacity-0 transition-all duration-1000">
          <p class="text-[15px] p-[5px] w-[fit-content] font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#fff] text-[#1a1a1a] translate-y-5 group-hover:translate-y-0">
            {post.name}
          </p>
          <div class="flex items-center justify-between">
            <p class="font-medium p-[5px] text-[18px] opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[#fff] text-[#1a1a1a] translate-y-5 group-hover:translate-y-0">
              {post.description}
            </p>
            <p class="font-light text-xs">{post.date}</p>
          </div>
        </div>
      </article>
    </a>
  );

  return (
    <div class="w-full pt-40 flex flex-col gap-6">
      <div class="px-9 container relative">
        <Header
          description={subtitle}
          title={title || "Projects"}
          fontSize={layout?.headerfontSize || "Normal"}
          alignment={layout?.headerAlignment || "center"}
        />
        <div class="absolute block z-10 col-start-1 row-start-3 prev-slide right-24 top-12">
          <Slider.PrevButton class="relative w-12 h-12 flex justify-center items-center rounded-[50%] border border-[#00000001] bg-[#00000003]">
            <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
          </Slider.PrevButton>
        </div>
        <div class="absolute block z-10 col-start-3 row-start-3 next-slide right-10 top-12">
          <Slider.NextButton class="relative w-12 h-12 flex justify-center items-center rounded-[50%] border-[#00000001] bg-[#00000003]">
            <Icon size={24} id="ChevronRight" strokeWidth={3} />
          </Slider.NextButton>
        </div>
      </div>
      <div
        id={id}
        class={`grid overflow-x-hidden`}
      >
        <Slider class="carousel carousel-center sm:carousel-end row-start-2 row-end-5 md:gap-[30px]">
          {posts?.map((post, index) => (
            <Slider.Item
              index={index}
              class={`carousel-item  ${
                slideDesktop[layout?.numberOfSliders?.desktop ?? 3]
              } ${slideMobile[layout?.numberOfSliders?.mobile ?? 1]}`}
            >
              <Card post={post} />
            </Slider.Item>
          ))}
        </Slider>

        {layout?.showArrows && (
          <>
            <div class="relative block z-10 col-start-1 row-start-3">
              <Slider.PrevButton class="absolute w-12 h-12 flex justify-center items-center btn-prev opacity-0">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
            <div class="relative block z-10 col-start-3 row-start-3">
              <Slider.NextButton class="absolute w-12 h-12 flex justify-center items-center btn-next opacity-0">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
        )}
        <SliderJS rootId={id} />
      </div>
    </div>
  );
}

export default Projects;
