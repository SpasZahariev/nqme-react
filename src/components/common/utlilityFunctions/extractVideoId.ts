export default function extractVideoId(url: string) {
  // https://www.youtube.com/watch?v=ZWq_GMSO4rk
  const idIndex = url.indexOf("watch?v=") + 8;
  return url.substring(idIndex);
}
