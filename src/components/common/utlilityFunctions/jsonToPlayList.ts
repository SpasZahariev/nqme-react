import { Song, Brand } from "../objectTypes/song";

export default function jsonToPlaylist(data: any): Song[] {
  return data.map((entry: any) => {
    return {
      title: entry.title,
      url: entry.url,
      likes: parseInt(entry.likes),
      username: entry.username,
      company: entry.company === "YOUTUBE" ? Brand.YOUTUBE : Brand.SPOTIFY
    };
  });
}
