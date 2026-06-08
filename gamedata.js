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
    img: '/gameImg/exploreimg1.png',
  },
  {
    title: 'Immersive Gameplay',
    description:
      'Experience fluid mechanics, intense action, and responsive controls that bring every moment to life with precision and depth.',
    img: '/gameImg/exploreimg2.jpg',
  },
  {
    title: 'Next-Gen Experience',
    description:
      'Powered by modern design and seamless performance, enjoy a refined interface that elevates how you explore and interact with games.',
    img: '/gameImg/exploreimg3.jpg',
  },
];

export const genres = [
  {
    id: '1',
    icon: FaTimes,
    title: 'Action',
    description: 'Fast-paced combat, intense mechanics, and adrenaline-driven gameplay.',
    img: '/gameImg/readyornot-action.jpg',
    textclr: '#a61e4d33',
  },
  {
    id: '2',
    icon: FaRegSquare,
    title: 'Fantasy',
    description: 'Explore vast worlds, uncover stories, and embark on immersive journeys.',
    img: '/gameImg/eldenring.jpg',
    textclr: '#6741d933',
  },

  {
    id: '3',
    icon: FaRegCircle,
    title: 'RPG',
    description: 'Character progression, deep narratives, and choice-driven experiences.',
    img: '/gameImg/gta6-bike.jpg',
    textclr: '#f59f0033',
  },
  {
    id: '4',
    icon: FiTriangle,
    title: 'Racing',
    description:
      'High-speed thrills, precision driving, and adrenaline-fueled competition on every track.',
    img: '/gameImg/nfs-racing.jpg',
    textclr: '#868e9633',
  },
  {
    id: '5',
    icon: MdGames,
    title: 'Explore Beyond Genres',
    description: 'Endless genres. Infinite experiences - with one subscription',
    img: '/gameImg/psblue.png',
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
  '/masonary/masonary1.jpg',
  '/masonary/masonary2.jpg',
  '/masonary/masonary3.jpg',
  '/masonary/masonary4.jpg',
  '/masonary/masonary5.jpg',
  '/masonary/masonary6.jpg',
  '/masonary/masonary7.jpg',
  '/masonary/masonary8.jpg',
  '/masonary/masonary9.jpg',
  '/masonary/masonary10.jpg',
  '/masonary/masonary11.jpg',
  '/masonary/masonary12.jpg',
  '/masonary/masonary13.jpg',
  '/masonary/masonary14.jpg',
  '/masonary/masonary15.jpg',
  '/masonary/masonary16.jpg',
  '/masonary/masonary17.jpg',
  '/masonary/masonary18.jpg',
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
    link: '/resume/Pragadeesh_R_React_Developer_Resume.pdf',
  },
  {
    id: '4',
    icon: LuLink,
    name: 'LiveProject - Gameverse',
    link: '/',
  },
];
