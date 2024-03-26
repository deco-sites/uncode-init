import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";

export interface Props {
  title?: string;
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
  label?: string;
  description?: string;
  author?: string;
  date?: string;
}

function BlogPosts({
  title = "BlogPosts",
  subtitle = "Look at the articles",
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
      label: "Title Post",
      description: "Description",
      author: "Author",
      date: "Date",
    },
    {
      href: "/",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
      alt: "alternative text",
      label: "Title Post",
      description: "Description",
      author: "Author",
      date: "Date",
    },
    {
      href: "/",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
      alt: "alternative text",
      label: "Title Post",
      description: "Description",
      author: "Author",
      date: "Date",
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
    4: "md:w-1/4",
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
    <a href={post.href} class="block px-3">
      <article class="flex flex-col">
        <figure class="w-full relative ">
          <Image
            class="w-full object-cover rounded-[15px_15px_0_0]"
            src={post.image}
            alt={post.alt}
            width={442}
            height={266}
          />
          <figcaption class="text-xs text-[#666666] mt-4 font-light absolute bottom-0 left-[40%] px-[30px] pt-3 bg-[#EEEEEE] rounded-[25px_25px_0_0] ">
            <div class="legend_left">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_9_5532)">
                  <path
                    d="M0.210781 17.98L17.8008 17.98L17.8008 0.38998C17.8008 10.1047 9.92547 17.98 0.210781 17.98Z"
                    fill="#EEEEEE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_5532">
                    <rect
                      width="17.59"
                      height="17.59"
                      fill="white"
                      transform="matrix(-1 0 0 -1 17.8008 17.98)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {post.label}
            <div class="legend_right">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.121096 0.309994L0.121094 17.9L17.7111 17.9C7.99641 17.9 0.121096 10.0247 0.121096 0.309994Z"
                  fill="#EEEEEE"
                />
              </svg>
            </div>
          </figcaption>
        </figure>
        <div class="flex flex-col px-[30px] gap-[14px] bg-[#EEEEEE] rounded-[0_0_15px_15px]">
          <p class="font-light text-[14px] text-[#1A1A1A] pt-[44px]">
            {post.date}
          </p>
          <div class="flex items-center justify-between">
            <p class="text-base font-medium pb-14 pt-2">{post.description}</p>
            <p class="font-light text-xs">
              {post.author}
            </p>
          </div>
        </div>
      </article>
    </a>
  );

  return (
    <div class="bg-[#F5F7F9] container py-[139px] pb-[139px]  max-md:py-[30px] max-md:pb-[30px] rounded-[30px] lg:px-[5%] max-md:px-[10px]">
      <div class="px-9 pb-[94px] posts">
        <Header
          title={title || "BlogPosts"}
          subtitle={subtitle || "Look at the articles"}
          fontSize={layout?.headerfontSize || "Normal"}
          alignment={layout?.headerAlignment || "center"}
        />
      </div>
      <div
        id={id}
        class={`grid ${
          layout?.showArrows ? "grid-cols-[48px_1fr_48px]" : ""
        } px-6 container`}
      >
        <div class="flex flex-col lg:flex-row">
          {posts?.map((post) => (
            <div
              class={`w-1/3 max-lg:w-full`}
            >
              <Card post={post} />
            </div>
          ))}
        </div>

        {layout?.showArrows && (
          <>
            <div class="relative block z-10 col-start-1 row-start-3">
              <Slider.PrevButton class="absolute w-12 h-12 flex justify-center items-center">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
            <div class="relative block z-10 col-start-3 row-start-3">
              <Slider.NextButton class="absolute w-12 h-12 flex justify-center items-center">
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

export default BlogPosts;
