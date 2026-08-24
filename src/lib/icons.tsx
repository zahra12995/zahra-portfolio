import {
  BarChart3,
  Bell,
  Bot,
  CheckCircle2,
  Cog,
  Code2,
  Crosshair,
  FileText,
  ListFilter,
  Mail,
  MessageSquare,
  Network,
  PenLine,
  Rocket,
  Search,
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
  BarChart3,
  Bell,
  Bot,
  CheckCircle2,
  Cog,
  Code2,
  Crosshair,
  FileText,
  ListFilter,
  Mail,
  MessageSquare,
  Network,
  PenLine,
  Rocket,
  Search,
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
