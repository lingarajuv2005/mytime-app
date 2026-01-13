import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const user = localStorage.getItem("currentUser");
if (!user) location.href = "index.html";

const ref = collection(db, "users", user, "classes");

window.addClass = async function () {
  if (!date.value || !start.value || !end.value || !subject.value) {
    alert("Fill required fields");
    return;
  }

  await addDoc(ref, {
    date: date.value,
    start: start.value,
    end: end.value,
    subject: subject.value,
    link: link.value,
    wa: wa.value,
    created: Date.now()
  });

  loadClasses();
};

async function deleteClass(id) {
  await deleteDoc(doc(db, "users", user, "classes", id));
  loadClasses();
}

async function loadClasses() {
  timetableBody.innerHTML = "";
  upcoming.innerHTML = "";
  past.innerHTML = "";

  const q = query(ref, orderBy("created", "asc"));
  const snap = await getDocs(q);
  const now = new Date();

  snap.forEach(d => {
    const c = d.data();
    const t = new Date(`${c.date} ${c.start}`);

    timetableBody.innerHTML += `
      <tr>
        <td>${c.date}</td>
        <td>${c.start}</td>
        <td>${c.end}</td>
        <td>${c.subject}</td>
        <td>${c.link ? `<a href="${c.link}" target="_blank">Open</a>` : "-"}</td>
        <td>${c.wa || "-"}</td>
        <td><button onclick="deleteClass('${d.id}')">❌</button></td>
      </tr>
    `;

    const text = `${c.date} ${c.start} - ${c.subject}`;
    if (t > now) upcoming.innerHTML += `<li>${text}</li>`;
    else past.innerHTML += `<li>${text}</li>`;
  });
}

window.deleteClass = deleteClass;
window.onload = loadClasses;
