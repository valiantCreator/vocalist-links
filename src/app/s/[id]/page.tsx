import { notFound } from 'next/navigation';
import { getSongLinks } from '@/lib/odesli';
import { GlassLinkCard } from '@/components/GlassLinkCard';
import { Music2, Youtube, Apple, Disc } from 'lucide-react';
import Image from 'next/image';
import { SONGS } from '@/config/songs';

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
  return SONGS.map((song) => ({ id: song.id }));
}

export default async function SongPage({ params }: PageProps) {
  const { id } = await params;
  
  const song = SONGS.find((s) => s.id === id);

  if (!song) {
    return notFound();
  }

  let data;
  try {
    data = await getSongLinks(song.spotifyUrl);
  } catch (error) {
    console.error('Failed to fetch song links:', error);
    return notFound();
  }

  const identity = data.entitiesByUniqueId[data.entityUniqueId];
  const links = data.linksByPlatform;

  // Merge manual links if they exist
  if (song.manualLinks) {
    if (song.manualLinks.appleMusic) {
      links['appleMusic'] = { 
        url: song.manualLinks.appleMusic, 
        country: 'US', 
        entityUniqueId: 'manual-override' 
      };
    }
    if (song.manualLinks.spotify) {
      links['spotify'] = { 
        url: song.manualLinks.spotify, 
        country: 'US', 
        entityUniqueId: 'manual-override' 
      };
    }
  }

  // Filter for key platforms
  const targetPlatforms = ['spotify', 'appleMusic', 'youtube'];
  const filteredLinks = Object.entries(links)
    .filter(([platform]) => targetPlatforms.includes(platform))
    .sort((a, b) => targetPlatforms.indexOf(a[0]) - targetPlatforms.indexOf(b[0]));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Recipient Avatar */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 active:scale-95">
            <Image
              src={song.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(song.recipient)}&background=111&color=fff&size=256&bold=true`}
              alt={song.recipient}
              fill
              priority
              className="object-cover object-[center_20%]"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Dedicated to
              </p>
              <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
                {song.recipient}
              </h2>
            </div>

            <div className="h-px w-12 bg-white/10 mx-auto" />

            <div className="space-y-1">
              <h1 className="text-xl font-bold tracking-tight text-white/90">
                {identity?.title || song.name}
              </h1>
              <p className="text-sm font-medium tracking-wide text-white/50">
                {identity?.artistName || song.artist}
              </p>
            </div>
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
        <p className="pt-8 pb-8 text-center font-[family-name:var(--font-caveat)] text-3xl font-medium tracking-wide text-white/90 relative">
          Nana's Super Sweet <span className="relative inline-block">
            16
            <span className="absolute top-[-0.6rem] right-[-1.0rem] rotate-[-10deg] text-[1.1rem] font-normal tracking-[-0.05em] text-pink-400 whitespace-nowrap">
              x2
            </span>
          </span>
        </p>
      </div>
    </main>
  );
}
