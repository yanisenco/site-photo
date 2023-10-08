import exifr from 'exifr';

export const getPicturesData = async(image) => {
    return await exifr.parse(image.img, ['ISO', 'FNumber', 'LensModel', 'ExposureTime', 'Model'])
}