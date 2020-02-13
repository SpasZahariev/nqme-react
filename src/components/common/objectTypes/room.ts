import { Song } from "./song";

export type Room = {
  pin: string;
  usernames: string[];
  songs: Song[];
};
