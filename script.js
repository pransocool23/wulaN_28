// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("login", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText =
            "Username atau Password salah!";
    }
}

// CEK LOGIN
function cekLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}
