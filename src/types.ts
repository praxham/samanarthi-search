export type Result = {
  title: string;
  description: string;
  keywords: string[];
  links: string[];
  matchType: "exact" | "similar";
};
