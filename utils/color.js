import sharp from 'sharp'

import { Hct, QuantizerCelebi, Score, argbFromRgb } from '@material/material-color-utilities';

/**
 * Extracts pixel data from an image buffer.
 *
 * @param {Buffer} imageBuffer - The buffer of the image file.
 * @param {string} [area] - Optional area to extract in "x,y,width,height" format.
 * @return {Promise<number[]>} - The image pixel data.
 */
export async function colorFromImageBuffer(imageBuffer) {
    const image = await sharp(imageBuffer).removeAlpha().resize({
		width: 128,
		height: 128,
		fit: 'fill'
	}).raw().toBuffer({
		resolveWithObject: true
	});
	const bufferArray = new Uint8ClampedArray(image.data.buffer);
	const bufferLength = bufferArray.length; 
	
	const pixels = [];
	for (let i = 0; i < bufferLength; i += 3) {
		const r = bufferArray[i];
		const g = bufferArray[i + 1];
        const b = bufferArray[i + 2];
        
		const argb = argbFromRgb(r, g, b);
        pixels.push(argb);
	}

    const result = QuantizerCelebi.quantize(pixels, 128);
    const scores = Score.score(result);

    const color = Hct.fromInt(scores[0])
    const rgbHexColor = color.argb.toString(16).slice(2)

    return rgbHexColor;
}