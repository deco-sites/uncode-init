interface Props {
  home?: string;
  breadpage?: string;
  fontSize?: "Small" | "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
  border?: boolean;
}

const fontSizeClasses = {
  "Small": "lg:text-sm",
  "Normal": "lg:text-lg",
  "Large": "lg:text-5xl",
};

function BannerText(props: Props) {
  return (
    <>
      {props.home || props.description || props.breadpage
        ? (
          <div
            className={`container relative mt-[140px] max-md:px-[10px] lg:px-[5%] text- flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.description &&
              (
                <h2
                  className={`
                  text-[46px] font-light leading-8 lg:leading-10 max-md:text-[24px] mb-8`}
                >
                  {props.description}
                </h2>
              )}
            <div class="breadcrumb flex items-center gap-[8px]">
              {props.home &&
                (
                  <h1
                    className={`text-[15px] font-light leading-8 lg:leading-10 relative text-[#1a1a1a] ${
                      props.fontSize ? fontSizeClasses[props.fontSize] : ""
                    }`}
                  >
                    {props.home}
                  </h1>
                )}
              {props.breadpage &&
                (
                  <h3
                    className={`text-[15px] font-medium leading-8 lg:leading-10 text-[#FC6001]`}
                  >
                    {props.breadpage}
                  </h3>
                )}
            </div>
          </div>
        )
        : null}
    </>
  );
}

export default BannerText;
