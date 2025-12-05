import { ReviewsSection } from "@/lib/types";

type ReviewsProps = {
  data: ReviewsSection;
};

export default function Reviews({ data }: ReviewsProps) {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-5 md:px-6 bg-stone-50 border-y-2 border-stone-900">
      <div className="space-y-6 text-center">
        <p className="tracking-[0.35em] uppercase text-xs text-stone-600">Reviews</p>
        <h3 className="font-serif font-semibold tracking-wide text-3xl md:text-4xl text-stone-900">
          {data.title}
        </h3>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {data.items.map((review, index) => {
          const meta = [review.author, review.title, review.source].filter(Boolean).join(", ");

          return (
            <div
              key={`${review.author}-${index}`}
              className="flex flex-col gap-6 p-8 md:p-12 text-center border border-stone-200 bg-white"
            >
              <div className="text-stone-700 tracking-[0.35em] text-sm">
                {"★ ★ ★ ★ ★"}
              </div>
              <p className="font-serif italic text-[1.5rem] md:text-[1.8rem] leading-[1.65] text-stone-900">
                “{review.quote}”
              </p>
              <div className="text-[0.72rem] md:text-sm text-stone-600 tracking-[0.18em] uppercase leading-relaxed">
                {meta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

