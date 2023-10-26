export default async function handler(req, res) {
  res.setHeader("Set-Cookie", "preloaderShown=true");
  res.status(200).end();
}
