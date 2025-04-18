export default function handler(req, res) {
  const cookies = req.headers.cookie || "";

  if (cookies.includes("role=admin")) {
    res.status(200).json({ flag: "crumble{y0u_g0t_th3_c00k13}" });
  } else {
    res.status(403).json({ error: "Access Denied" });
  }
}
  
