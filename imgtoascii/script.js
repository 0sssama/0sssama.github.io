const picture = document.getElementById("picture");
const canvas = document.getElementById("preview");
const context = canvas.getContext("2d");
const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;
const kys = document.querySelector('.kys');
const convertToGrayScales = (context, width, height) => {
  const imageData = context.getImageData(0, 0, width, height);
  const grayScales = [];

  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];
    const grayScale = toGrayScale(r, g, b);

    imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;
    grayScales.push(grayScale);
  }
  context.putImageData(imageData, 0, 0);
  return grayScales;
};

picture.onchange = e => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = event => {
    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      convertToGrayScales(context, canvas.width, canvas.height);
      const pixelLines = splitArray(convertToGrayScales(context, canvas.width, canvas.height), canvas.width);
      var all = '';
      var lineInAscii = ''; 
      
      // give specific char to every pixel

      pixelLines.forEach(line => {
        line.forEach(pixelGrayScale => {
          lineInAscii += giveAscii(pixelGrayScale);
        });
        console.log(lineInAscii);
        all += (lineInAscii + "\r\n");
        lineInAscii = '';
      });

      kys.innerHTML(all);
    };

    image.src = event.target.result;
  };
  reader.readAsDataURL(file);
};