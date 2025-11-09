export default function() {
  const contentDiv = document.querySelector("div#content");

  const header = document.createElement("h1");
  header.textContent = "Home";
  header.classList.add("header");

  const introductoryPara = document.createElement("p");
  introductoryPara.textContent = "Welcome to the home page of the salad bar. We have many different foods for you to choose from, but mainly focused on salad. We hope that you can come to our restaurant and enjoy our exquisite salads with us.";
  introductoryPara.classList.add("intro-para");

  const openingHours = document.createElement("div");
  const openingHoursTable = document.createElement("table");
  const openingHoursThead = document.createElement("thead");
  const openingHoursTbody = document.createElement("tbody");
  const openingHoursTheadRow = document.createElement("tr");
  ["", "Opening Times: ", "Closing Times: "].forEach(cell => {
    const th = document.createElement("th");
    th.textContent = cell;
    if (cell !== "") th.scope = "col";
    openingHoursTheadRow.appendChild(th);
  });
  openingHoursThead.appendChild(openingHoursTheadRow);
  [{day: "Monday", open: "9:00", close: "18:00"},
   {day: "Tuesday", open: "9:00", close: "18:00"},
   {day: "Wednesday", open: "9:00", close: "18:00"},
   {day: "Thursday", open: "9:00", close: "18:00"},
   {day: "Friday", open: "9:00", close: "19:00"},
   {day: "Saturday", open: "10:00", close: "20:00"},
   {day: "Sunday", open: "10:00", close: "16:00"},
  ].forEach(setOfData => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    th.textContent = setOfData.day;
    th.scope = "row";
    td1.textContent = setOfData.open;
    td2.textContent = setOfData.close;
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    openingHoursTbody.appendChild(tr);
  });

  openingHoursTable.appendChild(openingHoursThead);
  openingHoursTable.appendChild(openingHoursTbody);
  openingHours.appendChild(openingHoursTable);
  openingHours.classList.add("opening-hours");
  


  contentDiv.appendChild(header);
  contentDiv.appendChild(introductoryPara);
  contentDiv.appendChild(openingHours);
}
