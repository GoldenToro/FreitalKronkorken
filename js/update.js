// Define your image folder path and image names
const imageFolder = "media/fotos/";
const imageFiles = [
    "IMG-20240730-WA0002.jpg",
    "IMG-20240731-WA0003.jpg",
    "IMG-20240801-WA0003.jpg",
    "IMG-20240807-WA0012.jpg",
    "IMG-20240811-WA0004.jpg",
    "IMG-20240811-WA0028.jpg",
    "IMG-20240811-WA0030.jpg",
    "IMG-20240811-WA0033.jpg",
    "IMG-20240811-WA0058.jpg",
    "IMG-20240813-WA0004.jpg",
    "IMG-20240814-WA0006.jpg",
    "IMG-20240823-WA0010.jpg",
    "IMG-20240827-WA0011.jpg",
    "IMG-20240828-WA0000.jpg",
    "IMG-20240829-WA0008.jpg",
    "IMG-20240905-WA0001.jpg",
    "IMG-20240905-WA0002.jpg",
    "IMG-20240905-WA0003.jpg",
    "IMG-20240905-WA0004.jpg",
    "IMG-20240905-WA0006.jpg",
    "IMG-20240905-WA0007.jpg",
    "IMG-20240905-WA0008.jpg",
    "IMG-20240905-WA0009.jpg",
    "IMG-20240905-WA0011.jpg",
    "IMG-20240906-WA0010.jpg"
];
const collage = document.getElementById('collage');

imageFiles.forEach(imageFile => {
    const linkElement = document.createElement('a');
    linkElement.href = imageFolder + imageFile;
    linkElement.target = "_blank"; // Opens image in new tab

    const imgElement = document.createElement('img');
    imgElement.src = imageFolder + imageFile;

    // Append the image inside the anchor
    linkElement.appendChild(imgElement);

    // Append the anchor to the collage
    collage.appendChild(linkElement);
});