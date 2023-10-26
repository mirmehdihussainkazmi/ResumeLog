document.getElementById("form").addEventListener("submit", auth);



function auth(event) {
     event.preventDefault();

     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     console.log(username);

     if (username === "mahdi" && password === "abc") {
        window.location.replace("landing/main.html");
    } else if (username === "" || password === "") {
        alert("Please enter information", true);
    } else {
        alert("Please enter valid information", true);
        return;
    }
}
