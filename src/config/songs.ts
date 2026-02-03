export interface SongConfig {
  id: string;
  name: string;
  artist: string;
  spotifyUrl: string;
  recipient: string;
  manualLinks?: {
    appleMusic?: string;
    spotify?: string;
    youtube?: string;
  };
}

export const SONGS: SongConfig[] = [
  {
    id: '1',
    name: 'I Need You To Survive',
    artist: 'Hezekiah Walker',
    spotifyUrl: 'https://open.spotify.com/track/0ak22I3dEykeH8bwaWLg0k?si=7-m6M08HRk-XtU319BIAUQ',
    recipient: 'Sofiat',
  },
  {
    id: '2',
    name: 'Always Sisters',
    artist: 'CeCe Winans',
    spotifyUrl: 'https://open.spotify.com/track/0pUM8WiGTVa7XgM0lCndkZ?si=4febd2b2b91b4822',
    recipient: 'Special Guest',
  },
  {
    id: '3',
    name: 'Count On Me',
    artist: 'Whitney Houston & CeCe Winans',
    spotifyUrl: 'https://open.spotify.com/track/7mVV7fepIMUAE4FDyihupV?si=c744506ed397462e',
    recipient: 'Special Guest',
  },
  {
    id: '4',
    name: 'No Weapon',
    artist: 'Fred Hammond',
    spotifyUrl: 'https://open.spotify.com/track/4OK1XrubP6GJs4f6czk8Jg?si=3de00eaa6bec4c54',
    recipient: 'Special Guest',
  },
  {
    id: '5',
    name: 'Amen',
    artist: 'Timi Dakolo',
    spotifyUrl: 'https://open.spotify.com/track/3Scc4HtHuKB35zJmro4slF?si=6ebd88e734aa4b6e',
    recipient: 'Special Guest',
  },
  {
    id: '6',
    name: 'I Am Blessed',
    artist: 'Mr Vegas',
    spotifyUrl: 'https://open.spotify.com/track/1gpA7IZTNvrL6DUuc4qDPx?si=4ec6a50adad74170',
    recipient: 'Special Guest',
  },
  {
    id: '7',
    name: 'Congratulations',
    artist: 'Ada Ehi',
    spotifyUrl: 'https://open.spotify.com/track/1aNryETX3dSY4A0M8BIqPE?si=a9db20f5136f4f48',
    recipient: 'Phoebe',
  },
  {
    id: '8',
    name: 'No One Else',
    artist: 'LoveWorld Singers CEYC Airport City',
    spotifyUrl: 'https://youtu.be/BzddQg4W--Y',
    recipient: 'Special Guest',
    manualLinks: {
      appleMusic: 'https://music.apple.com/us/album/no-one-else-single/1622037494',
    },
  },
  {
    id: '9',
    name: 'Prayer Answering God',
    artist: 'Team Eternity Ghana ft. Vessel Chordrick',
    spotifyUrl: 'https://open.spotify.com/track/5jvWfZxsIv2tczKzvDm43m?si=bk-3l9MYRQ6gJTizIAu08w',
    recipient: 'Special Guest',
  },
  {
    id: '10',
    name: 'I Am',
    artist: 'Jason Nelson',
    spotifyUrl: 'https://open.spotify.com/track/7eQPdpUnjM3zDvQ8MQJyAf',
    recipient: 'Special Guest',
  },
];
