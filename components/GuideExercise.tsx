"use client";

import { useState } from "react";
import { Check, ChevronDown, CircleHelp } from "lucide-react";
import type { GuideChoice } from "@/lib/guides";

interface Props {
  question: string;
  choices: GuideChoice[];
  answer: number;
  cue: string;
  reasoning: string;
  limit: string;
}

export function GuideExercise({ question, choices, answer, cue, reasoning, limit }: Props) {
  const [attempt, setAttempt] = useState<number>();
  const correct = attempt === answer;

  return (
    <section className="practice-sheet" aria-labelledby="practice-title">
      <h2 id="practice-title">Thử trước khi xem lời giải</h2>
      <p className="practice-question" id="practice-question">{question}</p>
      <div role="group" aria-labelledby="practice-question" className="practice-choices">
        {choices.map((choice, index) => (
          <button
            type="button"
            key={choice.label}
            aria-pressed={attempt === index}
            onClick={() => setAttempt(index)}
          >
            <span className="choice-marker" aria-hidden>{String.fromCharCode(65 + index)}</span>
            {choice.label}
            {attempt === index && correct && <Check size={18} className="choice-check" aria-hidden />}
          </button>
        ))}
      </div>
      <div role="status" className="practice-feedback">
        {attempt !== undefined && (
          <p className={correct ? "feedback-correct" : "feedback-retry"}>
            <strong>{correct ? "Đúng." : "Thử lại."}</strong> {choices[attempt].feedback}
          </p>
        )}
      </div>
      <details>
        <summary><CircleHelp size={19} aria-hidden /> Xem gợi ý <ChevronDown size={17} aria-hidden /></summary>
        <p>{cue}</p>
      </details>
      <details>
        <summary><Check size={19} aria-hidden /> Đối chiếu cách làm <ChevronDown size={17} aria-hidden /></summary>
        <p>{reasoning}</p>
        <div className="practice-limit"><h3>Giới hạn áp dụng</h3><p>{limit}</p></div>
      </details>
    </section>
  );
}
