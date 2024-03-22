interface Props {
  title?: string;
  subtitle?: string;
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
      {props.title || props.description || props.subtitle
        ? (
          <div
            className={`container relative mt-[140px] max-md:px-[10px] lg:px-[5%] text- flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  className={`text-sm font-light leading-8 lg:leading-10 relative text-[#fc6001] ${
                    props.fontSize ? fontSizeClasses[props.fontSize] : ""
                  }`}
                >
                  {props.title}
                </h1>
              )}
            {props.subtitle &&
              (
                <h3
                  className={`text-[46px] font-light leading-8 lg:leading-10 max-md:text-[24px]`}
                >
                  {props.subtitle}
                </h3>
              )}
            {props.description &&
              (
                <h2
                  className={`
                  text-[46px] font-light leading-8 lg:leading-10 max-md:text-[24px] mb-16`}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default BannerText;
