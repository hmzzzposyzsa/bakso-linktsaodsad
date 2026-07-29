import {
  GitHubIcon,
  YouTubeIcon,
  DiscordIcon,
  TwitterXIcon,
  InstagramIcon,
  WhatsAppIcon,
  TikTokIcon,
  TelegramIcon,
  BookIcon,
  InfoIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  StoreIcon,
  UsersIcon,
  FolderIcon,
} from '../icons/Icons';

// Each tab is a "category". Each category owns a color pair used to theme
// the whole page (blob, gradient title, underline, glows, card accents)
// while that tab is active.
export const categories = [
  {
    id: 'info',
    label: 'INFO',
    color: '#0ea5e9',
    gradientFrom: '#0ea5e9',
    gradientTo: '#06b6d4',
    links: [
      { id: 'Tiktok Utama', title: 'Tiktok Utama', icon: TikTokIcon, href: '#about', accent: '#0ea5e9' },
      { id: 'Tiktok Info', title: 'Tiktok Info', icon: TikTokIcon, href: '#docs', accent: '#38bdf8' },
      { id: 'Tele Utama', title: 'Tele Utama', icon: TelegramIcon, href: 'mailto:hello@arduyy.dev', accent: '#22d3ee' },
      { id: 'Ch Tele Informasi', title: 'CH Tele (informasi)', icon: TelegramIcon, href: 'https://github.com/arduyyproject', accent: '#7dd3fc' },
    ],
  },
  {
    id: 'fm',
    label: 'FM',
    color: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a855f7',
    links: [
      { id: 'youtube', title: 'FM RU TELE', icon: TelegramIcon, href: 'https://youtube.com/@arduyyproject', accent: '#a78bfa' },
      { id: 'tiktok', title: 'FM RWTF TELE', icon: TelegramIcon, href: 'https://tiktok.com/@arduyyproject', accent: '#e879f9' },
      { id: 'discord', title: 'FM RWTF WA', icon: WhatsAppIcon, href: 'https://discord.gg/arduyyproject', accent: '#8b5cf6' },
    ],
  },
  {
    id: 'sawan',
    label: 'SAWAN',
    color: '#10b981',
    gradientFrom: '#10b981',
    gradientTo: '#34d399',
    links: [
      { id: 'location', title: 'GB SAWAHAN', icon: WhatsAppIcon, href: '#location', accent: '#10b981' },
    ],
  },
  {
    id: 'ft',
    label: 'FT CS',
    color: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a855f7',
    links: [
      { id: 'youtube', title: 'FT CS #1 (TELE)', icon: TelegramIcon, href: 'https://youtube.com/@arduyyproject', accent: '#a78bfa' },
      { id: 'discord', title: 'FT CS #1 (WA)', icon: WhatsAppIcon, href: 'https://discord.gg/arduyyproject', accent: '#8b5cf6' },
    ],
  },
];

