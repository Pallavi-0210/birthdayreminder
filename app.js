// app.js
import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const form = document.getElementById("birthdayForm");
const birthdayList = document.getElementById("birthdayList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const date = form.date.value;

  if (!name || !date) return;

  try {
    await addDoc(collection(db, "birthdays"), { name, date });
    showNotification(`🎂 Birthday added for ${name}!`);

    form.reset();
    fetchBirthdays();
  } catch (error) {
    alert("Error adding birthday: " + error.message);
  }
});
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000); // hides after 3 seconds
}


async function fetchBirthdays() {
  birthdayList.innerHTML = "";

  const today = new Date();
  const querySnapshot = await getDocs(collection(db, "birthdays"));

  querySnapshot.forEach((doc) => {
    const { name, date } = doc.data();

    const bday = new Date(date);
    bday.setFullYear(today.getFullYear());

    const diffDays = Math.ceil((bday - today) / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 7) {
      const li = document.createElement("li");
      li.textContent = `${name} — ${bday.toDateString()}`;
      birthdayList.appendChild(li);
    }
  });
}

window.onload = fetchBirthdays;
