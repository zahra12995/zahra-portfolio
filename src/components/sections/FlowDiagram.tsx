import { ArrowDown, ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";
import type { FlowNode } from "@/data/types";

export function FlowDiagram({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="font-mono">
      {/* Desktop: horizontal flow */}
      <div className="hidden items-start justify-between gap-2 lg:flex">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex flex-1 items-start">
            <FlowNodeCard node={node} index={index} />
            {index < nodes.length - 1 ? (
              <div className="relative mt-8 h-px flex-1 shrink-0 self-start overflow-hidden bg-emerald-500/20">
                <div className="animate-flow-signal absolute inset-0 text-emerald-400" />
                <ArrowRight className="absolute -right-1 -top-2 h-4 w-4 text-emerald-400" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Mobile / tablet: vertical flow */}
      <div className="flex flex-col items-stretch gap-2 lg:hidden">
        {nodes.map((node, index) => (
          <div key={node.id}>
            <FlowNodeCard node={node} index={index} />
            {index < nodes.length - 1 ? (
              <div className="relative ml-6 h-8 w-px overflow-hidden bg-emerald-500/20">
                <div className="animate-flow-signal absolute inset-0 text-emerald-400" />
                <ArrowDown className="absolute -bottom-1 -left-2 h-4 w-4 text-emerald-400" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowNodeCard({ node, index }: { node: FlowNode; index: number }) {
  return (
    <div className="w-full max-w-[13rem] rounded-xl border border-emerald-500/20 bg-black/40 p-4">
      <div className="mb-3 flex items-center gap-2">
        <span
          className="animate-pulse-glow flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-400"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <DynamicIcon name={node.icon} className="h-4 w-4" />
        </span>
        <span className="text-[0.7rem] text-emerald-400/70">
          step_{String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="text-sm font-semibold text-emerald-50">{node.label}</p>
      <p className="mt-1 text-xs leading-snug text-emerald-100/50">
        {node.description}
      </p>
    </div>
  );
}
