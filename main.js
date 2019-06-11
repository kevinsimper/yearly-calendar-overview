import dayjs from "https://unpkg.com/dayjs-es?module";

let firstDay = dayjs("2019-01-01");
let calendar = "";

for (let i = 0; i < 12; i++) {
  const month = firstDay.clone().add(i, "month");
  let monthHtml = `<div style="width: 300px;border-left: 1px solid #CCC;">
  <h3 style="margin-left: 3px;">${month.format("MMM")}</h3>`;
  for (let y = 0; y < month.daysInMonth(); y++) {
    const day = month.clone().add(y, "day");
    monthHtml += `<div style="border-bottom: 1px solid #CCC; padding: 3px;">${day.format(
      "DD ddd"
    )}</div>`;
  }
  calendar += monthHtml + "</div>";
}

app.innerHTML = `<h1>Yearly overview</h1>
<div class="scroll" style="overflow-y: auto; cursor: pointer;">
<div style="display: flex;width: ${12 * 300}px; border-top: 1px solid #CCC;">
  ${calendar}
</div>
</div>`;

const slider = document.querySelector(".scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
