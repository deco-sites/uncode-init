interface Props {
  title?: string;
  subtitle?: string;
  fontSize?: "Small" | "Normal" | "Large";
  /**
   * @format html
   */
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

function BannerTextSide(props: Props) {
  return (
    <>
      {props.title || props.description || props.subtitle
        ? (
          <div
            className={`container   max-md:px-[10px] lg:px-[5%] flex flex-col lg:flex-row gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  className={`text-sm font-light leading-8 lg:leading-10 lg:w-1/2 relative text-[#fc6001] ${
                    props.fontSize ? fontSizeClasses[props.fontSize] : ""
                  }`}
                >
                  {props.title}
                </h1>
              )}
            {props.subtitle &&
              (
                <h3
                  className={`text-[46px] font-light leading-8 lg:leading-10 lg:w-1/2 max-md:text-[24px]`}
                >
                  {props.subtitle}
                </h3>
              )}
            {props.description && (
              <div
                className={`
                text-[28px] font-light leading-8 lg:leading-10 max-md:text-[24px] lg:w-1/2 mb-16`}
                dangerouslySetInnerHTML={{ __html: props.description }}
              />
            )}
          </div>
        )
        : null}
    </>
  );
}

export default BannerTextSide;
