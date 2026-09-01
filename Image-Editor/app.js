const filters = {
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
  exposure: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  invert: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  sepia: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  grayscale: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
};
function createFilterElement(name, value, min, max, unit = "%") {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.id = name;
  input.type = "range";
  input.value = value;
  input.min = min;
  input.max = max;

  const p = document.createElement("P")
  p.innerText=name;

  div.appendChild(input)
  div.appendChild(p)
}

Object.keys(filters).forEach(filter=>{
    // console.log(filters)
    // console.log(filter)
    console.log(filter,filters[filter])
})