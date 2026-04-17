// Cloudflare Pages Function — /api/click
// Receives WA CTA click beacons from index.html (same-origin) and forwards
// them to the Key Tours click logger on the agency-db VPS, which writes to
// /var/www/agency-db-sync/data/analytics.db (table: key_tours_clicks).
//
// Env vars (set in Cloudflare Pages → Settings → Environment variables):
//   KT_CLICKS_SECRET — shared secret required by the VPS endpoint
//
// VPS endpoint: http://clicks.keytours.guide:8083/clicks (A → 144.126.228.20)
// Hostname required: CF Pages Functions fetch() rejects raw-IP URLs with
// error 1003 ("direct IP access not allowed"). Porkbun A record bypasses it.
// VPS service:  key-tours-clicks.service (systemd)

const UPSTREAM = 'http://clicks.keytours.guide:8083/clicks';

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.text();
    const upstream = await fetch(UPSTREAM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-KT-Secret': env.KT_CLICKS_SECRET || '',
      },
      body,
    });
    const text = await upstream.text();
    return new Response(
      JSON.stringify({
        ok: upstream.ok,
        upstream_status: upstream.status,
        upstream_body: text.slice(0, 200),
        secret_present: Boolean(env.KT_CLICKS_SECRET),
      }),
      {
        status: upstream.ok ? 200 : 502,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, err: 'worker_error', msg: String(e && e.message || e) }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function onRequestGet() {
  return new Response(
    JSON.stringify({ ok: true, endpoint: 'key-tours-click-log' }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
