const filterContainer = document.querySelector(".filters");
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

  return div;
}

Object.keys(filters).forEach((filter) => {
  // console.log(filters)
  // console.log(filter)
  // console.log(filter,filters[filter])

  const filterElement = createFilterElement(
    filter,
    filters[filter].value,
    filters[filter].min,
    filters[filter].max,
    filters[filter].unit,
  );
  filterContainer.appendChild(filterElement);
});
