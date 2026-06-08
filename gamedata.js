import { FiTriangle } from 'react-icons/fi';
import { FaRegSquare, FaRegCircle, FaTimes } from 'react-icons/fa';
import { MdGames } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { LuLink } from 'react-icons/lu';

export const exploreItems = [
  {
    title: 'Discover Worlds',
    description:
      'Dive into vast, cinematic universes filled with endless exploration, stunning environments, and unforgettable adventures across genres.',
    img: './public/gameImg/exploreimg1.png',
  },
  {
    title: 'Immersive Gameplay',
    description:
      'Experience fluid mechanics, intense action, and responsive controls that bring every moment to life with precision and depth.',
    img: './public/gameImg/exploreimg2.jpg',
  },
  {
    title: 'Next-Gen Experience',
    description:
      'Powered by modern design and seamless performance, enjoy a refined interface that elevates how you explore and interact with games.',
    img: './public/gameImg/exploreimg3.jpg',
  },
];

export const genres = [
  {
    id: '1',
    icon: FaTimes,
    title: 'Action',
    description: 'Fast-paced combat, intense mechanics, and adrenaline-driven gameplay.',
    img: './public/gameImg/readyornot-action.jpg',
    textclr: '#a61e4d33',
  },
  {
    id: '2',
    icon: FaRegSquare,
    title: 'Fantasy',
    description: 'Explore vast worlds, uncover stories, and embark on immersive journeys.',
    img: './public/gameImg/eldenring.jpg',
    textclr: '#6741d933',
  },

  {
    id: '3',
    icon: FaRegCircle,
    title: 'RPG',
    description: 'Character progression, deep narratives, and choice-driven experiences.',
    img: './public/gameImg/gta6-bike.jpg',
    textclr: '#f59f0033',
  },
  {
    id: '4',
    icon: FiTriangle,
    title: 'Racing',
    description:
      'High-speed thrills, precision driving, and adrenaline-fueled competition on every track.',
    img: './public/gameImg/nfs-racing.jpg',
    textclr: '#868e9633',
  },
  {
    id: '5',
    icon: MdGames,
    title: 'Explore Beyond Genres',
    description: 'Endless genres. Infinite experiences - with one subscription',
    img: './public/gameImg/psblue.png',
    textclr: '#364fc733',
  },
];

export const plans = [
  {
    name: 'Plus',
    description:
      'Upgrade your gaming experience with extended access, enhanced performance, and exclusive in-game perks across platforms.',
    monthly: 199,
    yearly: 1999,
    features: [
      'Access to 200+ games',
      'Cross-platform support',
      'Online multiplayer access',
      'Cloud save enabled',
      'Standard performance priority',
      'Exclusive in-game rewards',
      'Ad-free experience',
    ],
  },

  {
    name: 'Ultimate',
    description:
      'Unlock the full GameVerse experience with unlimited access, premium benefits, and priority features designed for serious gamers.',
    monthly: 399,
    yearly: 3999,
    features: [
      'Unlimited access to all games',
      'Cross-platform support',
      'Priority multiplayer matchmaking',
      'Advanced cloud saves & sync',
      'High-performance priority servers',
      'Exclusive early access to games',
      'Premium in-game rewards & skins',
      'Completely ad-free experience',
    ],
  },
];

export const masonary = [
  './public/masonary/masonary1.jpg',
  './public/masonary/masonary2.jpg',
  './public/masonary/masonary3.jpg',
  './public/masonary/masonary4.jpg',
  './public/masonary/masonary5.jpg',
  './public/masonary/masonary6.jpg',
  './public/masonary/masonary7.jpg',
  './public/masonary/masonary8.jpg',
  './public/masonary/masonary9.jpg',
  './public/masonary/masonary10.jpg',
  './public/masonary/masonary11.jpg',
  './public/masonary/masonary12.jpg',
  './public/masonary/masonary13.jpg',
  './public/masonary/masonary14.jpg',
  './public/masonary/masonary15.jpg',
  './public/masonary/masonary16.jpg',
  './public/masonary/masonary17.jpg',
  './public/masonary/masonary18.jpg',
];

export const socials = [
  {
    id: '1',
    icon: FaGithub,
    name: 'GitHub',
    link: 'https://github.com/PragadeeshR11/gameverse-app',
  },
  {
    id: '2',
    icon: FaLinkedin,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pragadeeshr/',
  },
  {
    id: '3',
    icon: FaFileDownload,
    name: 'Resume',
    link: '',
  },
  {
    id: '4',
    icon: LuLink,
    name: 'LiveProject - Gameverse',
    link: '/',
  },
];
