//----------------------variabales------------
let id = 0;
let results = [];
let listR = [];
let increment = 1;
let D = moment().format("YYYY-MM-DD");

function addList() {
  let   = document.getElementById("nom");
  let inputsujet = document.getElementById("sujet");

  results.push({
    id: id++,
    names: inputnom.value,
    subjects: inputsujet.value,
  });

  // console.log("results");

  //Creat td
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let tr = document.createElement("tr");
  let tbody = document.getElementById("tbody");

  //id
  tr.setAttribute("data-id", id);

  td.appendChild(document.createTextNode(inputnom.value));
  td2.appendChild(document.createTextNode(inputsujet.value));
  td3.innerHTML = '<i class="fas fa-trash-alt"></i>';

  tr.appendChild(td4);
  tr.appendChild(td);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbody.appendChild(tr);
}

const skippingWeek = (date, days) => {
  let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
  let remaining = days % 5;
  while (remaining) {
    d.add(1, "d");
    if (d.day() !== 0 && d.day() !== 6) remaining--;
  }
  return d.format("YYYY-MM-DD");
};

function getData() {
  if (results.length === 0) {
    return;
  }

  let randomData = results[Math.floor(Math.random() * results.length)];
  results = results.filter((item) => item.id !== randomData.id);

  

  //le meme id
  document.querySelector(`[data-id="${randomData.id + 1}"]`).remove();

  document.getElementById("nameone").innerHTML = randomData.names;
  document.getElementById("subj").innerHTML = randomData.subjects;

  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let tbody = document.getElementById("tbodyto");

  //day

  let day = skippingWeek(D, increment++);

  td.appendChild(document.createTextNode(randomData.names));
  td2.appendChild(document.createTextNode(randomData.subjects));
  td3.appendChild(document.createTextNode(day));

  tr.appendChild(td);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);

  listR.push({
    id: increment,
    date: day,
    names: randomData.names,
    subjects: randomData.subjects,
  });

  //   console.log(listR);

  return randomData;
}