const container = document.querySelector(".container");
const left_panel = document.querySelector(".left");
const right_panel = document.querySelector(".right");

left_panel.addEventListener("mouseover", () =>
  container.classList.add("activeL")
);
left_panel.addEventListener("mouseout", () =>
  container.classList.remove("activeL")
);

right_panel.addEventListener("mouseover", () =>
  container.classList.add("activeR")
);
right_panel.addEventListener("mouseout", () =>
  container.classList.remove("activeR")
);
