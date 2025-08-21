export interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  audioUrl: string;
  instructor: string;
  benefits: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// Sample meditation data
export const meditations: Meditation[] = [
  {
    id: '1',
    title: 'Morning Zen Garden',
    description: 'Start your day with peaceful awareness and gentle breathing techniques inspired by traditional zen practices.',
    duration: '10 min',
    category: 'Morning',
    difficulty: 'Beginner',
    image: '/src/assets/meditation-1.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Sarah Chen',
    benefits: ['Reduces stress', 'Improves focus', 'Increases mindfulness', 'Calms the mind'],
    reviews: [
      {
        id: '1',
        userName: 'Emma R.',
        rating: 5,
        comment: 'Perfect way to start my morning. Very calming and peaceful.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userName: 'David K.',
        rating: 4,
        comment: 'Great meditation for beginners. Clear instructions.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    title: 'Ocean Waves Serenity',
    description: 'Immerse yourself in the calming sounds of ocean waves while practicing deep breathing and relaxation.',
    duration: '15 min',
    category: 'Relaxation',
    difficulty: 'Beginner',
    image: '/src/assets/meditation-2.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Michael Torres',
    benefits: ['Deep relaxation', 'Better sleep', 'Stress relief', 'Mental clarity'],
    reviews: [
      {
        id: '3',
        userName: 'Lisa M.',
        rating: 5,
        comment: 'The ocean sounds are so realistic. Helps me unwind after work.',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: '3',
    title: 'Mountain Peak Focus',
    description: 'Build concentration and mental clarity with this intermediate meditation set among majestic mountain peaks.',
    duration: '20 min',
    category: 'Focus',
    difficulty: 'Intermediate',
    image: '/src/assets/meditation-3.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Anna Thompson',
    benefits: ['Enhanced focus', 'Mental strength', 'Clarity of thought', 'Emotional balance'],
    reviews: [
      {
        id: '4',
        userName: 'James P.',
        rating: 4,
        comment: 'Challenging but rewarding. Really helps with concentration.',
        date: '2024-01-08'
      }
    ]
  },
  {
    id: '4',
    title: 'Forest Mindfulness',
    description: 'Connect with nature through this grounding meditation that brings the peace of the forest to your practice.',
    duration: '12 min',
    category: 'Nature',
    difficulty: 'Beginner',
    image: '/src/assets/meditation-4.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Robert Green',
    benefits: ['Nature connection', 'Grounding', 'Peace', 'Stress reduction'],
    reviews: [
      {
        id: '5',
        userName: 'Maria S.',
        rating: 5,
        comment: 'Makes me feel like I\'m actually in a peaceful forest.',
        date: '2024-01-14'
      }
    ]
  },
  {
    id: '5',
    title: 'Chakra Balancing',
    description: 'Align and balance your seven chakras with this guided visualization and energy meditation practice.',
    duration: '25 min',
    category: 'Spiritual',
    difficulty: 'Advanced',
    image: '/src/assets/meditation-5.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Priya Sharma',
    benefits: ['Energy balance', 'Spiritual growth', 'Inner harmony', 'Chakra alignment'],
    reviews: [
      {
        id: '6',
        userName: 'Alex B.',
        rating: 5,
        comment: 'Powerful meditation. I can really feel the energy shifts.',
        date: '2024-01-11'
      }
    ]
  },
  {
    id: '6',
    title: 'Starlight Dreams',
    description: 'Evening meditation under the starry sky to prepare your mind and body for restful, peaceful sleep.',
    duration: '18 min',
    category: 'Sleep',
    difficulty: 'Beginner',
    image: '/src/assets/meditation-6.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Luna Martinez',
    benefits: ['Better sleep', 'Relaxation', 'Dream clarity', 'Night peace'],
    reviews: [
      {
        id: '7',
        userName: 'Sophie W.',
        rating: 4,
        comment: 'Perfect bedtime meditation. Helps me fall asleep faster.',
        date: '2024-01-13'
      }
    ]
  },
  {
    id: '7',
    title: 'Zen Garden Harmony',
    description: 'Experience the timeless beauty of Japanese zen gardens in this contemplative mindfulness practice.',
    duration: '14 min',
    category: 'Mindfulness',
    difficulty: 'Intermediate',
    image: '/src/assets/meditation-7.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Kenji Yamamoto',
    benefits: ['Mindful awareness', 'Inner peace', 'Present moment', 'Zen principles'],
    reviews: [
      {
        id: '8',
        userName: 'Mark T.',
        rating: 5,
        comment: 'Beautiful meditation. The imagery is so vivid and peaceful.',
        date: '2024-01-09'
      }
    ]
  },
  {
    id: '8',
    title: 'Desert Stillness',
    description: 'Find profound peace in the vast silence of the desert while exploring the depths of your inner landscape.',
    duration: '22 min',
    category: 'Contemplative',
    difficulty: 'Advanced',
    image: '/src/assets/meditation-8.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'Amara Hassan',
    benefits: ['Deep stillness', 'Inner exploration', 'Profound peace', 'Spiritual insight'],
    reviews: [
      {
        id: '9',
        userName: 'Rachel L.',
        rating: 4,
        comment: 'Challenging but deeply transformative. Love the desert imagery.',
        date: '2024-01-07'
      }
    ]
  },
  {
    id: '9',
    title: 'Waterfall Renewal',
    description: 'Let the cleansing power of cascading water wash away stress and renew your spirit in this rejuvenating practice.',
    duration: '16 min',
    category: 'Renewal',
    difficulty: 'Intermediate',
    image: '/src/assets/meditation-9.jpg',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    instructor: 'River Stone',
    benefits: ['Renewal', 'Cleansing', 'Energy refresh', 'Emotional release'],
    reviews: [
      {
        id: '10',
        userName: 'Tom H.',
        rating: 5,
        comment: 'Incredibly refreshing. I feel renewed after each session.',
        date: '2024-01-06'
      }
    ]
  }
];

export const getMeditationById = (id: string): Meditation | undefined => {
  return meditations.find(meditation => meditation.id === id);
};

export const getMeditationsByCategory = (category: string): Meditation[] => {
  return meditations.filter(meditation => meditation.category === category);
};