export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const summary = "Bruttolohn: 83'500 CHF erkannt. AHV-Nr. ebenfalls gefunden.";
  const data = {
    bruttolohn: 83500,
    ahv: "756.XXXX.XXXX.XX",
    arbeitgeber: "Beispiel AG",
    jahr: 2024,
    kanton: "ZH"
  };
  res.status(200).json({ summary, data });
}
