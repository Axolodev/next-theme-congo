import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { SocialLink } from "../components/molecules/authorLink";
import type { SubpathsWithContent } from "../utils";

export interface MenuItem {
  name: string;
  pageRef: string;
  weight: number;
  title?: string;
}

export interface Menus {
  main: MenuItem[];
  footer: MenuItem[];
}

export interface DefaultPageHeadProps extends Record<string, unknown> {
  title: string;
  logo: string;
  description: string;
  copyright: string;
}

interface AuthorSettings {
  name: string;
  image: string;
  headline: string;
  bio: string;
  links: SocialLink[];
}

export interface ContentItem extends DefaultPageHeadProps {
  path: string;
  home: string;
  author: AuthorSettings;
}

export interface HeaderSettings {
  logo: string;
  logoAlt: string;
  layout: "basic" | "hamburger" | "hybrid";
  showTitle: boolean;
}

export interface FooterSettings {
  showCopyright: boolean;
  showThemeAttribution: boolean;
  showAppearanceSwitcher: boolean;
  showScrollToTop: boolean;
}

export interface ThemeSettings {
  // Default language code for the site
  languageCode: string;
  // List of menus you'll use in your site
  menus: Menus;
  // Path of the folder where you'll store your content
  content: ContentItem;
  header: HeaderSettings;
  footer: FooterSettings;
}

export interface PageProps {
  content: MDXRemoteSerializeResult;
  settings: ThemeSettings;
  isIndex?: boolean;
  subpaths?: SubpathsWithContent[];
}

export interface AuthorEventProps {
  title: string;
  location: string;
  date: string;
  url: string;
  description?: string;
}
