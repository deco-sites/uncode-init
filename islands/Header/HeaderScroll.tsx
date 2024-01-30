// import { useEffect, useRef, useState } from "preact/hooks";
// import { RefObject } from "preact";

// export default function HeaderScroll(){
//     const [scrollingMode, setScrollingMode] = useState(window.pageYOffset > 0);
//     const menuRef: RefObject<HTMLDivElement> = useRef(null);
//     const [isNotHome, setIsNotHome] = useState(true);

//     // lógica do scrolling mode
//     function handleScroll() {
//       const menu = menuRef.current;
//       if (menu && window.pageYOffset > 0) {
//         setScrollingMode(true);
//       } else if (menu) {
//         setScrollingMode(false);
//       }
//     }

//     useEffect(() => {
//       globalThis.addEventListener("scroll", handleScroll);
//       setIsNotHome(globalThis.location.pathname !== "/");
//     }, []);
//     const topDistance = scrollingMode
//       ? "top-0 bg-[#fff] text-text-color"
//       : "top-[24px] bg-[#35353526]";
//     const headerClass = isNotHome ? `h-[138px] sm:h-[${headerHeight}] ` : "";
//     const changeColor = isNotHome ? `text-text-color bg-[#fff]` : "text-[#fff]";

//     return (
//         <>

//         </>
//     )
// }
