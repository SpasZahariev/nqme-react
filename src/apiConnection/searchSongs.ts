import { Song, Brand } from "../components/common/objectTypes/song";
import { YOUTUBE_API_KEY } from "../config.json";
import youtubeSearch from "youtube-search";

const YOUTUBE_OPTIONS: youtubeSearch.YouTubeSearchOptions = {
  maxResults: 4,
  key: YOUTUBE_API_KEY,
  type: "video"
};

export default async function searchSongs(word: string) {
  let entries: Song[] = [];

  // youtubeSearch(word, YOUTUBE_OPTIONS, (err, results) => {
  youtubeSearch(word, YOUTUBE_OPTIONS)
    .then(data =>
      data.results.map(result =>
        entries.push({
          title: result.title,
          url: result.link,
          likes: 0,
          username: "",
          company: Brand.YOUTUBE
        })
      )
    )
    .catch(error => console.log(error));

  //TODO - append spotify results
  console.log("Youtube search came back with stuff", entries);
  return entries;
  // data.results.map(result =>
  //   entries.push({
  //     title: result.title,
  //     url: result.link,
  //     likes: 0,
  //     username: "",
  //     company: Brand.YOUTUBE
  //   }))
  // {

  //   searchYouTube(
  //     {
  //       key: YOUTUBE_API_KEY,
  //       term: word,
  //       maxResults: 5
  //     },
  //     videos => {
  //       for (var video of videos) {
  //         entries.push({
  //           time: 0,
  //           url: video.id.videoId,
  //           name: video.snippet.title
  //         });
  //       }

  //       this.setState({ results: entries });
  //     }
  //   );

  //   if (this.props.cookies.get("SpotifySearchToken")) {
  //     var tracks = await spotifyApi.searchTracks(word, { limit: 6 });
  //     for (var track of tracks.body.tracks.items) {
  //       entries.push({
  //         name: track.artists[0].name + " - " + track.name,
  //         url: track.uri,
  //         time: track.duration_ms
  //       });
  //     }
  //   }
}

/*
0:
id: "T7K0pZ9tGi4"
link: "https://www.youtube.com/watch?v=T7K0pZ9tGi4"
kind: "youtube#video"
publishedAt: "2016-12-21T15:00:02.000Z"
channelId: "UCa10nxShhzNrCE1o2ZOPztg"
channelTitle: "Trap Nation"
title: "Two Feet - Go F*ck Yourself"
description: "Download Link ↪︎https://soundcloud.com/twofeetmusic/two-feet-go-fuck-yourself Instagram: https://instagram.com/benz Limited Two Feet vinyl now available: ..."
thumbnails:
default: {url: "https://i.ytimg.com/vi/T7K0pZ9tGi4/default.jpg", width: 120, height: 90}
medium: {url: "https://i.ytimg.com/vi/T7K0pZ9tGi4/mqdefault.jpg", width: 320, height: 180}
high: {url: "https://i.ytimg.com/vi/T7K0pZ9tGi4/hqdefault.jpg", width: 480, height: 360}
*/
