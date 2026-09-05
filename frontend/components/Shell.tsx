import Link from "next/link";
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return <><header className="nav"><Link href="/" className="brand">Evidence<br/><em>Behavior Lab</em></Link><nav aria-label="Primary navigation"><Link href="/">Overview</Link><Link href="/experiment">Experiment</Link><Link href="/findings">Findings</Link></nav><span className="edition">RESEARCH PROTOTYPE · 01</span></header><main>{children}</main><footer><span>Research prototype — results from controlled missing-evidence experiments</span><span>Dataset: MuSiQue-derived evaluation</span></footer></>;
}

export function MethodLine() { const steps = ["MuSiQue multi-hop QA", "Select reasoning chain", "Remove one required hop", "Provide incomplete evidence", "Run LLM", "Classify behavioral response", "Analyze by fact type"]; return <ol className="method-line">{steps.map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b>{step}</li>)}</ol>; }
