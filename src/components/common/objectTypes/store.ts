import { Song } from "./playlist";

export type Store = {
  pin: string;
  usernames: string[];
  playlist: Song[];
  sessionName: string;
  apiCallsInProgress: number;
};
