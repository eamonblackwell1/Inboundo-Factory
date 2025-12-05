import { PricingSection } from "@/lib/types";

type PricingProps = {
  data: PricingSection;
};

export default function Pricing({ data }: PricingProps) {
  return (
    <section className="w-full max-w-2xl mx-auto py-20 px-6 bg-stone-50 border-y border-stone-800">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="tracking-[0.35em] uppercase text-xs text-stone-600">Pricing</p>
          <h3 className="font-serif font-semibold tracking-wide text-3xl text-stone-900">{data.title}</h3>
          {data.note && (
            <p className="text-sm text-stone-600 leading-relaxed mt-1">{data.note}</p>
          )}
        </div>

        <div className="space-y-4">
          {data.items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-start justify-between gap-6 border-b border-stone-200 pb-4 last:border-b-0"
            >
              <div className="space-y-1 min-w-0">
                <span className="font-serif font-semibold tracking-wide text-lg text-stone-900">{item.label}</span>
                {item.detail && (
                  <span className="block text-sm text-stone-500 leading-snug">{item.detail}</span>
                )}
              </div>
              <span className="font-mono text-base text-stone-900 whitespace-nowrap text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

