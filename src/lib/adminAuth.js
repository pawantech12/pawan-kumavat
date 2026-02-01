import jwt from "jsonwebtoken";

export function verifyAdmin(req) {
  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== "admin") {
    throw new Error("Forbidden");
  }

  return decoded;
}
