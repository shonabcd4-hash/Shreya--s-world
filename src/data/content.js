import { content } from './data/content';

export const locationDetails = [
  { id: 'garden', name: 'The Welcome Garden', accent: 'from-mint to-emerald-100' },
  { id: 'friends', name: "The Little Friends' Corner", accent: 'from-lavender to-pink-100' },
  { id: 'memory', name: 'The Memory Tree', accent: 'from-amber-100 to-orange-100' },
  { id: 'story', name: 'The Storybook Path', accent: 'from-powder to-sky-100' },
  { id: 'letter', name: 'The Little Letter House', accent: 'from-blush to-rose-100' },
  { id: 'final', name: 'The Final Chapter', accent: 'from-slate-100 to-indigo-100' },
];

export const getLocationName = (id) => locationDetails.find((loc) => loc.id === id)?.name ?? 'World';

export const mutableContent = content;
