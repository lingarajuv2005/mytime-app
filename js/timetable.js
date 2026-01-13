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

async function addClass() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("classname").value;
  const link = document.getElementById("link").value;

  if (!date || !time || !name) {
    alert("Fill all required fields");
    return;
  }

  await addDoc(colRef, {
    date,
    time,
    name,
    link
  });

  loadClasses();
}

async function deleteClass(id) {
  await deleteDoc(doc(db, "users", user, "classes", id));
  loadClasses();
}

async function loadClasses() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const snap = await getDocs(colRef);
  snap.forEach(d => {
    const c = d.data();
    list.innerHTML += `
      <li class="card">
        <b>${c.name}</b><br>
        ${c.date} ${c.time}<br>
        <a href="${c.link}" target="_blank">${c.link || ""}</a>
        <button onclick="deleteClass('${d.id}')">Delete</button>
      </li>
    `;
  });
}

window.addClass = addClass;
window.deleteClass = deleteClass;
window.onload = loadClasses;
