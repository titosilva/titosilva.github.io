import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage } from '../../../lib/og-image';

export async function getStaticPaths() {
  const books = (await getCollection('books')).filter((book) => book.data.hasPage);

  return books.map((book) => ({
    params: { id: book.id },
    props: { title: book.data.minititle ?? book.data.title },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage({ eyebrow: '/reading', title: props.title as string });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
