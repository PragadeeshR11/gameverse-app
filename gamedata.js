import { FiTriangle } from 'react-icons/fi';
import { FaRegSquare, FaRegCircle, FaTimes } from 'react-icons/fa';
import { MdGames } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { LuLink } from 'react-icons/lu';

export const games = [
  {
    id: '1',
    title: 'CyberPunk2077',
    img: './src/assets/gameImg/cyberpunk2077.jpg',
    year: '2020',
  },
  {
    id: '2',
    title: 'WWE 2K26',
    img: './src/assets/gameImg/2k26.jpg',
    year: '2026',
  },
  {
    id: '3',
    title: "Assassin's Creed : Shadows",
    img: './src/assets/gameImg/acshadows.jpg',
    year: '2025',
  },
  {
    id: '4',
    title: 'CallofDuty : BO7',
    img: './src/assets/gameImg/cod.jpg',
    year: '2026',
  },
  {
    id: '5',
    title: 'EldenRing',
    img: './src/assets/gameImg/eldenring.jpg',
    year: '2022',
  },
  {
    id: '6',
    title: 'ResidentEvil : Requiem',
    img: './src/assets/gameImg/residentevilrequiem.jpg',
    year: '2026',
  },
  {
    id: '7',
    title: 'GTA 6',
    img: './src/assets/gameImg/gta6.jpg',
    year: 'Comming Soon',
  },
  {
    id: '8',
    title: 'HitMan',
    img: './src/assets/gameImg/hitman.jpg',
    year: '2023',
  },
  {
    id: '9',
    title: 'NFS : Unbound',
    img: './src/assets/gameImg/nfs.jpg',
    year: '2022',
  },
];

export const exploreItems = [
  {
    title: 'Discover Worlds',
    description:
      'Dive into vast, cinematic universes filled with endless exploration, stunning environments, and unforgettable adventures across genres.',
    img: './src/assets/gameImg/exploreimg1.png',
  },
  {
    title: 'Immersive Gameplay',
    description:
      'Experience fluid mechanics, intense action, and responsive controls that bring every moment to life with precision and depth.',
    img: './src/assets/gameImg/exploreimg2.jpg',
  },
  {
    title: 'Next-Gen Experience',
    description:
      'Powered by modern design and seamless performance, enjoy a refined interface that elevates how you explore and interact with games.',
    img: './src/assets/gameImg/exploreimg3.jpg',
  },
];
// import { LuTriangle } from 'react-icons/lu';

export const genres = [
  {
    id: '1',
    icon: FaTimes,
    title: 'Action',
    description: 'Fast-paced combat, intense mechanics, and adrenaline-driven gameplay.',
    img: './src/assets/gameImg/readyornot-action.jpg',
    textclr: '#a61e4d33',
  },
  {
    id: '2',
    icon: FaRegSquare,
    title: 'Fantasy',
    description: 'Explore vast worlds, uncover stories, and embark on immersive journeys.',
    img: './src/assets/gameImg/eldenring.jpg',
    textclr: '#6741d933',
  },

  {
    id: '3',
    icon: FaRegCircle,
    title: 'RPG',
    description: 'Character progression, deep narratives, and choice-driven experiences.',
    img: './src/assets/gameImg/gta6-bike.jpg',
    textclr: '#f59f0033',
  },
  {
    id: '4',
    icon: FiTriangle,
    title: 'Racing',
    description:
      'High-speed thrills, precision driving, and adrenaline-fueled competition on every track.',
    img: './src/assets/gameImg/nfs-racing.jpg',
    textclr: '#868e9633',
  },
  {
    id: '5',
    icon: MdGames,
    title: 'Explore Beyond Genres',
    description: 'Endless genres. Infinite experiences - with one subscription',
    img: './src/assets/gameImg/psblue.png',
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
  './src/assets/masonary/masonary1.jpg',
  './src/assets/masonary/masonary2.jpg',
  './src/assets/masonary/masonary3.jpg',
  './src/assets/masonary/masonary4.jpg',
  './src/assets/masonary/masonary5.jpg',
  './src/assets/masonary/masonary6.jpg',
  './src/assets/masonary/masonary7.jpg',
  './src/assets/masonary/masonary8.jpg',
  './src/assets/masonary/masonary9.jpg',
  './src/assets/masonary/masonary10.jpg',
  './src/assets/masonary/masonary11.jpg',
  './src/assets/masonary/masonary12.jpg',
  './src/assets/masonary/masonary13.jpg',
  './src/assets/masonary/masonary14.jpg',
  './src/assets/masonary/masonary15.jpg',
];

export const socials = [
  {
    id: '1',
    icon: FaGithub,
    name: 'GitHub',
    link: '',
  },
  {
    id: '2',
    icon: FaLinkedin,
    name: 'LinkedIn',
    link: '',
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
