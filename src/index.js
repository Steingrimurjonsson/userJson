import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";


const txt = document.querySelector("#txt");
const table = document.querySelector("#table");
const but = document.querySelector("#but");
const but2 = document.querySelector("#but2");
const but3 = document.querySelector("#but3");
const but4 = document.querySelector("#but4");

//add user
const ageid = document.querySelector("#ageid");
const nameid = document.querySelector("#nameid");
const genderid = document.querySelector("#genderid");
const emailid = document.querySelector("#emailid");



function userToTableS(item) {
    var tableData = item.map(x => "<tr><td>" + x.id + "</td><td><p>" + x.sId + "</p></td><td>" + x.name + "</td><td>" + x.color + "</td></tr>");
    tableData.unshift("<table class=\"table\"><tr><th>ID</th><th>student id</th><th>Name</th><th>color</th></tr>");
    tableData.push("</table>");
    return tableData.join('');
}


function userToTable(item) {
    var tableData = item.map(x => "<tr><td>" + x.id + "</td><td><p>" + x.age + "</p></td><td>" + x.name + "</td><td>" + x.gender + "</td><td>" + x.email + "</td></tr>");
    tableData.unshift("<table class=\"table\"><tr><th>ID</th><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>");
    tableData.push("</table>");
    return tableData.join('');
}

function userToP(item) {
    var tableData = ["<tr><td>" + item.id + "</td><td><p>" + item.age + "</p></td><td>" + item.name + "</td><td>" + item.gender + "</td><td>" + item.email + "</td></tr>"];
    tableData.unshift("<table class=\"table\"><tr><th>ID</th><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>");
    tableData.push("</table>");
    return tableData;
}

but2.onclick = function (e) {
    e.preventDefault();
    let url = "http://localhost:3333/api/users";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            table.innerHTML = userToTable(data);

        });
};

but.onclick = function (e) {
    e.preventDefault();
    let url = "http://localhost:3333/api/users/" + txt.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            table.innerHTML = userToP(data);
        });
};


but3.onclick = function (e) {
    e.preventDefault();
    var age = ageid.value;
    var name = nameid.value;
    var gender = genderid.value;
    var email = emailid.value;

    var data = JSON.stringify({
        "age": age,
        "name": name,
        "gender": gender,
        "email": email
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var obj = JSON.parse(this.responseText);
            console.log(this.responseText);
            alert(obj.msg);
        }
    });

    xhr.open("POST", "http://localhost:3333/api/users/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.17.1");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "eae056c9-14e2-4f35-877a-6e636f9816e1,76e82af2-77db-47e4-80aa-6d306a6e4dd4");
    xhr.setRequestHeader("Host", "localhost:3333");
    xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
    xhr.setRequestHeader("Content-Length", "90");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);

    console.log(data);

};







