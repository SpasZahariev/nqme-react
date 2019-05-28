import React from "react";
import User from "./user";
import Song from "./song";

type Room = {
  MasterCookie: string;
  SpotifySearchToken: string;
  YoutubeSearchToken: string;
  _id: string;
  blocked_members: User[];
  head: Song;
  history: Song[];
  master: {};
  queue: Song[];
  users: User[];
};

export default Room;
