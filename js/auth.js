function login() {
  const u = username.value;
  const p = password.value;

  if (
    (u === "Lingaraju" || u === "Vishal") &&
    p === "Welcome@123"
  ) {
    localStorage.setItem("currentUser", u);
    location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "index.html";
}
