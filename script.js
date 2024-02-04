const users = [
    {
        nom: "Birane",
        username:"",
        status:"",
        password:"",
        img:"../img/profile2.png",
        messages: [
            {text:"Slt Tata", date: "10/10/2024 10:10",user:1},
            {text:"Slt Naka War", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptate?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur", date: "10/10/2024 10:10"},
            {text:"cv je bien ca fait bay", date: "10/10/2024 10:10",user:1},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Tata",
        username:"tata",
        status:"archiver",
        password:"p",
        img:"../img/profile3.png",
        messages: [
            {text:"Slt Birane", date: "10/10/2024 10:10",user:0},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Le prof est mort", date: "10/10/2024 10:10"},
            {text:"Srx?", date: "10/10/2024 10:10"},
            {text:"C'est une bonne nouvelle ca?", date: "10/10/2024 10:10"},
            {text:"oui tout le monde est content wollah", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Malick",
        username:"mvlck",
        status:"archiver",
        password:"p",
        img:"../img/profile4.png",
        messages: [
            {text:"Slt Yaya", date: "10/10/2024 10:10"},
            {text:"Slt, tu as fais le projet js?", date: "10/10/2024 10:10"},
            {text:"OUi mais je crois que je vais avoir 0 😭", date: "10/10/2024 10:10"},
            {text:"mais traoure est foutu, tu c?", date: "10/10/2024 10:10"},
            {text:"abon pk?", date: "10/10/2024 10:10"},
            {text:"parce qu'il a eu un seul fichier 🤣", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Modou Ndiaye",
        username:"modoulo",
        status:"",
        password:"p",
        img:"../img/profile5.png",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Bamba",
        username:"bam",
        status:"",
        password:"p",
        img:"../img/profile6.png",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    }
];



const list = document.querySelector(".list");
const messages = document.querySelector(".messages");
const msgOwner = document.querySelector("#msgOwner");
const profilImg = document.querySelector("#profilImg");
const messageInput = document.querySelector("textarea");
const btnSend = document.querySelector(".send");
const writting = document.querySelector(".writting");
const container = document.querySelector(".container");
const connexion = document.querySelector(".connexion");
//
const btnConnexion = document.querySelector(".btnConnexion");
const usernameInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");






let posUserActual = -1; //la position du contact qu'on choisi
let posConnectedUser = -1; //La position de celui qui s'est connecté

function printList() {
    list.innerHTML = '';

    const activeIcon = document.querySelector('.option i.active');
    const activeIconClass = activeIcon ? activeIcon.classList[1] : '';

    users.forEach(function (usr, i) {
        if (i !== posConnectedUser) {
            // Check for the updated status directly in the users array
            const updatedStatus = users[i].status === 'archiver';

            if (activeIconClass === 'fa-message' && !updatedStatus) {
                list.innerHTML += `<div class="item"><div class="img-info"><img src="${usr.img}" alt="" id="profilImg"></div><div  onclick="detailsUser(${i})">${usr.nom}</div></div>`;
            } else if (activeIconClass === 'fa-archive' && updatedStatus) {
                list.innerHTML += `<div class="item"><div class="img-info"><img src="${usr.img}" alt="" id="profilImg"></div><div  onclick="detailsUser(${i})">${usr.nom}</div></div>`;
            }
        }
    });
}

// Event listener for the archive icon
const archiveIcon = document.querySelector(".fa-archive");
archiveIcon.addEventListener('click', function () {
    // Update the status of the selected user to "archiver"
    if (posUserActual !== -1) {
        users[posUserActual].status = "archiver";
    }

    // Reprint the list directly using the updated users array
    printList();
});




function detailsUser(position){
    const userActual = users[position];
    printMessages(userActual);
    //
    posUserActual = position;
}

function getCurrentDate(){
    const d = new Date();
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
}

function isWritting(){
    writting.classList.remove('stop')
    if(messageInput.value == ""){
        writting.classList.add('stop')
    }
}

function login(username,password){
    for (let i = 0; i < users.length; i++) {
        if(users[i].username === username && users[i].password===password){
            return i;
        }
    }
    return -1;

    // let user= users.filter(u=>u.username===username && u.password===password)
}

function printMessages(user){
    msgOwner.innerHTML = `${user.nom}`;
    messages.innerHTML = ``;
    profilImg.src=`${user.img}`;
    user.messages.forEach(function(msg){
        messages.innerHTML += `
        <div class="message">
            <div class="text">
                ${msg.text}
            </div>
            <div class="date"><span>${msg.date}</span></div>
        </div>
        `
    });
}


//
messageInput.addEventListener('input',isWritting);
//
btnConnexion.addEventListener('click',function(){
    const uname = usernameInput.value.trim()
    const pass = passwordInput.value.trim()
    posConnectedUser = login(uname,pass);
    if(posConnectedUser == -1){
        return;
    }
    container.classList.remove('hide');
    connexion.classList.add('hide');
    printList();
})
//
btnSend.addEventListener('click',function(){
    const newMessage = messageInput.value;
    // if(newMessage.trim() == ""){
    if(!newMessage.trim() || posUserActual == -1){
        return;
    }

    users[posUserActual].messages.push({
        text: newMessage, 
        date: getCurrentDate()
    })
    //Actualiser les message de l'utilisateur dans le DOM
    detailsUser(posUserActual);
    //Vider le champs de saisie:
    messageInput.value = "";
    //Enveler : writting
    isWritting();
})


const deleteButton = document.querySelector(".fa-delete-left");

// Function to delete all messages of the user with id "msgOwner"
function deleteMessages() {
    if (posUserActual === -1 || posConnectedUser === -1) {
        return;
    }

    const selectedUser = users[posUserActual];

    // Clear all messages of the selected user
    selectedUser.messages = [];

    // Update the displayed messages
    detailsUser(posUserActual);
}

// Event listener for the delete button
deleteButton.addEventListener('click', deleteMessages);



const rightBracketIcon = document.querySelector(".fa-right-from-bracket");

// Event listener for the right-from-bracket icon
rightBracketIcon.addEventListener('click', function () {
    container.classList.add('hide');
    connexion.classList.remove('hide');
});




document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.option i');
    const title = document.querySelector('.title h2');

    icons.forEach((icon, index) => {
        icon.addEventListener('click', function () {
            // Remove 'active' class from all icons
            icons.forEach(i => i.classList.remove('active'));

            // Add 'active' class to the clicked icon
            this.classList.add('active');

            // Update the title based on the clicked icon
            const titles = ['Messages', 'Groupes', 'Diffusion', 'Archives', 'Nouveau'];
            title.textContent = titles[index];

            // Call the printList function after updating the icon
            printList();
        });
    });

    // Set the default title to "Messages" and apply initial styling
    icons[0].classList.add('active');
    title.textContent = 'Messages';

    printList();
});






window.onload = function(){
    container.classList.add('hide');
}
