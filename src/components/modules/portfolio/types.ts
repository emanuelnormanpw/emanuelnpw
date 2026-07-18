export interface PortfolioItem {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  description: string;
  href?: string;
  featured?: boolean;
}

export interface PortfolioProps {
  items?: PortfolioItem[];
}
