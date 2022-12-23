import { PrismicLink } from "@prismicio/react";
import { linkResolver } from "../prismicio";
import { AlternateLanguage } from "@prismicio/types";

interface LangIconProps {
  lang: string;
}

const mapLangToFlagCode: Record<string, string> = {
  ca: "es-ct",
  "en-eu": "gb",
};

const LangIcon = ({ lang }: LangIconProps) => {
  const code = lang.substring(3).toLowerCase();
  let cssClass = `fi fi-${mapLangToFlagCode[lang] || code}`;
  return <span className={cssClass} />;
};

interface LanguageSwitcherProps {
  altLangs: AlternateLanguage<string, string>[];
}

export const LanguageSwitcher = ({ altLangs = [] }: LanguageSwitcherProps) => {
  return (
    <ul>
      {altLangs.map((altLang) => {
        return (
          <li
            key={altLang.lang}
            className="flex items-center h-9 bg-gray-400 hover:bg-opacity-20 bg-opacity-10 dark:bg-opacity-30 dark:hover:bg-opacity-50 p-2 rounded-xl"
          >
            <PrismicLink
              href={linkResolver(altLang as any)}
              locale={altLang.lang}
            >
              <LangIcon lang={altLang.lang} />
            </PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitcher;
