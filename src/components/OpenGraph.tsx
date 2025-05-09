import { Metadata } from 'next';

interface OpenGraphMetadata {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  locale?: string;
  type?: 'article' | 'website' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
}

export function generateOpenGraph(props: OpenGraphMetadata): Metadata['openGraph'] {
  return {
    title: props.title ?? 'Golden Gate Software Solutions',
    description: props.description ?? 'Professional web development and software solutions based in San Francisco',
    url: props.url ?? 'https://goldengatesoftwaresolutions.com',
    siteName: props.siteName ?? 'Golden Gate Software Solutions',
    images: props.images ?? [
      {
        url: 'https://goldengatesoftwaresolutions.com/ggss_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Golden Gate Software Solutions',
      }
    ],
    locale: props.locale ?? 'en_US',
    type: props.type ?? 'website',
  };
}