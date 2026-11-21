import assert from "node:assert/strict";
import { guides } from "../lib/guides";
import { SUBJECTS } from "../lib/subjects";

let count = 0;
for (const subject of SUBJECTS) {
  assert.ok(guides[subject].length, `Thiếu chuyên mục cho ${subject}`);
  const slugs = new Set<string>();

  for (const guide of guides[subject]) {
    const context = `${subject}/${guide.slug}`;
    assert.match(guide.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, context);
    assert.ok(!slugs.has(guide.slug), `Trùng đường dẫn ${context}`);
    slugs.add(guide.slug);

    for (const field of ["title", "intent", "question", "cue", "reasoning", "limit"] as const) {
      assert.ok(guide[field].trim(), `Thiếu ${field} trong ${context}`);
    }

    const labels = guide.choices.map(choice => choice.label.trim());
    assert.ok(labels.length >= 2 && new Set(labels).size === labels.length, `Lựa chọn sai hoặc trùng trong ${context}`);
    assert.ok(guide.choices.every(choice => choice.label.trim() && choice.feedback.trim()), `Thiếu nhãn hoặc phản hồi trong ${context}`);
    assert.ok(Number.isInteger(guide.answer) && guide.answer >= 0 && guide.answer < labels.length, `Đáp án sai trong ${context}`);
    if (guide.excerpt) {
      assert.ok(guide.excerpt.attribution.trim() && guide.excerpt.lines.length && guide.excerpt.lines.every(line => line.trim()), `Thiếu trích dẫn hoặc xuất xứ trong ${context}`);
    }

    count += 1;
  }
}

console.log(`✓ ${count} tình huống thực hành hợp lệ.`);
