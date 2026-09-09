import {
  Snowflake,
  Leaf,
  Droplet,
  Sun,
  Cloud,
  Zap,
  Wind,
  Eye,
  Settings,
  Layers,
  Sparkles,
  Battery,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  snowflake: Snowflake,
  leaf: Leaf,
  candy: Droplet,
  droplet: Droplet,
  citrus: Sun,
  apple: Leaf,
  cloud: Cloud,
  sun: Sun,
  zap: Zap,
  cherry: Droplet,
  wind: Wind,
  eye: Eye,
  settings: Settings,
  layers: Layers,
  sparkles: Sparkles,
  battery: Battery,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Leaf;
  return <Cmp className={className} />;
}
