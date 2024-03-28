import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  href: string;
  link: string;
  imgvideo?: {
    image: ImageWidget;
    description?: string;
  };
}

const fontSizeClasses = {
  "Small": "lg:text-sm",
  "Normal": "lg:text-lg",
  "Large": "lg:text-5xl",
};

function BannerAbout(props: Props) {
  return (
    <>
      {props.title || props.description || props.subtitle || props.href ||
          props.link || props.imgvideo
        ? (
          <div
            className={`container
            }`}
          >
            <div class="max-w-[1320px] m-[auto] flex flex-col lg:flex-row gap-2 max-sm:mx-2">
              <div class="content flex flex-col gap-[103px] lg:w-1/2">
                <div class="flex flex-col ">
                  {props.title &&
                    (
                      <h1
                        className={`text-sm font-light leading-8 lg:leading-10 relative text-[#fc6001]`}
                      >
                        {props.title}
                      </h1>
                    )}
                  {props.subtitle &&
                    (
                      <h3
                        className={`text-[37px] font-light leading-8 lg:leading-10 max-md:text-[28px]`}
                      >
                        {props.subtitle}
                      </h3>
                    )}
                </div>
                <div class="flex flex-col md:flex-row gap-[100px] items-end max-lg:items-start">
                  {props.href &&
                    (
                      <a
                        href={props.href}
                        className={`
                      text-[14px] font-light leading-8 lg:leading-10 max-md:text-[14px] flex gap-2 min-w-[200px] items-end`}
                      >
                        CONTACT US
                        <svg
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M66.1825 4.42505V41.4962H62.0648V11.4498L19.5831 53.8492L16.6719 50.9339L59.1454 8.5427H29.0207V4.42505H66.1825Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                      </a>
                    )}
                  {props.description &&
                    (
                      <span
                        className={`
                      text-[16px] font-light leading-8 lg:leading-10 max-md:text-[16px]`}
                      >
                        {props.description}
                      </span>
                    )}
                </div>
              </div>
              <div className="iframe lg:w-1/2">
                {props.imgvideo?.image && (
                  <div class="flex flex-col gap-3 cursor-pointer img-iframe">
                    <Image
                      class="w-full h-full"
                      loading="lazy"
                      src={props.imgvideo?.image}
                      alt={props.imgvideo?.description}
                      width={635}
                      height={423}
                    />
                  </div>
                )}
                {props.link && (
                  <div class="iframe-video block-iframe hidden justify-center items-center w-[100vw] h-full fixed left-0 top-0 bg-[#00000070] z-50">
                    <iframe
                      class="z-40 w-[50%] max-md:lg:w-full"
                      width="auto"
                      height="420"
                      src={props.link}
                      allowFullScreen
                    >
                    </iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
        : null}
    </>
  );
}

export default BannerAbout;
