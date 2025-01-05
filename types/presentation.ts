import { TypeIcon as type, LucideIcon } from 'lucide-react'

export type Slide = {

  type: 'hero' | 'tabs' | 'features' | 'cta';

  title: string;

  subtitle?: string;

  content?: string;

  tabs?: { title: string; content: string }[];

  features?: { icon: React.ComponentType; title: string; desc: string; action: string }[];

  cta?: string;

};

export interface QuickAccessItem {
  title: string
  description: string
  icon: LucideIcon
  link: string
  image: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  items: string[]
}

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  items: string[]
}

