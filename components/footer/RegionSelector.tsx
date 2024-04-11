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
  const setLanguageCookie: (languageCode: string) => void = (
    languageCode: string,
  ) => {
    const uppercaseLanguageCode = languageCode.toUpperCase(); // Converter para maiúsculas
    document.cookie = `EN=${uppercaseLanguageCode}; path=/`; // Modificado para usar o nome de cookie "EN" com valor em maiúsculas
    window.location.reload();
  };

  useEffect(() => {
    const languageSelect = document.getElementById(
      "lenguage",
    ) as HTMLDivElement;
    if (languageSelect) {
      const selectElements = languageSelect.querySelectorAll("select");
      selectElements.forEach((selectElement) => {
        selectElement.addEventListener("change", handleSelectChange);
      });
    }

    return () => {
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

    // Armazena o valor selecionado no localStorage
    localStorage.setItem("selectedLanguage", selectedValue);

    // Verifica se o idioma selecionado é igual ao idioma armazenado no cookie "EN"
    const enCookie = getCookie("EN");
    if (
      enCookie &&
      selectedValue.toUpperCase() === enCookie.toUpperCase()
    ) {
      // Se sim, define o cookie novamente e recarrega a página
      setLanguageCookie(selectedValue);
    }
  };

  // Obtém o valor selecionado do localStorage, fornecendo um valor padrão de string vazia se o valor retornado for null
  const selectedLanguage = localStorage.getItem("selectedLanguage") ?? "";

  // Função para obter o valor do cookie
  const getCookie = (name: string) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  return (
    <>
      {content && content.language && content.currency && (
        <div class="flex flex-wrap gap-4 text-base-content" id="lenguage">
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
