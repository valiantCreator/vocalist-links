import { notFound } from 'next/navigation';
import { getSongLinks } from '@/lib/odesli';
import { GlassLinkCard } from '@/components/GlassLinkCard';
import { Music2, Youtube, Apple, Disc } from 'lucide-react';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ id: string }>;
}

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  spotify: <Music2 className="h-6 w-6" />,
  youtube: <Youtube className="h-6 w-6" />,
  appleMusic: <Apple className="h-6 w-6" />,
  itunes: <Apple className="h-6 w-6" />,
};

const PLATFORM_NAMES: Record<string, string> = {
  spotify: 'Spotify',
  youtube: 'YouTube',
  appleMusic: 'Apple Music',
  itunes: 'iTunes',
};

export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default async function SongPage({ params }: PageProps) {
  const { id } = await params;
  
  // For MVP, we'll map ID 1 to the specific track provided
  const spotifyUrl = id === '1' 
    ? 'https://open.spotify.com/track/0ak22I3dEykeH8bwaWLg0k?si=7-m6M08HRk-XtU319BIAUQ'
    : null;

  if (!spotifyUrl) {
    return notFound();
  }

  let data;
  try {
    data = await getSongLinks(spotifyUrl);
  } catch (error) {
    console.error('Failed to fetch song links:', error);
    return notFound();
  }

  const identity = data.entitiesByUniqueId[data.entityUniqueId];
  const links = data.linksByPlatform;

  // Filter for key platforms
  const targetPlatforms = ['spotify', 'appleMusic', 'youtube'];
  const filteredLinks = Object.entries(links)
    .filter(([platform]) => targetPlatforms.includes(platform))
    .sort((a, b) => targetPlatforms.indexOf(a[0]) - targetPlatforms.indexOf(b[0]));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4 text-center">
          {identity?.thumbnailUrl && (
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20 shadow-2xl">
              <Image
                src={identity.thumbnailUrl}
                alt={identity.title || 'Album Art'}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tighter uppercase sm:text-4xl text-white">
              {identity?.title || 'Song Title'}
            </h1>
            <p className="text-lg font-medium tracking-tight text-white/60">
              {identity?.artistName || 'Artist Name'}
            </p>
          </div>
        </div>

        {/* Links Stack */}
        <div className="grid gap-3">
          {filteredLinks.map(([platform, link]) => {
            let finalUrl = link.url;
            if (platform === 'spotify') {
              // Deep link implementation
              const match = link.url.match(/track\/([a-zA-Z0-9]+)/);
              if (match) {
                finalUrl = `spotify:track:${match[1]}`;
              }
            }
            
            return (
              <GlassLinkCard
                key={platform}
                title={PLATFORM_NAMES[platform] || platform}
                subtitle={`Listen on ${PLATFORM_NAMES[platform] || platform}`}
                href={finalUrl}
                icon={PLATFORM_ICONS[platform] || <Disc />}
              />
            );
          })}
        </div>

        {/* Footer */}
        <p className="pt-8 text-center text-xs font-bold uppercase tracking-widest text-white/20">
          Vocalist Links &copy; 2026
        </p>
      </div>
    </main>
  );
}
