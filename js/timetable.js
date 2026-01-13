const user = localStorage.getItem("currentUser");
if (!user) window.location.href = "index.html";

const storageKey = "classes_" + user;

function addClass() {
  const data = JSON.parse(localStorage.getItem(storageKey) || "[]");

  data.push({
    date: date.value,
    start: start.value,
    end: end.value,
    subject: subject.value,
    link: link.value,
    wa: wa.value
  });

  localStorage.setItem(storageKey, JSON.stringify(data));
  loadClasses();
}

function loadClasses() {
  const data = JSON.parse(localStorage.getItem(storageKey) || "[]");

  timetableBody.innerHTML = "";
  upcoming.innerHTML = "";
  past.innerHTML = "";

  const now = new Date();

  data.forEach(c => {
    timetableBody.innerHTML += `
      <tr>
        <td>${c.date}</td>
        <td>${c.start}</td>
        <td>${c.end}</td>
        <td>${c.subject}</td>
        <td>${c.link || "-"}</td>
        <td>${c.wa || "-"}</td>
      </tr>
    `;

    const classTime = new Date(c.date + " " + c.start);

    if (classTime > now) {
      upcoming.innerHTML += `<li>${c.date} ${c.start} - ${c.subject}</li>`;
    } else {
      past.innerHTML += `<li>${c.date} ${c.start} - ${c.subject}</li>`;
    }
  });
}

window.onload = loadClasses;
