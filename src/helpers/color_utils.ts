import p5, { Color } from 'p5';

export function complement(p: p5, color: Color): [Color, Color] {
    const hue = p.hue(color);
    const sat = p.saturation(color);
    const brightness = p.brightness(color);
    const nHue = (hue + 180) % 360;
    const nColor = p.color(nHue, sat, brightness);
    return [color, nColor];
}

export function splitComplement(p: p5, color: Color): [Color, Color, Color] {
    const hue = p.hue(color);
    const sat = p.saturation(color);
    const brightness = p.brightness(color);
    const nHue1 = (hue + 120) % 360;
    const nHue2 = (hue + 240) % 360;
    const nColor1 = p.color(nHue1, sat, brightness);
    const nColor2 = p.color(nHue2, sat, brightness);
    return [color, nColor1, nColor2];
}

export function triadic(p: p5, color: Color): [Color, Color, Color] {
    const hue = p.hue(color);
    const sat = p.saturation(color);
    const brightness = p.brightness(color);
    const nHue1 = (hue + 120) % 360;
    const nHue2 = (hue + 240) % 360;
    const nColor1 = p.color(nHue1, sat, brightness);
    const nColor2 = p.color(nHue2, sat, brightness);
    return [color, nColor1, nColor2];
}
export function tetradic(p: p5, color: Color): [Color, Color, Color, Color] {
    const hue = p.hue(color);
    const sat = p.saturation(color);
    const brightness = p.brightness(color);
    const nHue1 = (hue + 90) % 360;
    const nHue2 = (hue + 180) % 360;
    const nHue3 = (hue + 270) % 360;
    const nColor1 = p.color(nHue1, sat, brightness);
    const nColor2 = p.color(nHue2, sat, brightness);
    const nColor3 = p.color(nHue3, sat, brightness);
    return [color, nColor1, nColor2, nColor3];
}

export function analogous(p: p5, color: Color): [Color, Color, Color] {
    const hue = p.hue(color);
    const sat = p.saturation(color);
    const brightness = p.brightness(color);
    const nHue1 = (hue + 5) % 360;
    const nHue2 = (hue - 5) % 360;
    const nColor1 = p.color(nHue1, sat, brightness);
    const nColor2 = p.color(nHue2, sat, brightness);
    return [color, nColor1, nColor2];
}


export function randomColor(p: p5): Color {
    return p.color(p.random(360), p.random(40, 100), p.random(80, 100));
  }