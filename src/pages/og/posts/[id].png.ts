import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage } from '../../../lib/og-image';

export async function getStaticPaths() {
  const posts = await getCollection('posts');

  return posts.map((post) => ({
    params: { id: post.id },
    props: { title: post.data.minititle ?? post.data.title },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage({ eyebrow: '/posts', title: props.title as string });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
