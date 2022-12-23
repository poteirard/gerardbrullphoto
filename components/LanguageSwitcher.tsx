import { PrismicLink } from "@prismicio/react";
import { linkResolver } from "../prismicio";
import { AlternateLanguage } from "@prismicio/types";

interface LangIconProps {
  lang: string;
}

const LangIcon = ({ lang }: LangIconProps) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

interface LanguageSwitcherProps {
  altLangs: AlternateLanguage<string, string>[];
}

export const LanguageSwitcher = ({ altLangs = [] }: LanguageSwitcherProps) => {
  return (
    <ul>
      {altLangs.map((altLang) => {
        return (
          <li key={altLang.lang}>
            <PrismicLink href={linkResolver(altLang)} locale={altLang.lang}>
              <LangIcon lang={altLang.lang} />
            </PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitcher;
