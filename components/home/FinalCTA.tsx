import Button from "@/components/ui/Button";
import { APP_URLS } from "@/lib/urls";

export default function FinalCTA() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center">
        <div
          aria-hidden="true"
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-14 -right-8 h-48 w-48 rounded-full bg-white/10"
        />
        <div className="relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Start Practising Today. It&#x2019;s Free.
          </h2>
          <p className="mt-4 text-lg text-white/85">
            No credit card needed. Start with 3 free full papers.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={APP_URLS.register} external variant="white" size="lg">
              Register Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
