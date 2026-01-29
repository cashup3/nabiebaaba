import crypto from "crypto";

const DEFAULT_TTL_HOURS = 24;

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function getTtlSeconds() {
  const ttlHours = Number(process.env.ADMIN_SESSION_TTL_HOURS || DEFAULT_TTL_HOURS);
  if (Number.isNaN(ttlHours) || ttlHours <= 0) {
    return DEFAULT_TTL_HOURS * 60 * 60;
  }
  return ttlHours * 60 * 60;
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken() {
  const payload = JSON.stringify({
    ts: Date.now(),
    nonce: crypto.randomBytes(16).toString("hex"),
  });
  const encoded = Buffer.from(payload).toString("base64url");
  return `${encoded}.${sign(encoded)}`;
}

export function verifySessionToken(token) {
  if (!token || !getSecret()) return false;
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return false;
  if (sign(encoded) !== signature) return false;

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    const ttlMs = getTtlSeconds() * 1000;
    return Date.now() - payload.ts < ttlMs;
  } catch {
    return false;
  }
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: getTtlSeconds(),
  };
}
