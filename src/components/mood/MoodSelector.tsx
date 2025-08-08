import { Button } from "@/components/ui/button";
import { MOODS, Mood } from "./MoodData";

interface MoodSelectorProps {
  value?: Mood | null;
  onChange: (mood: Mood) => void;
}

const MoodSelector = ({ value, onChange }: MoodSelectorProps) => {
  return (
    <section aria-label="Select your current mood" className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {MOODS.map((m) => {
          const selected = value?.id === m.id;
          return (
            <Button
              key={m.id}
              type="button"
              variant="secondary"
              size="lg"
              aria-pressed={selected}
              data-selected={selected}
              onClick={() => onChange(m)}
              className="hover-scale wiggle-on-hover justify-start py-4 px-4 data-[selected=true]:ring-2 data-[selected=true]:ring-primary data-[selected=true]:bg-accent/50"
            >
              <span className="text-3xl mr-3" aria-hidden>
                {m.emoji}
              </span>
              <span className="text-left">
                <span className="block font-semibold">{m.name}</span>
                <span className="block text-sm text-muted-foreground">{m.label}</span>
              </span>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default MoodSelector;
