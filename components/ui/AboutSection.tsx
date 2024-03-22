interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  href: string;
  link: string;
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
          props.link
        ? (
          <div
            className={`container
            }`}
          >
            <div class="max-w-[1320px] m-[auto] flex flex-col lg:flex-row gap-2">
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
                {props.link && (
                  <iframe
                    width="635px"
                    height="423px"
                    src={props.link}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  >
                  </iframe>
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
