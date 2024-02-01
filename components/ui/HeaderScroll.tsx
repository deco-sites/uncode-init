// export { default } from "$store/components/header/Header.tsx";
import { useEffect } from "preact/hooks";

function handleScroll() {
  const header = document.querySelector("header"); // substitua 'seuHeaderId' pelo ID do seu header
  if (header) {
    if (globalThis.scrollY > 0) {
      header.classList.add("scrolled"); // Adiciona uma classe 'scrolled' quando a página é rolada para baixo
    } else {
      header.classList.remove("scrolled"); // Remove a classe 'scrolled' quando a página é rolada para o topo
    }
  }
}

function ScrollHeader() {
  useEffect(() => {
    globalThis.addEventListener("scroll", handleScroll); // Adiciona um event listener para o evento de scroll
    return () => {
      globalThis.removeEventListener("scroll", handleScroll); // Remove o event listener quando o componente é desmontado
    };
  }, []); // A lista de dependências vazia garante que o efeito só seja executado uma vez após a montagem do componente

  return null; // Este componente não renderiza nada no DOM
}

export default ScrollHeader;
