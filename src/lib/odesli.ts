"use cache";

export interface OdesliResponse {
  entityUniqueId: string;
  userCountry: string;
  pageUrl: string;
  entitiesByUniqueId: Record<string, {
    id: string;
    type: string;
    title?: string;
    artistName?: string;
    thumbnailUrl?: string;
    thumbnailWidth?: number;
    thumbnailHeight?: number;
    apiProvider: string;
    platforms: string[];
  }>;
  linksByPlatform: Record<string, {
    country: string;
    url: string;
    entityUniqueId: string;
    nativeAppUriMobile?: string;
    nativeAppUriDesktop?: string;
  }>;
}

export async function getSongLinks(url: string): Promise<OdesliResponse> {
  const apiUrl = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(url)}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Odesli API error: ${response.statusText}`);
  }
  return response.json();
}
