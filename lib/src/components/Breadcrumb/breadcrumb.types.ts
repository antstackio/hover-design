export type ICrumb = {
  title: string;
  href?: string;
};

export interface IBreadcrumbProps {
  crumbs: Array<ICrumb>;
  separator?: string | React.ReactNode;
  className?: string;
}
