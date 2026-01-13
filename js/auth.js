function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (
    (u === "Lingaraju" && p === "Welcome@123") ||
    (u === "Vishal" && p === "Welcome@123")
  ) {
    localStorage.setItem("currentUser", u);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
