import { useEffect } from "preact/hooks";

export interface Props {
  content: RegionOptions;
}

export type Item = {
  label: string;
  href: string;
};

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export default function RegionSelectorIsland({ content }: Props) {
  // Função para definir o cookie de idioma
  const setLanguageCookie = (languageCode: string) => {
    const uppercaseLanguageCode = languageCode.toUpperCase(); // Converter para maiúsculas
    document.cookie =
      `${uppercaseLanguageCode}=${uppercaseLanguageCode}; path=/`; // Modificado para usar o nome de cookie com valor em maiúsculas
  
    // Excluir cookie anterior
    const allCookies = document.cookie.split(";");
    for (const cookie of allCookies) { // Alteração feita aqui
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

    const languageSelect = document.getElementById(
      "language",
    ) as HTMLDivElement;
    if (languageSelect) {
      const selectElements = languageSelect.querySelectorAll("select");
      selectElements.forEach((selectElement) => {
        selectElement.addEventListener("change", handleSelectChange);
      });
    }

    return () => {
      console.log("Component unmounted");

      const selectElements = languageSelect?.querySelectorAll("select");
      if (selectElements) {
        selectElements.forEach((selectElement) => {
          selectElement.removeEventListener("change", handleSelectChange);
        });
      }
    };
  }, []);

  const handleSelectChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    if (!target || !(target instanceof HTMLSelectElement)) return;

    const selectedValue = target.value;
    const storedLanguage = localStorage.getItem("selectedLanguage");

    console.log("Selected language:", selectedValue);
    console.log("Stored language:", storedLanguage);

    // Verifica se o idioma selecionado é diferente do idioma armazenado atualmente
    if (selectedValue.toUpperCase() !== storedLanguage?.toUpperCase()) {
      // Armazena o valor selecionado no localStorage
      localStorage.setItem("selectedLanguage", selectedValue);

      // Define o cookie correspondente ao idioma selecionado
      setLanguageCookie(selectedValue);
    }
  };

  // Obtém o valor selecionado do localStorage, fornecendo um valor padrão de string vazia se o valor retornado for null
  const selectedLanguage = typeof localStorage !== "undefined"
    ? localStorage.getItem("selectedLanguage") ?? ""
    : "";

  // Função para obter o valor do cookie
  const getCookie = (name: string) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  };

  return (
    <>
      {content && content.language && content.currency && (
        <div class="flex flex-wrap gap-4 text-base-content" id="language">
          {content?.currency?.length > 0 && (
            <select
              id="currencySelect"
              class="select select-bordered select-sm h-10 hidden"
            >
              {content.currency.map((crr, index) => (
                <option key={`currencyOption_${index}_${crr.label}`}>
                  {crr.label}
                </option>
              ))}
            </select>
          )}
          {content?.language?.length > 0 && (
            <select
              id="languageSelect"
              class="select select-bordered select-sm h-10"
              value={selectedLanguage}
              onChange={(event) =>
                event.target && event.target instanceof HTMLSelectElement
                  ? setLanguageCookie(event.target.value)
                  : null}
            >
              {content.language.map((lng, index) => (
                <option
                  key={`languageOption_${index}_${lng.label}`}
                  value={lng.label}
                >
                  {lng.label}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </>
  );
}
