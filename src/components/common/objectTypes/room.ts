import { Playlist } from "./playlist";

export type Room = {
  pin: string;
  usernames: string[];
  playlist: Playlist;
};
