import type { SubpathsWithContent } from "../../../utils";

export interface SubpathsLayoutProps {
  subpaths: SubpathsWithContent[];
}

export type ArticleLinksLayout = React.FC<SubpathsLayoutProps>;
