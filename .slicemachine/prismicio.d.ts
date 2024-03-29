// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Footer documents */
interface FooterDocumentData {
    /**
     * Copyright Text field in *Footer*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.copyright_text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    copyright_text: prismicT.KeyTextField;
}
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FooterDocumentData>, "footer", Lang>;
/** Content for Go Home documents */
interface GoHomeButtonDocumentData {
    /**
     * Link  field in *Go Home*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: go_home_button.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.RelationField;
    /**
     * Label field in *Go Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: go_home_button.label
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * icon field in *Go Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: go_home_button.icon
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * Go Home document from Prismic
 *
 * - **API ID**: `go_home_button`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GoHomeButtonDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<GoHomeButtonDocumentData>, "go_home_button", Lang>;
/** Content for Homepage documents */
interface HomeDocumentData {
    /**
     * Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
    /**
     * Meta Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * Meta Tags field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_tags
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_tags: prismicT.KeyTextField;
    /**
     * Meta Image field in *Homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_image
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    meta_image: prismicT.ImageField<never>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = MainSectionsSlice | ContentSlice | CtaSectionSlice | SocialLinksSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Navbar documents */
interface NavbarDocumentData {
    /**
     * Dark Icon field in *Navbar*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.dark_icon
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    dark_icon: prismicT.ImageField<never>;
    /**
     * Light Icon field in *Navbar*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.light_icon
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    light_icon: prismicT.ImageField<never>;
    /**
     * Title field in *Navbar*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Home name field in *Navbar*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.home_name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    home_name: prismicT.KeyTextField;
    /**
     * Home link field in *Navbar*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.home_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    home_link: prismicT.RelationField;
    /**
     * Logo field in *Navbar*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavbarDocumentData>, "navbar", Lang>;
/** Content for Page documents */
interface SectionDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: section.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SectionDocumentDataSlicesSlice>;
    /**
     * Meta Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type SectionDocumentDataSlicesSlice = ContentSlice | GoHomeButtonSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `section`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectionDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SectionDocumentData>, "section", Lang>;
export type AllDocumentTypes = FooterDocument | GoHomeButtonDocument | HomeDocument | NavbarDocument | SectionDocument;
/**
 * Primary content in CtaSection → Primary
 *
 */
interface CtaSectionSliceDefaultPrimary {
    /**
     * Image field in *CtaSection → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_section.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *CtaSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *CtaSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: test
     * - **API ID Path**: cta_section.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for CtaSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CtaSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CtaSectionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CtaSection*
 *
 */
type CtaSectionSliceVariation = CtaSectionSliceDefault;
/**
 * CtaSection Shared Slice
 *
 * - **API ID**: `cta_section`
 * - **Description**: `CtaSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaSectionSlice = prismicT.SharedSlice<"cta_section", CtaSectionSliceVariation>;
/**
 * Item in Galleria → Items
 *
 */
export interface ContentSliceDefaultItem {
    /**
     * Image field in *Galleria → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: content.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Galleria Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Content`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContentSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ContentSliceDefaultItem>>;
/**
 * Slice variation for *Galleria*
 *
 */
type ContentSliceVariation = ContentSliceDefault;
/**
 * Galleria Shared Slice
 *
 * - **API ID**: `content`
 * - **Description**: `Content`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContentSlice = prismicT.SharedSlice<"content", ContentSliceVariation>;
/**
 * Primary content in MainSections → Primary
 *
 */
interface MainSectionsSliceDefaultPrimary {
    /**
     * Title field in *MainSections → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: main_sections.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *MainSections → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: main_sections.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *MainSections → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: main_sections.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Link field in *MainSections → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: main_sections.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.RelationField;
}
/**
 * Item in MainSections → Items
 *
 */
export interface MainSectionsSliceDefaultItem {
    /**
     * sections field in *MainSections → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: main_sections.items[].sections
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    sections: prismicT.RelationField;
}
/**
 * Default variation for MainSections Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MainSections`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainSectionsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MainSectionsSliceDefaultPrimary>, Simplify<MainSectionsSliceDefaultItem>>;
/**
 * Slice variation for *MainSections*
 *
 */
type MainSectionsSliceVariation = MainSectionsSliceDefault;
/**
 * MainSections Shared Slice
 *
 * - **API ID**: `main_sections`
 * - **Description**: `MainSections`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainSectionsSlice = prismicT.SharedSlice<"main_sections", MainSectionsSliceVariation>;
/**
 * Primary content in SocialLinks → Primary
 *
 */
interface SocialLinksSliceDefaultPrimary {
    /**
     * Title field in *SocialLinks → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *SocialLinks → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Logo facebook field in *SocialLinks → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.facebook_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    facebook_logo: prismicT.ImageField<never>;
    /**
     * Facebook field in *SocialLinks → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.facebook
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    facebook: prismicT.LinkField;
    /**
     * Instagram Logo field in *SocialLinks → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.instagram_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    instagram_logo: prismicT.ImageField<never>;
    /**
     * Instagram field in *SocialLinks → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.instagram
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    instagram: prismicT.LinkField;
    /**
     * Email logo field in *SocialLinks → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.email_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    email_logo: prismicT.ImageField<never>;
    /**
     * Email field in *SocialLinks → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: social_links.primary.email
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    email: prismicT.LinkField;
}
/**
 * Default variation for SocialLinks Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SocialLinks`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialLinksSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SocialLinksSliceDefaultPrimary>, never>;
/**
 * Slice variation for *SocialLinks*
 *
 */
type SocialLinksSliceVariation = SocialLinksSliceDefault;
/**
 * SocialLinks Shared Slice
 *
 * - **API ID**: `social_links`
 * - **Description**: `SocialLinks`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialLinksSlice = prismicT.SharedSlice<"social_links", SocialLinksSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { FooterDocumentData, FooterDocument, GoHomeButtonDocumentData, GoHomeButtonDocument, HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, NavbarDocumentData, NavbarDocument, SectionDocumentData, SectionDocumentDataSlicesSlice, SectionDocument, AllDocumentTypes, CtaSectionSliceDefaultPrimary, CtaSectionSliceDefault, CtaSectionSliceVariation, CtaSectionSlice, ContentSliceDefaultItem, ContentSliceDefault, ContentSliceVariation, ContentSlice, MainSectionsSliceDefaultPrimary, MainSectionsSliceDefaultItem, MainSectionsSliceDefault, MainSectionsSliceVariation, MainSectionsSlice, SocialLinksSliceDefaultPrimary, SocialLinksSliceDefault, SocialLinksSliceVariation, SocialLinksSlice };
    }
}
