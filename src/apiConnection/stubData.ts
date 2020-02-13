import { Brand, Song } from "components/common/objectTypes/song";
import { Room } from "components/common/objectTypes/room";

//temporary
export const stubSongs: Song[] = [
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
];

//temporary
export const stubCreateRoom: Room = {
  pin: String(Math.floor(Math.random() * 10000 + 1)),
  usernames: ["Spas", "Mark Antonie", "doe", "Jane", "dog", "cat"],
  songs: stubSongs
};

export const getSongQueue = () => [
  {
    title: "The Score - Born For This (Audio)",
    likes: 7,
    hexColor: "FFFFFF"
  },
  {
    title: "You Me At Six - Fast Forward (Official Audio)",
    likes: 2,
    hexColor: "000000"
  }
];

export const getSearchResults = () => [
  {
    url:
      "https://www.youtube.com/watch?v=aJ5IzGBnWAc&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=4&t=0s",
    title: "The Score - Born For This (Audio)",
    company: "Youtube"
  },
  {
    url:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    title: "grandson - Thoughts and Prayers (Official Audio)",
    company: "Youtube"
  },
  {
    url:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    title: "You Me At Six - Fast Forward (Official Audio)",
    company: "Youtube"
  },
  {
    url:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    title: "blackbear - hot girl bummer low budget video",
    company: "Youtube"
  },
  {
    url:
      "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
    title:
      "The Girl from Ipanema - Stan Getz & Astrud Gilberto (cover by Elise)",
    company: "Youtube"
  }
];

export const getUsernames = () => [
  "Spas",
  "Mark Antonie",
  "doe",
  "Jane",
  "dog",
  "cat"
];
