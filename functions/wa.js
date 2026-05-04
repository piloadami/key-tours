// Cloudflare Pages Function — /wa
// Universal WhatsApp redirect with click logging.
// Use this URL anywhere a wa.me link would appear: PDFs, emails, IG bio, QR codes.
//
// Query params (all optional):
//   utm_source    — e.g. b2b-hostel-pdf, instagram, b2b-card
//   utm_medium    — e.g. whatsapp, qr, email
//   utm_campaign  — e.g. t1-group-tour
//   utm_content   — e.g. castelo-dos-tucanos (per-hostel slug)
//   gclid         — forwarded if present (Google Ads click)
//
// Env vars (same secret as /api/click):
//   KT_CLICKS_SECRET — shared secret for VPS endpoint

const UPSTREAM = 'http://clicks.keytours.guide:8083/clicks';
const WA_DEST  = 'https://wa.me/5521996763901?text=Ol%C3%A1%20Keyla%2C%20tenho%20interesse%20no%20passeio%20em%20grupo%20pelo%20Santa%20Teresa!';

async function logClick(request, env, url) {
  const p        = url.searchParams;
  const source   = p.get('utm_source')   || 'direct';
  const medium   = p.get('utm_medium')   || '';
  const campaign = p.get('utm_campaign') || '';
  const content  = p.get('utm_content')  || '';

  const path = ['/wa', medium, campaign, content].filter(Boolean).join('/');

  const payload = {
    ts:    new Date().toISOString(),
    source,
    path,
    gclid: p.get('gclid') || null,
    ua:    request.headers.get('user-agent')      || '',
    lang:  (request.headers.get('accept-language') || '').slice(0, 16),
    ref:   request.headers.get('referer')          || '',
  };

  try {
    await fetch(UPSTREAM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-KT-Secret': env.KT_CLICKS_SECRET || '',
      },
      body: JSON.stringify(payload),
    });
  } catch (_) {
    // Never block the redirect on a logging failure
  }
}

export async function onRequestGet({ request, env, ctx }) {
  const url = new URL(request.url);
  ctx.waitUntil(logClick(request, env, url));
  return Response.redirect(WA_DEST, 302);
}
