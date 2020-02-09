export type Playlist = {
  songs: Song[];
};

export enum Brand {
  YOUTUBE = "YOUTUBE",
  SPOTIFY = "SPOTIFY"
}

export type Song = {
  title: string;
  url: string;
  likes: number;
  username: string;
  company: Brand.YOUTUBE | Brand.SPOTIFY;
};
