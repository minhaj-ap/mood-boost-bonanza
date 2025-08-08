import { ILLUSTRATION_EMOJIS } from "./MoodData";

interface SuggestionCardProps {
  suggestion?: string | null;
}

const pickEmoji = () =>
  ILLUSTRATION_EMOJIS[Math.floor(Math.random() * ILLUSTRATION_EMOJIS.length)];

const SuggestionCard = ({ suggestion }: SuggestionCardProps) => {
  if (!suggestion) return null;
  const emoji = pickEmoji();
  return (
    <article
      className="fun-card p-6 md:p-8 animate-pop"
      aria-live="polite"
      role="status"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div className="text-5xl md:text-6xl animate-float" aria-hidden>
          {emoji}
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold gradient-text mb-2">
            Ridiculous Idea
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">{suggestion}</p>
        </div>
      </div>
    </article>
  );
};

export default SuggestionCard;
