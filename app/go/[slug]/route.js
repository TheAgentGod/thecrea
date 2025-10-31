import { NextResponse } from 'next/server';
import { slugToEnvVar } from '../../../lib/links';

export const runtime = 'edge';

export async function GET(request, { params }) {
  const slug = params.slug;
  const envVar = slugToEnvVar[slug];
  if (!envVar) return new Response('Not found', { status: 404 });
  const url = process.env[envVar];
  if (!url) return new Response(`Missing env var ${envVar}`, { status: 500 });
  return NextResponse.redirect(url, 302);
}
