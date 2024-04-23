import { useEffect, useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  content: RegionOptions;
}

export type Item = {
  label: string;
  href: string;
  src: ImageWidget;
  alt: string;
};

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export default function RegionSelectorIsland({ content }: Props) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  // Função para definir o cookie de idioma
  const setLanguageCookie = (languageCode: string) => {
    const uppercaseLanguageCode = languageCode.toUpperCase(); // Converter para maiúsculas
    document.cookie =
      `${uppercaseLanguageCode}=${uppercaseLanguageCode}; path=/`; // Modificado para usar o nome de cookie com valor em maiúsculas

    // Excluir cookie anterior
    const allCookies = document.cookie.split(";");
    for (const cookie of allCookies) {
      const [name] = cookie.split("=");
      if (name.trim().toUpperCase() !== uppercaseLanguageCode) {
        document.cookie =
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      }
    }

    window.location.reload();
  };

  useEffect(() => {
    console.log("Component mounted");

    // Verifica se há um idioma selecionado no cookie
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && content.language) {
      setSelectedLanguage(storedLanguage);
    }

    const languageDiv = document.getElementById("language") as HTMLDivElement;
    if (languageDiv) {
      const divElements = languageDiv.querySelectorAll("div");
      divElements.forEach((divElement) => {
        divElement.addEventListener("click", handleDivClick);
      });
    }

    return () => {
      console.log("Component unmounted");

      const divElements = languageDiv?.querySelectorAll("div");
      if (divElements) {
        divElements.forEach((divElement) => {
          divElement.removeEventListener("click", handleDivClick);
        });
      }
    };
  }, []);

  const handleDivClick = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement;
    if (!target || !(target instanceof HTMLDivElement)) return;

    const selectedLanguage = target.textContent?.trim(); // Obtém o conteúdo textual da div como idioma selecionado

    // Verifica se o idioma selecionado é diferente do idioma armazenado atualmente
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (
      selectedLanguage &&
      selectedLanguage.toUpperCase() !== storedLanguage?.toUpperCase()
    ) {
      // Armazena o valor selecionado no localStorage
      localStorage.setItem("selectedLanguage", selectedLanguage);

      // Define o cookie correspondente ao idioma selecionado
      setLanguageCookie(selectedLanguage);

      // Define a nova div como selecionada
      setSelectedLanguage(selectedLanguage);
    }
  };

  return (
    <>
      {content && content.language && content.currency && (
        <div
          class="flex flex-wrap gap-4 text-base-content w-fit h-full items-center"
          id="language"
        >
          {content?.currency?.length > 0 && (
            <div
              id="currencySelect"
              class="h-10 flex items-center max-lg:hidden"
            >
              {content.currency.map((crr, index) => (
                <div
                  key={`currencyOption_${index}_${crr.label}`}
                  class="flex gap-4 pl-[32px] rounded-[500px] pr-[4px] py-[4px] bg-[#FFFFFF33] items-center"
                >
                  {crr.label}
                  <img
                    class="bg-[#000000B2] p-[8px] rounded-[500px] h-[24px] w-[22px]"
                    src={crr.src}
                    alt={crr.alt}
                  />
                </div>
              ))}
            </div>
          )}
          {content?.language?.length > 0 && (
            <div
              id="languageSelect"
              class="h-10 flex flex-row gap-[22px] items-center"
            >
              {content.language.map((lng, index) => (
                <div
                  key={`languageOption_${index}_${lng.label}`}
                  class={`${lng.label} cursor-pointer `}
                  onClick={() => setLanguageCookie(lng.label)}
                >
                  {/* Aqui você pode adicionar a imagem e o atributo alt */}
                  <img src={lng.src} alt={lng.alt} />
                  <span class="hidden">{lng.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
