export default function handler(req, res) {
    const cookies = req.headers.cookie || "";
  
    if (cookies.includes("role=admin")) {
      res.status(200).json({ flag: "THM{CruMBLE_C00kieSsss}" });
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  }
  