interface Props {
  /**
   * @format html
   */
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
                  class={`text-sm font-light leading-8 lg:leading-10 relative text-border text-[#fc6001] border-b border-[#00000024]`}
                  dangerouslySetInnerHTML={{ __html: props.title }}
                >
                  {/* {props.title} */}
                </h1>
              )}
            {props.subtitle &&
              (
                <h3
                  class={`text-[46px] font-light leading-8 lg:leading-10 max-md:text-[24px]`}
                  dangerouslySetInnerHTML={{ __html: props.subtitle }}
                >
                  {/* {props.subtitle} */}
                </h3>
              )}
            {props.description &&
              (
                <h2
                  class={`
                  text-[46px] font-light leading-8 lg:leading-10 max-md:text-[24px] mb-16`}
                  dangerouslySetInnerHTML={{ __html: props.description }}
                >
                  {/* {props.description} */}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
