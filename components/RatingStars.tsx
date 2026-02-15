interface RatingStarsProps {
  rating: number;
}

export function RatingStars({ rating }: RatingStarsProps) {
  const filled = Math.round(rating);

  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < filled ? 'text-amber-400' : 'text-slate-300'}>
          ★
        </span>
      ))}
      <span className="ml-2 text-sm font-medium text-slate-600">{rating.toFixed(1)}</span>
    </div>
  );
}
