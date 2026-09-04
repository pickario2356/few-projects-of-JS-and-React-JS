let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturate: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },

  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },

  invert: {
    value: 0,
    min: 0,
    max: 200,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 200,
    unit: "%",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 200,
    unit: "%",
  },
};
let filterContainer = document.querySelector(".filters");

function createFilterElement(name, value, min, max, unit = "%") {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.id = name;
  input.type = "range";
  input.value = value;
  input.min = min;
  input.max = max;

  const p = document.createElement("P");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (e) => {
    filters[name].value = input.value;
    // console.log(name,input.value)// console.log(filters[name])
    applyFilters();
  });

  return div;
}

function createFilters() {
  Object.keys(filters).forEach((filter) => {
    // console.log(filters)// console.log(filter)// console.log(filter,filters[filter])
    const filterElement = createFilterElement(
      filter,
      filters[filter].value,
      filters[filter].min,
      filters[filter].max,
      filters[filter].unit,
    );
    filterContainer.appendChild(filterElement);
  });
}
createFilters();

const imageCanvas = document.querySelector("canvas");
const imageInput = document.querySelector("input");
const canvasCtx = imageCanvas.getContext("2d");
const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn");
const presetContainer = document.querySelector(".presets");

let file = null;
let image = null;

imageInput.addEventListener("change", (event) => {
  file = event.target.files[0];

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imageCanvas.height = img.height;
    imageCanvas.width = img.width;
    canvasCtx.drawImage(img, 0, 0);
  };

  const placeholder = document.querySelector(".placeholder");
  placeholder.style.display = "none";
  const canvas = document.querySelector("canvas");
  canvas.style.display = "block";
});
function applyFilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter = `brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturate.value}${filters.saturate.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `;
  canvasCtx.drawImage(image, 0, 0);
}
resetBtn.addEventListener("click", () => {
  filters = {
    brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    saturate: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%",
    },
    blur: {
      value: 0,
      min: 0,
      max: 20,
      unit: "px",
    },

    hueRotation: {
      value: 0,
      min: 0,
      max: 360,
      unit: "deg",
    },

    invert: {
      value: 0,
      min: 0,
      max: 200,
      unit: "%",
    },
    sepia: {
      value: 0,
      min: 0,
      max: 200,
      unit: "%",
    },
    grayscale: {
      value: 0,
      min: 0,
      max: 200,
      unit: "%",
    },
  };
  filterContainer.innerHTML = "";
  createFilters();
  applyFilters();
});
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `Edited ${file.name}`;
  link.href = imageCanvas.toDataURL();
  link.click();
});
const presets = {
  retro: {
    brightness: 110,
    contrast: 90,
    saturate: 130,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 340,
    invert: 0,
    sepia: 40,
    grayscale: 0,
  },
  pop: {
    brightness: 110,
    contrast: 140,
    saturate: 180,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  vibrant: {
    brightness: 105,
    contrast: 115,
    saturate: 160,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  shadow: {
    brightness: 80,
    contrast: 130,
    saturate: 90,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  fade: {
    brightness: 115,
    contrast: 75,
    saturate: 60,
    exposure: 100,
    opacity: 90,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  moody: {
    brightness: 85,
    contrast: 120,
    saturate: 70,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 200,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  vintage: {
    brightness: 105,
    contrast: 85,
    saturate: 75,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 45,
    grayscale: 0,
  },
  cinematic: {
    brightness: 95,
    contrast: 125,
    saturate: 85,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 190,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  warm: {
    brightness: 108,
    contrast: 105,
    saturate: 120,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 20,
    grayscale: 0,
  },
  cool: {
    brightness: 100,
    contrast: 105,
    saturate: 100,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 180,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  dreamy: {
    brightness: 115,
    contrast: 80,
    saturate: 90,
    exposure: 100,
    opacity: 100,
    blur: 1,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  noir: {
    brightness: 100,
    contrast: 140,
    saturate: 100,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 100,
  },
  blackAndWhite: {
    brightness: 100,
    contrast: 110,
    saturate: 100,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 100,
  },
  dramatic: {
    brightness: 90,
    contrast: 150,
    saturate: 110,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  faded80s: {
    brightness: 110,
    contrast: 85,
    saturate: 140,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 320,
    invert: 0,
    sepia: 25,
    grayscale: 0,
  },
  cyberpunk: {
    brightness: 100,
    contrast: 130,
    saturate: 180,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 280,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  pastel: {
    brightness: 120,
    contrast: 70,
    saturate: 80,
    exposure: 100,
    opacity: 95,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
  film: {
    brightness: 105,
    contrast: 95,
    saturate: 85,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 15,
    grayscale: 5,
  },
  oldPhoto: {
    brightness: 105,
    contrast: 90,
    saturate: 60,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 0,
    invert: 0,
    sepia: 70,
    grayscale: 0,
  },
  neon: {
    brightness: 110,
    contrast: 150,
    saturate: 200,
    exposure: 100,
    opacity: 100,
    blur: 0,
    hueRotation: 260,
    invert: 0,
    sepia: 0,
    grayscale: 0,
  },
};
Object.keys(presets).forEach((presetName) => {
  // console.log(presetName)
  const presetBtn = document.createElement("button");
  presetBtn.innerHTML = presetName;
  presetBtn.classList.add("btn");
  presetContainer.appendChild(presetBtn);

  presetBtn.addEventListener("click", () => {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
    presetBtn.classList.add("selected");
    const preset = presets[presetName];
    // console.log(presetName); // sirf naam (string)
    console.log(presets[presetName]); // poora object

    Object.keys(preset).forEach((filterName) => {
      filters[filterName].value = preset[filterName];
      applyFilters();

      filterContainer.innerHTML = "";
      createFilters();
    });
  });
});
