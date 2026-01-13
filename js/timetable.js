import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const user = localStorage.getItem("currentUser");
if (!user) location.href = "index.html";

const colRef = collection(db, "users", user, "classes");

// ➕ ADD CLASS
async function addClass() {
  const date = document.getElementById("date").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const subject = document.getElementById("subject").value;
  const link = document.getElementById("link").value;
  const wa = document.getElementById("wa").value;

  if (!date || !start || !end || !subject) {
    alert("Please fill all required fields");
    return;
  }

  await addDoc(colRef, {
    date,
    start,
    end,
    subject,
    link,
    wa,
    createdAt: Date.now()
  });

  loadClasses();
}

// 🗑 DELETE
async function deleteClass(id) {
  await deleteDoc(doc(db, "users", user, "classes", id));
  loadClasses();
}

// 📥 LOAD + SYNC
async function loadClasses() {
  const body = document.getElementById("timetableBody");
  const upcoming = document.getElementById("upcoming");
  const past = document.getElementById("past");

  body.innerHTML = "";
  upcoming.innerHTML = "";
  past.innerHTML = "";

  const today = new Date().toISOString().split("T")[0];
  const snap = await getDocs(colRef);

  snap.forEach(d => {
    const c = d.data();

    body.innerHTML += `
      <tr>
        <td>${c.date}</td>
        <td>${c.start}</td>
        <td>${c.end}</td>
        <td>${c.subject}</td>
        <td>${c.link ? `<a href="${c.link}" target="_blank">Open</a>` : ""}</td>
        <td>${c.wa || ""}</td>
        <td><button onclick="deleteClass('${d.id}')">❌</button></td>
      </tr>
    `;

    if (c.date >= today) {
      upcoming.innerHTML += `<li>${c.subject} (${c.date} ${c.start})</li>`;
    } else {
      past.innerHTML += `<li>${c.subject} (${c.date})</li>`;
    }
  });
}

window.addClass = addClass;
window.deleteClass = deleteClass;
window.onload = loadClasses;
