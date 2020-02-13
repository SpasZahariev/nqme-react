import { Song } from "./song";

export type Store = {
  pin: string;
  usernames: string[];
  songs: Song[];
  sessionName: string;
  apiCallsInProgress: number;
};
