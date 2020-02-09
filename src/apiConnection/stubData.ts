import { Playlist, Brand, Song } from "components/common/objectTypes/playlist";
import { Room } from "components/common/objectTypes/room";

//temporary
export const stubPlaylist: Playlist = {
  songs: [
    {
      title: "title1",
      url: "url1",
      likes: 0,
      username: "spas1",
      company: Brand.YOUTUBE
    },
    {
      title: "title2",
      url: "url2",
      likes: 1,
      username: "spas2",
      company: Brand.SPOTIFY
    }
  ]
};

//temporary
export const stubCreateRoom: Room = {
  pin: String(Math.floor(Math.random() * 10000 + 1)),
  usernames: ["Spas", "Mark Antonie", "doe", "Jane", "dog", "cat"],
  playlist: stubPlaylist
};

export const getSongQueue = [
  {
    name: "The Score - Born For This (Audio)",
    likes: 7
  },
  {
    name: "You Me At Six - Fast Forward (Official Audio)",
    likes: 2
  }
];

export const getSearchResults = [
  {
    link:
      "https://www.youtube.com/watch?v=aJ5IzGBnWAc&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=4&t=0s",
    name: "The Score - Born For This (Audio)",
    corporation: "Youtube"
  },
  {
    link:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    name: "grandson - Thoughts and Prayers (Official Audio)",
    corporation: "Youtube"
  },
  {
    link:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    name: "You Me At Six - Fast Forward (Official Audio)",
    corporation: "Youtube"
  },
  {
    link:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    name: "blackbear - hot girl bummer low budget video",
    corporation: "Youtube"
  },
  {
    link:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    name:
      "The Girl from Ipanema - Stan Getz & Astrud Gilberto (cover by Elise)",
    corporation: "Youtube"
  }
];

export const getUsernames = [
  "Spas",
  "Mark Antonie",
  "doe",
  "Jane",
  "dog",
  "cat"
];
