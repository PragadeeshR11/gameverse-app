import { FiTriangle } from 'react-icons/fi';
import { FaRegSquare, FaRegCircle, FaTimes } from 'react-icons/fa';

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

export const genres = [
  {
    id: '1',
    icon: FaTimes,
    title: 'Action',
    description: 'Fast-paced combat, intense mechanics, and adrenaline-driven gameplay.',
    img: './src/assets/gameImg/readyornot-action.jpg',
  },
  {
    id: '2',
    icon: FaRegSquare,
    title: 'Fantasy',
    description: 'Explore vast worlds, uncover stories, and embark on immersive journeys.',
    img: './src/assets/gameImg/eldenring.jpg',
  },
  {
    id: '3',
    icon: FaRegCircle,
    title: 'RPG',
    description: 'Character progression, deep narratives, and choice-driven experiences.',
    img: './src/assets/gameImg/cyberpunk2077.jpg',
  },
  {
    id: '4',
    icon: FiTriangle,
    title: 'Racing',
    description:
      'High-speed thrills, precision driving, and adrenaline-fueled competition on every track.',
    img: './src/assets/gameImg/nfs-racing.jpg',
  },
];
