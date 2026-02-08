export interface SongConfig {
  id: string;
  name: string;
  artist: string;
  spotifyUrl: string;
  recipient: string;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
  note?: string;
  manualLinks?: {
    appleMusic?: string;
    spotify?: string;
    youtube?: string;
  };
}

const getGlobalNote = (name: string, includePS = true) => `Dear ${name},

As scripture says in Philippians 1:3, 
"I thank my God every time I remember you." 

I thank God for the privilege of doing life with you. 
I pray that the words of this song will be a blessing to you.

Love always,
Nana xxx${includePS ? `

P.S. As Nigerians will say, don’t fall my hand ooo. 
Till the wheels never fall off 🤞🏾🤟🏾` : ''}`;

const AUNTY_GIFTY_NOTE = `Dear Aunty Gifty,

As scripture says in Philippians 1:3, 
"I thank my God every time I remember you."

I thank God for the privilege of doing life with you. I pray that the words of this song will be a blessing to you.

Love always,
Nana xxx`;

export const SONGS: SongConfig[] = [
  {
    id: '1',
    name: 'I Need You To Survive',
    artist: 'Hezekiah Walker',
    spotifyUrl: 'https://open.spotify.com/track/0ak22I3dEykeH8bwaWLg0k?si=7-m6M08HRk-XtU319BIAUQ',
    recipient: 'Sofiat',
    image: '/images/sofiat.png',
    note: getGlobalNote('Sofiat'),
  },
  {
    id: '2',
    name: 'Ndum (My Life)',
    artist: 'Nathaniel Bassey',
    spotifyUrl: 'https://open.spotify.com/track/4rjIjPrpDPIu2W8wwSB9Do?si=vSNhm89cRKiEYsjW4CtrCg',
    recipient: 'Jessica',
    image: '/images/jessica.jpeg',
    note: getGlobalNote('Jessica'),
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
    name: 'Everything (Amen)',
    artist: 'Timi Dakolo',
    spotifyUrl: 'https://open.spotify.com/track/3Scc4HtHuKB35zJmro4slF?si=6ebd88e734aa4b6e',
    recipient: 'Antoinette',
    image: '/images/antoinette.jpeg',
    imagePosition: '50% 0%',
    imageScale: 1.5,
    note: getGlobalNote('Antoinette'),
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
    image: '/images/phoebe.png',
    note: getGlobalNote('Phoebe'),
  },
  {
    id: '8',
    name: 'Prayer Answering God',
    artist: 'Team Eternity Ghana ft. Vessel Chordrick',
    spotifyUrl: 'https://open.spotify.com/track/5jvWfZxsIv2tczKzvDm43m?si=bk-3l9MYRQ6gJTizIAu08w',
    recipient: 'Amanda',
    image: '/images/amanda.jpeg',
    note: getGlobalNote('Amanda'),
  },
  {
    id: '9',
    name: 'No One Else',
    artist: 'LoveWorld Singers CEYC Airport City',
    spotifyUrl: 'https://youtu.be/BzddQg4W--Y',
    recipient: 'Moni',
    image: '/images/moni.png',
    manualLinks: {
      appleMusic: 'https://music.apple.com/us/album/no-one-else-single/1622037494',
    },
    note: getGlobalNote('Moni'),
  },
  {
    id: '10',
    name: 'I Am',
    artist: 'Jason Nelson',
    spotifyUrl: 'https://open.spotify.com/track/7eQPdpUnjM3zDvQ8MQJyAf',
    recipient: 'Natalie',
    image: '/images/natalie.jpeg',
    note: getGlobalNote('Natalie'),
  },
  {
    id: '11',
    name: 'TBD',
    artist: 'Unknown',
    spotifyUrl: 'https://open.spotify.com/track/0ak22I3dEykeH8bwaWLg0k',
    recipient: 'Caroline',
    image: '/images/caroline.jpeg',
    note: getGlobalNote('Caroline'),
  },
  {
    id: '12',
    name: "While I'm Waiting",
    artist: 'Travis Greene',
    spotifyUrl: 'https://open.spotify.com/track/0xUE0pPfaap7pLtRJg0yTh',
    recipient: 'Mame',
    image: '/images/Mame.jpeg',
    note: getGlobalNote('Mame'),
  },
  {
    id: '13',
    name: 'TBD',
    artist: 'Unknown',
    spotifyUrl: 'https://open.spotify.com/track/0ak22I3dEykeH8bwaWLg0k',
    recipient: 'Yvette',
    image: '/images/Yvette.jpeg',
    imagePosition: '50% 0%',
    imageScale: 1.5,
    note: getGlobalNote('Yvette'),
  },
  {
    id: '14',
    name: 'TBD',
    artist: 'Unknown',
    spotifyUrl: 'https://youtu.be/IAfeJGgOBAo',
    recipient: 'Aunty Gifty',
    image: '/images/gifty.jpeg',
    imagePosition: '90% 70%',
    imageScale: 1.2,
    note: AUNTY_GIFTY_NOTE,
  },
];
