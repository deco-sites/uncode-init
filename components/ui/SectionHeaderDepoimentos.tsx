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
  "Small": "lg:text-2xl",
  "Normal": "lg:text-3xl",
  "Large": "lg:text-4xl",
};

function Header(props: Props) {
  return (
    <>
      {props.title || props.description || props.subtitle
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-sm font-light leading-8 lg:leading-10 relative text-[#fc6001]`}
                >
                  {props.title}
                </h1>
              )}
            {props.subtitle &&
              (
                <h3
                  class={`text-[46px] font-light leading-8 lg:leading-10 max-md:text-[24px]`}
                >
                  {props.subtitle}
                </h3>
              )}
            {props.description &&
              (
                <h2
                  class={`
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

export default Header;
