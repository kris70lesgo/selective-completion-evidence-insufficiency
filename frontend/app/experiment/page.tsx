"use client";

import { useState } from "react";
import { Shell } from "../../components/Shell";
import { recordedExample } from "../../lib/research";

function ReasoningTrace({ running }: { running: boolean }) {
  return <div className={`reasoning-trace ${running ? "is-running" : ""}`} aria-label="Illustration of the incomplete reasoning chain">
    <svg viewBox="0 0 440 230" role="img" aria-label="A reasoning path connects question, evidence, a missing hop, and answer.">
      <path className="trace-line" d="M55 122H146M204 122H287M345 122H411" /><path className="trace-path" d="M55 122H146M204 122H287M345 122H411" />
      <circle className="trace-node n1" cx="45" cy="122" r="10"/><circle className="trace-node n2" cx="194" cy="122" r="10"/><circle className="trace-node missing-node" cx="335" cy="122" r="12"/><circle className="trace-node n4" cx="421" cy="122" r="10"/>
      <text x="45" y="157" textAnchor="middle">QUESTION</text><text x="194" y="157" textAnchor="middle">EVIDENCE</text><text x="335" y="157" textAnchor="middle">MISSING HOP</text><text x="421" y="157" textAnchor="middle">ANSWER</text>
      <text className="trace-caption" x="45" y="92" textAnchor="middle">?</text><text className="trace-caption" x="194" y="92" textAnchor="middle">Ocala</text><text className="trace-caption red" x="335" y="88" textAnchor="middle">withheld</text><text className="trace-caption" x="421" y="92" textAnchor="middle">?</text>
    </svg>
    <p>{running ? "Testing whether the model stops at the gap…" : "One essential relation has been removed from the chain."}</p>
  </div>;
}

export default function Experiment() {
  const [ran, setRan] = useState(false);
  const [running, setRunning] = useState(false);
  const run = () => { setRunning(true); window.setTimeout(() => { setRunning(false); setRan(true); }, 1500); };
  return <Shell><section className="page-intro"><p className="eyebrow">Interactive demonstration · Demo mode</p><h1>Inspect the gap.<br/><i>Then observe the choice.</i></h1><p>Recorded experiment output is shown locally. No API call is made.</p></section><div className="experiment-grid"><section className="protocol" aria-label="Experiment protocol"><div className="controls"><label>Recorded example<select defaultValue={recordedExample.id}><option value={recordedExample.id}>01 · Tom Denney / Ocala</option></select></label><label>Model<select defaultValue="Kimi K2.6"><option>GPT-OSS-120B — no stored output</option><option>Gemini 2.5 Flash Lite — no stored output</option><option>Kimi K2.6</option></select></label></div><article className="protocol-card question"><p className="eyebrow">01 · Question</p><h2>{recordedExample.question}</h2></article><div className="flow-arrow">↓</div><article className="protocol-card evidence"><p className="eyebrow">02 · Available evidence</p><p>{recordedExample.evidence}</p></article><div className="flow-arrow">↓</div><article className="protocol-card missing-hop"><p className="eyebrow">03 · Missing reasoning hop</p><p>{recordedExample.missingFact}</p><small>Intentionally withheld from the model</small></article><div className="flow-arrow">↓</div><button className="run-button" onClick={run} disabled={running}>{running ? "Tracing evidence…" : ran ? "Run recorded experiment again" : "Run experiment"}<span>→</span></button></section><aside className={`result ${ran ? "revealed" : ""}`} aria-live="polite"><p className="eyebrow">04 · Behavior</p>{!ran ? <ReasoningTrace running={running} /> : <><div className="response"><span>Model response</span><blockquote>“{recordedExample.answer}”</blockquote></div><div className="result-stats"><div><span>Reported confidence</span><strong>{recordedExample.confidence}%</strong></div><div><span>Fact family</span><strong>{recordedExample.factFamily}</strong></div></div><div className="outcome"><span>Behavioral outcome</span><strong>Confident wrong<br/>completion</strong></div><div className="truth"><span>Ground truth</span><strong>{recordedExample.groundTruth}</strong></div><p className="interpretation">Evidence was insufficient. The model chose to complete the missing step instead of abstaining.</p></>}</aside></div></Shell>;
}
