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
  return <span className={`${cssClass}`} />;
};

interface LanguageSwitcherProps {
  altLangs: AlternateLanguage<string, string>[];
}

export const LanguageSwitcher = ({ altLangs = [] }: LanguageSwitcherProps) => {
  return (
    <ul>
      {altLangs.map((altLang) => {
        return (
          <li key={altLang.lang} className="button">
            <PrismicLink
              href={linkResolver(altLang as any)}
              // @ts-ignore TODO: not sure how to type this
              locale={altLang.lang}
              className="h-9 p-2 flex items-center justify-center"
              aria-label={`Change language to ${altLang.lang}`}
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
