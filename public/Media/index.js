import image1 from './image-1.jpg';
import image2 from './image-2.jpg';
import image3 from './image-3.jpg';

// images is an array of image paths
export const images = [image1, image2, image3];
// imagesByIndex is an object of image paths
export const imagesByIndex = index => images[index];
export const length = images.length;