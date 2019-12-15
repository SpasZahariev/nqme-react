import React from "react";
import Song from "./song";

type User = {
  ID: string;
  IP: string;
  nickname: string;
  songs: Song[];
  token: string;
};

export default User;
