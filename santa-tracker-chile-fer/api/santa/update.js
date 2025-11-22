import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  const body = req.body;
  const filePath = path.join(process.cwd(), "api/santa/state.json");
  fs.writeFileSync(filePath, JSON.stringify(body, null, 2));
  res.status(200).json({ ok: true });
}
