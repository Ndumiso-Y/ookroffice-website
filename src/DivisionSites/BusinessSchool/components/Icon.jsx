import * as icons from "lucide-react";

export default function Icon({ name, className = "w-5 h-5" }) {
  const LucideIcon = icons[name] || icons.Circle;
  return <LucideIcon className={className} aria-hidden="true" />;
}
