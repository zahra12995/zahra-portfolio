import {
  Cog,
  Code2,
  Crosshair,
  Mail,
  Network,
  PenLine,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Table,
  Target,
  Webhook,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Explicit map (not a `lucide-react` namespace import) so only the icons the
// data files reference end up in the bundle.
const ICONS: Record<string, LucideIcon> = {
  Cog,
  Code2,
  Crosshair,
  Mail,
  Network,
  PenLine,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Table,
  Target,
  Webhook,
  Workflow,
  Zap,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
