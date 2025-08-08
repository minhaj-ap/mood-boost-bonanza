export type Mood = {
  id: string;
  name: string; // short name
  label: string; // funny label
  emoji: string;
};

export const MOODS: Mood[] = [
  { id: "angry", name: "Angry", label: "Angry Potato", emoji: "😡" },
  { id: "sleepy", name: "Sleepy", label: "Sleepy Panda", emoji: "😴" },
  { id: "inlove", name: "In Love", label: "Love-Struck Llama", emoji: "😍" },
  { id: "anxious", name: "Anxious", label: "Anxious Octopus", emoji: "😰" },
  { id: "meh", name: "Meh", label: "Meh Sloth", emoji: "😐" },
  { id: "excited", name: "Excited", label: "Excited Squirrel", emoji: "🤩" },
  { id: "grumpy", name: "Grumpy", label: "Grumpy Cat", emoji: "🙀" },
  { id: "confused", name: "Confused", label: "Confused Duck", emoji: "🤪" },
];

export const GENERAL_SUGGESTIONS: string[] = [
  "Dress like a burrito and roll across the floor",
  "Teach your houseplant how to moonwalk",
  "Start a slow clap for yourself and commit",
  "Write a dramatic poem about a potato",
  "Attempt to high-five your shadow",
  "Invent a handshake with your left sock",
  "Give your fridge a motivational speech",
  "Make a tiny hat for a piece of fruit",
  "Politely challenge gravity to a duel",
  "Throw an awards ceremony for your favorite spoon",
  "Choreograph a dance for your eyebrows only",
  "Compose a love letter to your future snack",
];

export const MOOD_SPECIFIC: Record<string, string[]> = {
  angry: [
    "Growl at a cloud until it apologizes",
    "Have a staring contest with a doorknob",
    "Declare today ‘International Pillow Punching Day’",
  ],
  sleepy: [
    "Tuck yourself in with a motivational blanket speech",
    "Serenade your pillow with lullabies in whale sounds",
    "Nap like a majestic croissant on a sunny windowsill",
  ],
  inlove: [
    "Write a sonnet to the nearest sandwich",
    "Plan a picnic for you and your favorite chair",
    "Blow kisses at your reflection until it blushes",
  ],
  anxious: [
    "Politely schedule your worries for Tuesday at 3pm",
    "Wrap yourself in a blanket burrito and declare ‘safety mode’",
    "Do a tiny victory dance for existing (go you!)",
  ],
  meh: [
    "Give a motivational TED Talk to your toothbrush",
    "Rate every sock you own out of 10 for charisma",
    "Clap once very loudly and call it performance art",
  ],
  excited: [
    "Start a conga line with furniture (consent first)",
    "Announce a surprise party for your left thumb",
    "Invent a new sport called ‘Extreme Complimenting’",
  ],
  grumpy: [
    "Compose a diss track about Mondays",
    "Glare at a banana until it peels itself",
    "Write angsty poetry about lukewarm tea",
  ],
  confused: [
    "Ask a mirror for directions",
    "Hold a meeting to discuss why the chicken crossed the road",
    "Translate your thoughts into interpretive dance",
  ],
};

export const ILLUSTRATION_EMOJIS = [
  "🌯",
  "🪴",
  "🕺",
  "🎈",
  "🦄",
  "🪩",
  "🛼",
  "🍕",
  "🌟",
];
