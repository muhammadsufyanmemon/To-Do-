// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBx6eVW20INt60sA12E1eOEEtGS0jIuPtU",
//     authDomain: "to-do-app-48787.firebaseapp.com",
//     projectId: "to-do-app-48787",
//     storageBucket: "to-do-app-48787.appspot.com",
//     messagingSenderId: "713411430410",
//     appId: "1:713411430410:web:2fc2310e048bcb779e37f3",
//     measurementId: "G-FLTBF26SRV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import { getDatabase, ref, get, set, child, update, remove, push } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

// const db = getDatabase();


var list = document.getElementById("list")

// firebase.database().ref("To Do's").on('child_added', function (data) {
//     console.log(data.val())
// })

function addtodo() {
    var todo_item = document.getElementById("todo-item")


    // var database = firebase.database().ref("To Do's")
    // var key = database.push().key
    // var todo = {
    //     value: todo_item.value,
    //     key: key
    // }

    // database.child(key).set(todo)

    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    //=========================dlete btn=======================
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("delete")
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick", "deleteitem(this)")
    delbtn.appendChild(deltext)

    //===================edit=========================
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("onclick", "edititem(this)")



    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)

    todo_item.value = ""
    console.log(li)
}

addbtn.addEventListener('click', addtodo )



function deleteitem(e) {

    e.parentNode.remove()
}

function edititem(e) {
    var val = e.parentNode.firstChild.nodeValue
    var editvalue = prompt("Enter Edit Value", val)

    e.parentNode.firstChild.nodeValue = editvalue
    //  = "Ahmed"

}


function deleteall() {
    list.innerHTML = ""
}









