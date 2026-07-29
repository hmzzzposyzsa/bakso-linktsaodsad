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
      { id: 'about', title: 'About Us', icon: InfoIcon, href: '#about', accent: '#0ea5e9' },
      { id: 'docs', title: 'Documentation', icon: BookIcon, href: '#docs', accent: '#38bdf8' },
      { id: 'email', title: 'Contact Email', icon: MailIcon, href: 'mailto:hello@arduyy.dev', accent: '#22d3ee' },
      { id: 'github', title: 'GitHub', icon: GitHubIcon, href: 'https://github.com/arduyyproject', accent: '#7dd3fc' },
      { id: 'website', title: 'Website', icon: GlobeIcon, href: 'https://arduyy.dev', accent: '#06b6d4' },
    ],
  },
  {
    id: 'fm',
    label: 'FM',
    color: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a855f7',
    links: [
      { id: 'youtube', title: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com/@arduyyproject', accent: '#a78bfa' },
      { id: 'tiktok', title: 'TikTok', icon: TikTokIcon, href: 'https://tiktok.com/@arduyyproject', accent: '#e879f9' },
      { id: 'discord', title: 'Discord', icon: DiscordIcon, href: 'https://discord.gg/arduyyproject', accent: '#8b5cf6' },
      { id: 'twitter', title: 'Twitter / X', icon: TwitterXIcon, href: 'https://x.com/arduyyproject', accent: '#c084fc' },
      { id: 'instagram', title: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/arduyyproject', accent: '#a855f7' },
      { id: 'telegram', title: 'Telegram', icon: TelegramIcon, href: 'https://t.me/arduyyproject', accent: '#93c5fd' },
      { id: 'whatsapp', title: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/000000000', accent: '#d8b4fe' },
    ],
  },
  {
    id: 'sawan',
    label: 'SAWAN',
    color: '#10b981',
    gradientFrom: '#10b981',
    gradientTo: '#34d399',
    links: [
      { id: 'location', title: 'Sawahan Location', icon: MapPinIcon, href: '#location', accent: '#10b981' },
      { id: 'store', title: 'Sawahan Store', icon: StoreIcon, href: '#store', accent: '#34d399' },
      { id: 'community', title: 'Sawahan Community', icon: UsersIcon, href: '#community', accent: '#6ee7b7' },
      { id: 'projects', title: 'Sawahan Projects', icon: FolderIcon, href: '#projects', accent: '#2dd4bf' },
    ],
  },
];

