import Button from "@/components/ui/Button";
import QuestionPalette from "@/components/home/QuestionPalette";
import { APP_URLS } from "@/lib/urls";

export default function Hero() {
  return (
    <section className="mesh-gradient">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 text-center sm:px-6 md:pt-20 lg:grid-cols-2 lg:text-left lg:px-8">
        <div className="flex flex-col items-center lg:items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-xs font-bold text-teal-dark shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-dark" aria-hidden="true" />
            Maharashtra&#x2019;s #1 MHT CET Simulator
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[54px]">
            Practise MHT CET Like It&#x2019;s <span className="text-teal-dark">the Real Exam</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            16,000+ past year questions. Authentic exam interface. Deep
            analytics. Know exactly what to study next.
          </p>
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row">
            <Button href={APP_URLS.register} external size="lg">
              Register Free
            </Button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-3 font-display text-sm font-bold text-ink hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
                &#9654;
              </span>
              See How It Works
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
            <span className="flex -space-x-2">
              {["A", "R", "S"].map((initial, index) => (
                <span
                  key={initial}
                  style={{ zIndex: 3 - index }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-teal/20 text-[11px] font-bold text-teal-dark"
                >
                  {initial}
                </span>
              ))}
            </span>
            <span className="font-display text-xs font-bold text-ink">
              Students already practising for MHT CET 2027
            </span>
          </div>
        </div>

        <div className="flex justify-center pt-6 lg:pt-0">
          <QuestionPalette />
        </div>
      </div>
    </section>
  );
}
