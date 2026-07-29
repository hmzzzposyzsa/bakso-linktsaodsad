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
      { id: 'Tiktok Utama', title: 'Tiktok Utama', icon: TikTokIcon, href: 'https://tiktok.com/@arduyyproject', accent: '#0ea5e9' },
      { id: 'Tiktok Info', title: 'Tiktok Info', icon: TikTokIcon, href: 'https://tiktok.com/@infoarduyy', accent: '#38bdf8' },
      { id: 'Tele Utama', title: 'Tele Utama', icon: TelegramIcon, href: 'https://t.me/@arduyyproject', accent: '#22d3ee' },
      { id: 'Ch Informasi', title: 'CH Tele (informasi)', icon: TelegramIcon, href: 'https://t.me/arduyyinfo', accent: '#7dd3fc' },
      { id: 'Ch Informasi', title: 'CH WA (informasi)', icon: WhatsAppIcon, href: 'https://whatsapp.com/channel/0029VaKJYEAFy72CR7FgKZ2c', accent: '#7dd3fc' },
    ],
  },
  {
    id: 'fm',
    label: 'FM',
    color: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a855f7',
    links: [
      { id: 'youtube', title: 'FM RU TELE', icon: TelegramIcon, href: 'https://t.me/+o1y2UcRgalc0NDll', accent: '#a78bfa' },
      { id: 'tiktok', title: 'FM RWTF TELE', icon: TelegramIcon, href: 'https://t.me/+6uZy9dI7anVjOGM9', accent: '#e879f9' },
      { id: 'discord', title: 'FM RWTF WA', icon: WhatsAppIcon, href: 'https://chat.whatsapp.com/FuuOGMKtVX2KUrQHAXLQha?s=cl&p=a&ilr=4&amv=0', accent: '#8b5cf6' },
    ],
  },
  {
    id: 'ft',
    label: 'FT CS',
    color: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a855f7',
    links: [
      { id: 'youtube', title: 'FT CS #1 (TELE)', icon: TelegramIcon, href: 'https://t.me/+d-ysYAQpYLA5NDY1', accent: '#a78bfa' },
      { id: 'discord', title: 'FT CS #1 (WA)', icon: WhatsAppIcon, href: 'https://chat.whatsapp.com/Im87vdaEdp03mfFz1mBgXs?s=cl&p=a&ilr=4&amv=0', accent: '#8b5cf6' },
    ],
  },
];

