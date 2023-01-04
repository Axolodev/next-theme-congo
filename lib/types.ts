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

export interface ContentItem {
  path: string;
  home: string;
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
