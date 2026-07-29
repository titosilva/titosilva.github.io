import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const fontsDir = path.join(process.cwd(), 'src/assets/fonts');

const fontRegular = fs.readFileSync(path.join(fontsDir, 'VendSans-Regular.ttf'));
const fontSemiBold = fs.readFileSync(path.join(fontsDir, 'VendSans-SemiBold.ttf'));
const fontBold = fs.readFileSync(path.join(fontsDir, 'VendSans-Bold.ttf'));

const WIDTH = 1200;
const HEIGHT = 630;

const COLORS = {
  bg: '#1a1c1d',
  primary: '#1CBBEA',
  gray: '#9CA3AF',
};

// Longer titles need a smaller font so they still fit within the fixed 1200x630 canvas.
function titleFontSize(title: string) {
  if (title.length > 70) return 44;
  if (title.length > 45) return 54;
  return 64;
}

export interface OgImageOptions {
  eyebrow: string;
  title: string;
}

export async function renderOgImage({ eyebrow, title }: OgImageOptions): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: WIDTH,
          height: HEIGHT,
          padding: '72px',
          backgroundColor: COLORS.bg,
          fontFamily: 'Vend Sans',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 20 },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: 14,
                      backgroundColor: COLORS.primary,
                      color: COLORS.bg,
                      fontSize: 32,
                      fontWeight: 700,
                    },
                    children: 'TS',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: 30, fontWeight: 600, color: COLORS.primary },
                    children: "Tito Silva's Blog",
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: 18 },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: 26, fontWeight: 600, color: COLORS.primary },
                    children: eyebrow,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: titleFontSize(title),
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.2,
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', fontSize: 22, fontWeight: 400, color: COLORS.gray },
              children: 'titosilva.github.io',
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: 'Vend Sans', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Vend Sans', data: fontSemiBold, weight: 600, style: 'normal' },
        { name: 'Vend Sans', data: fontBold, weight: 700, style: 'normal' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } });
  return resvg.render().asPng();
}
