import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage } from '../../../lib/og-image';

export async function getStaticPaths() {
  const poems = await getCollection('poems');

  return poems.map((poem) => ({
    params: { id: poem.id },
    props: { title: poem.data.minititle ?? poem.data.title },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage({ eyebrow: '/poetry', title: props.title as string });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
