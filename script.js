const users = [
    {
        nom: "Birane",
        username:"",
        status:"",
        password:"",
        img:"../img/profile2.png",
        messages: [
            {text:"Slt Tata", date: " 10:10",user:1},
            {text:"Slt Naka War", date: " 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptate?", date: " 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur", date: " 10:10"},
            {text:"cv je bien ca fait bay", date: " 10:10",user:1},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: " 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: " 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: " 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: " 10:10"},
        ],
        contact:["tata","mvlck","modoulo","bam"]
    },
    {
        nom: "Tata",
        username:"tata",
        status:"archiver",
        password:"p",
        img:"../img/profile3.png",
        messages: [
            {text:"Slt Birane", date: " 10:10",user:0},
            {text:"Slt Bro", date: " 10:10",user:""},
            {text:"Le prof est mort", date: " 10:10",user:0},
            {text:"Srx?", date: " 10:10",user:""},
            {text:"C'est une bonne nouvelle ca?", date: " 10:10",user:0},
            {text:"oui tout le monde est content wollah", date: " 10:10",user:""},
        ]
    },
    {
        nom: "Malick",
        username:"mvlck",
        status:"archiver",
        password:"p",
        img:"../img/profile4.png",
        messages: [
            {text:"Slt Yaya", date: " 10:10",user:0},
            {text:"Slt, tu as fais le projet js?", date: " 10:10",user:""},
            {text:"OUi mais je crois que je vais avoir 0 😭", date: " 10:10",user:0},
            {text:"mais traoure est foutu, tu c?", date: " 10:10",user:""},
            {text:"abon pk?", date: " 10:10",user:0},
            {text:"parce qu'il a eu un seul fichier 🤣", date: " 10:10",user:""},
        ]
    },
    {
        nom: "Modou Ndiaye",
        username:"modoulo",
        status:"",
        password:"p",
        img:"../img/profile5.png",
        messages: [
            {text:"Slt Bro", date: " 10:10",user:0},
            {text:"Slt Bro", date: " 10:10",user:""},
            {text:"et la famille", date: " 10:10",user:0},
        ]
    },
    {
        nom: "Bamba",
        username:"bam",
        status:"",
        password:"p",
        img:"../img/profile6.png",
        messages: [
            {text:"Slt Bro", date: " 10:10",user:0},
            {text:"Slt Bro", date: " 10:10",user:""},
        ]
    },
    {
        nom: "Maïmouna",
        username: "DJiné Maïmouna",
        status: "",
        password: "password123",
        img: "../img/profile7.png",
        messages: [
            { text: "boy!", date: " 10:10",user:0 },
            { text: "nkm", date: " 10:10",user:"" },
            { text: "send ma affaire yii", date: " 10:10",user:0 }
        ],
        contact: ["alice_smith", "bob_jones"]
    },
    {
        nom: "Babacar Ba",
        username: "Mr Ba",
        status: "",
        password: "pass123",
        img: "../img/profile8.png",
        messages: [
            { text: "Bonjour tu viendra!", date: " 10:10" ,user:0},
            { text: "OUi je viendrais", date: " 10:10",user:"" },
            { text: "D'accord", date: " 10:10",user:0 }
        ],
        contact: ["john_doe", "bob_jones"]
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
const add_user_form = document.querySelector(".add_user_form");
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
            // const updatedStatus = users[i].status === 'archiver';

            if (activeIconClass === 'fa-message' && usr.status === "") {
                list.innerHTML += `<div class="item"><div class="img-info"><img src="${usr.img}" alt="" class="profilImg"></div><div  onclick="detailsUser(${i})">${usr.nom}</div></div>`;
            } else if (activeIconClass === 'fa-archive' && usr.status === "archiver") {
                list.innerHTML += `<div class="item"><div class="img-info"><img src="${usr.img}" alt="" class="profilImg"></div><div  onclick="detailsUser(${i})">${usr.nom}</div></div>`;
            }
        }
    });
}

// Event listener for the archive icon
const archiveIcon = document.querySelector(".topoptions .fa-archive");
archiveIcon.addEventListener('click', function () {
    // Update the status of the selected user to "archiver"
    if (posUserActual !== -1) {
        users[posUserActual].status = "archiver";
    }

    // Reprint the list directly using the updated users array
    printList();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const trashIcon = document.querySelector(".fa-trash");

trashIcon.addEventListener('click', function () {
    // Check if a user is selected
    if (posUserActual !== -1) {
        // Remove the user from the users array
        users.splice(posUserActual, 1);

        // Reset posUserActual since the user is removed
        posUserActual = -1;

        // Reprint the list directly using the updated users array
        printList();

        // Clear the displayed messages since the user is removed
        messages.innerHTML = '';
        msgOwner.textContent = '';
        profilImg.src = '';
    }
});


function detailsUser(position){
    const userActual = users[position];
    printMessages(userActual);
    //
    posUserActual = position;
}

function getCurrentDate(){
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes()}`
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

function printMessages(user) {
    msgOwner.innerHTML = `${user.nom}`;
    messages.innerHTML = '';
    profilImg.src = `${user.img}`;

    user.messages.forEach(function (msg, index) {
        // Check if the user value is numeric
        const isNewMessage = typeof msg.user === 'number';
        const messageClass = isNewMessage ? "new" : "";

        messages.innerHTML += `
            <div class="message ${messageClass}">
                <div class="text ${messageClass}">
                    ${msg.text}
                </div>
                <div class="date ${messageClass}"><span>${msg.date}</span></div>
            </div>
        `;
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
    add_user_form.classList.add('hide');
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteButton = document.querySelector(".fa-delete-left");

function deleteMessages() {
    if (posUserActual === -1 || posConnectedUser === -1) {
        return;
    }

    const selectedUser = users[posUserActual];

    // Clear all messages of the selected user
    selectedUser.messages = [];

    detailsUser(posUserActual);
}

deleteButton.addEventListener('click', deleteMessages);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const rightBracketIcon = document.querySelector(".fa-right-from-bracket");

rightBracketIcon.addEventListener('click', function () {
    container.classList.add('hide');
    connexion.classList.remove('hide');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.option i');
    const title = document.querySelector('.title h2');

    icons.forEach((icon, index) => {
        icon.addEventListener('click', function () {
            icons.forEach(i => i.classList.remove('active'));

            this.classList.add('active');

            const titles = ['Messages', 'Groupes', 'Diffusion', 'Archives', 'Nouveau'];
            title.textContent = titles[index];

            printList();
        });
    });

    icons[0].classList.add('active');
    title.textContent = 'Messages';

    printList();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const plusIcon = document.querySelector(".fa-plus");
const addUserForm = document.querySelector(".add_user_form");
const btnAnnuler = document.querySelector(".btnAnnuler");
const btnAddUser = document.querySelector(".btnAddUser");

plusIcon.addEventListener('click', function () {
    addUserForm.classList.toggle('hide');
    container.classList.toggle('blur');
});
btnAddUser.addEventListener('click', function () {
    const nom = document.querySelector("#nom").value.trim();
    const username = document.querySelector("#username").value.trim();
    const password = "p1"; 
    const img = "../img/profile14.png";

    if (!nom || !username) {
        alert("Please enter both name and username.");
        return;
    }

    const newUser = {
        nom: nom,
        username: username,
        status: "",
        password: password,
        img: img,
        messages: [],
        contact: []
    };

    users.push(newUser);

    // console.log("New user added:", newUser);
    // console.log("Updated users array:", users);

    printList();

    addUserForm.classList.add('hide');
    container.classList.toggle('blur');

    document.querySelector("#nom").value = "";
    document.querySelector("#username").value = "";
});

btnAnnuler.addEventListener('click', function () {
    addUserForm.classList.toggle('hide');
    container.classList.toggle('blur');
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.searchbar');

    function filterUsers(searchQuery, activeIconClass) {
        const filteredUsers = users.filter(user => {
            const nameMatches = user.nom.toLowerCase().includes(searchQuery.toLowerCase());
            
            const iconMatches = (activeIconClass === 'fa-archive' && user.status === 'archiver') ||
                                (activeIconClass === 'fa-message' && user.status !== 'archiver');
            
            return nameMatches && iconMatches;
        });

        printFilteredList(filteredUsers);
    }

    searchInput.addEventListener('input', function () {
        const searchQuery = this.value.trim();
        const activeIcon = document.querySelector('.option i.active');
        const activeIconClass = activeIcon ? activeIcon.classList[1] : '';
        filterUsers(searchQuery, activeIconClass);
    });

    function printFilteredList(filteredUsers) {
        list.innerHTML = '';

        filteredUsers.forEach(function (usr, i) {
            if (usr.username !== users[posConnectedUser].username) {
                list.innerHTML += `<div class="item"><div class="img-info"><img src="${usr.img}" alt="" class="profilImg"></div><div  onclick="detailsUser(${i})">${usr.nom}</div></div>`;
            }
        });
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////




window.onload = function(){
    container.classList.add('hide');
    add_user_form.classList.add('hide');
}
