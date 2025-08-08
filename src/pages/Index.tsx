import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import MoodSelector from "@/components/mood/MoodSelector";
import SuggestionCard from "@/components/mood/SuggestionCard";
import BackgroundEmojis from "@/components/mood/BackgroundEmojis";
import { GENERAL_SUGGESTIONS, MOOD_SPECIFIC, Mood } from "@/components/mood/MoodData";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  useEffect(() => {
    // SEO
    const title = "Mood Improver – Cartoon Mood Booster";
    const description = "Pick your mood and get ridiculous ideas to feel better instantly.";
    document.title = title;

    const existingDesc = document.querySelector('meta[name="description"]');
    if (existingDesc) {
      existingDesc.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const existingCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalHref = window.location.origin + window.location.pathname;
    if (existingCanonical) {
      existingCanonical.href = canonicalHref;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalHref;
      document.head.appendChild(link);
    }
  }, []);

  const combinedForMood = useMemo(() => {
    const moodId = selectedMood?.id;
    const list = [
      ...(moodId ? MOOD_SPECIFIC[moodId] ?? [] : []),
      ...GENERAL_SUGGESTIONS,
    ];
    return list;
  }, [selectedMood]);

  const pickRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const speak = (text: string) => {
    try {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return; // keep it subtle
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.05;
      u.pitch = 1.5;
      u.lang = 'en-US';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) {
      // ignore speech errors
    }
  };

  const fireConfetti = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const end = Date.now() + 600;
    const colors = [
      getComputedStyle(document.documentElement).getPropertyValue('--primary'),
      getComputedStyle(document.documentElement).getPropertyValue('--fun-1'),
      getComputedStyle(document.documentElement).getPropertyValue('--fun-2'),
      getComputedStyle(document.documentElement).getPropertyValue('--fun-3'),
    ]
      .map((hsl) => `hsl(${hsl.trim()})`);

    (function frame() {
      confetti({ particleCount: 20, startVelocity: 35, spread: 60, origin: { y: 0.6 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const onMakeHappier = () => {
    if (!selectedMood) {
      toast("Pick a mood first! 😄");
      return;
    }
    const s = pickRandom(combinedForMood);
    setSuggestion(s);
    fireConfetti();
    speak(s);
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundEmojis />
      <header className="container py-10 md:py-14">
        <h1 className="text-4xl md:text-6xl font-extrabold gradient-text text-center">
          Mood Improver
        </h1>
        <p className="text-center mt-3 text-muted-foreground text-base md:text-lg animate-fade-in">
          Pick your mood. Get a ridiculous idea. Giggles guaranteed.
        </p>
      </header>

      <main className="container pb-24">
        <section className="mb-8 md:mb-12">
          <MoodSelector value={selectedMood} onChange={(m) => setSelectedMood(m)} />
        </section>

        <div className="flex justify-center mb-10 md:mb-14">
          <Button
            variant="hero"
            size="xl"
            className="hover-scale motion-safe:animate-pop"
            onClick={onMakeHappier}
            aria-label="Make Me Happier"
          >
            <Sparkles className="mr-2" /> Make Me Happier!
          </Button>
        </div>

        <section>
          <SuggestionCard suggestion={suggestion} />
        </section>
      </main>
    </div>
  );
};

export default Index;
