type CellState = "answered" | "marked" | "unvisited";

const MARKED = new Set([5, 13, 22]);
const UNVISITED = new Set([26, 27, 28, 29, 30, 31]);

const CELL_COUNT = 32;

function stateFor(index: number): CellState {
  if (MARKED.has(index)) return "marked";
  if (UNVISITED.has(index)) return "unvisited";
  return "answered";
}

const STATE_CLASSES: Record<CellState, string> = {
  answered: "bg-primary text-white",
  marked: "bg-teal/20 text-teal-dark",
  unvisited: "bg-ink/5 text-muted",
};

export default function QuestionPalette() {
  const cells = Array.from({ length: CELL_COUNT }, (_, index) => index);

  return (
    <div className="relative w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-primary/15 blur-2xl"
      />

      <div className="relative rounded-3xl border border-ink/8 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold text-ink">Question Palette</span>
          <span className="rounded-full bg-cream px-3 py-1 font-display text-xs font-bold tabular-nums text-primary-dark">
            26 / 32
          </span>
        </div>
        <div className="mt-4 grid grid-cols-8 gap-1.5">
          {cells.map((index) => (
            <div
              key={index}
              className={`flex aspect-square items-center justify-center rounded-md text-[10px] font-bold tabular-nums ${STATE_CLASSES[stateFor(index)]}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Answered
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-dark" aria-hidden="true" />
            Marked
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink/15" aria-hidden="true" />
            Not visited
          </span>
        </div>
      </div>

      <div className="absolute -right-5 top-10 flex items-center gap-2 rounded-full border border-ink/8 bg-white px-3.5 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.10)]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal/15 text-xs text-teal" aria-hidden="true">
          &#9203;
        </span>
        <span className="font-display text-xs font-bold tabular-nums text-ink">45:00</span>
      </div>

      <div className="absolute -bottom-5 left-8 flex items-center gap-2 rounded-full border border-ink/8 bg-white px-3.5 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.10)]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs text-primary" aria-hidden="true">
          &#128274;
        </span>
        <span className="font-display text-xs font-bold text-ink">Answers Secure</span>
      </div>
    </div>
  );
}
