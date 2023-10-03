const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const grayscale = document.getElementById("grayscale");
const monotone = document.getElementById("monotone");
const duotone = document.getElementById("duotone");
const resize = document.getElementById("resize");
const reset = document.getElementById("reset");
const download = document.getElementById("download");
const input = document.getElementById("image");

let imageWidth = null;
let imageHeight = null;
let originalData = null;

const image = new Image();
image.addEventListener("load", () => {
  imageWidth = image.width;
  imageHeight = image.height;
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  context.drawImage(image, 0, 0);
});

const reader = new FileReader();
reader.addEventListener("load", () => {
  image.src = reader.result;
  originalData = reader.result;
});

input.addEventListener("change", () => {
  reader.readAsDataURL(input.files[0]);
});

const applyFilter = (filterType) => {
  if (!imageWidth || !imageHeight) {
    return alert("Please upload an image first!");
  }

  const image = context.getImageData(0, 0, imageWidth, imageHeight);
  const imgData = image.data;

  for (let i = 0; i < imgData.length; i += 4) {
    const red = imgData[i];
    const green = imgData[i + 1];
    const blue = imgData[i + 2];

    const grayValue = (red + green + blue) / 3;
    const data = filters[filterType](grayValue);
    imgData[i] = data[0];
    imgData[i + 1] = data[1];
    imgData[i + 2] = data[2];
  }

  context.putImageData(image, 0, 0);
  download.href = canvas.toDataURL();
};

const filters = {
  applyGrayscale: (gray) => {
    return [gray, gray, gray];
  },
  applyMonotone: (gray) => {
    return [gray - 40, gray - 40, gray + 80];
  },
  applyDuotone: (gray) => {
    const diff = Math.round((128 / 100) * gray);
    return [gray + diff, gray, 255 - diff];
  }
};

const resetFilter = () => {
  if (!image || !context || !originalData) {
    return alert("There is nothing to reset");
  }

  image.src = originalData;
  context.drawImage(image, 0, 0);
};

grayscale.addEventListener("click", () => applyFilter("applyGrayscale"));
monotone.addEventListener("click", () => applyFilter("applyMonotone"));
duotone.addEventListener("click", () => applyFilter("applyDuotone"));
reset.addEventListener("click", resetFilter);
