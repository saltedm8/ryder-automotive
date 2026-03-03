import ImageWithFallback from "@/components/ImageWithFallback";

type SoldBikeCardProps = {
  year: string;
  make: string;
  model: string;
  image?: string;
};

export default function SoldBikeCard({ year, make, model, image }: SoldBikeCardProps) {
  return (
    <div className="bg-charcoal-900 border border-charcoal-800 overflow-hidden flex flex-col">
      {image && (
        <div className="relative aspect-[4/3] bg-charcoal-950">
          <ImageWithFallback
            src={image}
            alt={`${year} ${make} ${model}`}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-charcoal-700 text-charcoal-300 text-xs font-bold px-2 py-1 uppercase tracking-wider">
            Sold
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {!image && (
          <div className="flex items-center justify-between mb-3">
            <span className="bg-charcoal-700 text-charcoal-300 text-xs font-bold px-2 py-1 uppercase tracking-wider">
              Sold
            </span>
          </div>
        )}
        <span className="text-gold-500 text-xs font-semibold">{year}</span>
        <p className="text-gold-500 text-xs uppercase tracking-[0.15em] mb-1 mt-1" style={{ fontFamily: "var(--font-oswald)" }}>
          {make}
        </p>
        <h3 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>
          {model}
        </h3>
      </div>
    </div>
  );
}
