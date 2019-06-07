import dayjs from "https://unpkg.com/dayjs/esm/index.js?module";

let firstDay = dayjs("2019-01-01");
let calendar = "";

for (let i = 0; i < 12; i++) {
  const month = firstDay.clone().add(i, "month");
  console.log(month, month.daysInMonth());
  let monthHtml = `<div style="width: 300px;">
  <h3>${month.format("MMM")}</h3>`;
  for (let y = 0; y < month.daysInMonth(); y++) {
    const day = month.clone().add(y, "day");
    monthHtml += `<div>${day.format("DD ddd")}</div>`;
  }
  calendar += monthHtml + "</div>";
}

app.innerHTML = `<h1>Yearly overview</h1>
<div style="display: flex;width: ${12 * 300}px">
  ${calendar}
</div>`;
