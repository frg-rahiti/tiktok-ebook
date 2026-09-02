export default async function handler(req, res) {
  const r = await fetch('https://mtjwxqymywachtkavifd.supabase.co/functions/v1/bootstrap-ebooks');
  const text = await r.text();
  res.status(r.status).setHeader('Content-Type','application/json').send(text);
}
