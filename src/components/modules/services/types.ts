export interface ServiceFeature {
  text: string;
  included: boolean;
}

export interface ServicePackage {
  id: string;
  badge?: string;
  readyLabel: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: ServiceFeature[];
  popular?: boolean;
}
