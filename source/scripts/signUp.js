/*~~~~~~~~~~~~~~~~~~~~~~~~~~~ Database for each list ~~~~~~~~~~~~~~~~~~~~~~~~*/
/* 
List for which signup sheet to add.
0 = Stage18 Thur / storageZero
1 = Stage18 Sat  / storageOne
2 = Stage18 Sun  / storageTwo
3 = Drive Thur   / storageThree
4 = Drive Fri    / storageFour
*/
let storageZero = new Array(24).fill({});
let listZero = document.getElementById("sbthur");

let storageOne = new Array(12).fill({});
let listOne = document.getElementById("sbsat");

let storageTwo = new Array(24).fill({});
let listTwo = document.getElementById("sbsun");

let storageThree = new Array(18).fill({});

let listThree = document.getElementById("dbthur");

let storageFour = new Array(18).fill({});
let listFour = document.getElementById("dbfri");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Universal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Constructor
function player(name, pass, num) {
    this.playerName = name;
    this.password = pass;
    this.list = num;
}

// Sets all form to invisible on click
const cancelButtons = document.querySelectorAll(".btnCancel");
cancelButtons.forEach((cancelButton) => {
    cancelButton.addEventListener("click", event => {
        signUpForm.style.display = "none";
        cancelForm.style.display = "none";
        body.style.overflow = "visible";
    });
});

// Sets forms to invisible 
const body = document.querySelector("#body"); // This is just here
const cancelForm = document.querySelector(".cancelWrap");
const signUpForm = document.querySelector(".formWrap");
cancelForm.style.display = "none";
signUpForm.style.display = "none"; 

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Cancel Button Section ~~~~~~~~~~~~~~~~~~~~~~ */

// remove function
function remove(check, i, list) {
    if (list == 0) {
        if (storageZero[i].password == check) {
            const lists = listZero.getElementsByTagName("li");
            storageZero[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 1) {
        if (storageOne[i].password == check) {
            const lists = listOne.getElementsByTagName("li");
            storageOne[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 2) {
        if (storageTwo[i].password == check) {
            const lists = listTwo.getElementsByTagName("li");
            storageTwo[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 3) {
        if (storageThree[i].password == check) {
            const lists = listThree.getElementsByTagName("li");
            storageThree[i] = {};
            lists[i].innerHTML = "";
        }
    } else if (list == 4) {
        if (storageFour[i].password == check) {
            const lists = listFour.getElementsByTagName("li");
            storageFour[i] = {};
            lists[i].innerHTML = "";
        }
    }
}

// Cancel Form Submission
cancelForm.addEventListener("submit", (event) => {

    const cancelPin = cancelForm.elements["cPin"];
    const index = cancelForm.elements["cancelIndex"];
    const cList = cancelForm.elements["cancelList"];

    let pin = cancelPin.value;
    let i = index.value;
    let list = cList.value;

    remove(pin, i, list);
    cancelForm.style.display = "none";
    body.style.overflow = "visible";
});

// Gets info for the cancel form and make it visible.
function prepCancelForm(list, i) {

    const cList = document.getElementById("getCancelList");
    const cIndex = document.getElementById("getIndex");
    cList.value = list;
    cIndex.value = i;

    cancelForm.style.display = "";
    body.style.overflow = "hidden";
}

// Creates cancellation button
function createBtn(index, listNum) {
    const btn = document.createElement("button");
    btn.setAttribute("index", index);
    btn.setAttribute("list", listNum);

    btn.addEventListener("click", (event) => {
        prepCancelForm(btn.getAttribute("list"), btn.getAttribute("index"));
    });

    const bNode = document.createTextNode("X");
    btn.appendChild(bNode);
    return btn;
}

function closeCancel() {
    cancelForm.style.display = "none";
    body.style.overflow = "visible";
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create Player Section ~~~~~~~~~~~~~~~~~~~~~~ */

// Prints player name into html and creates cancel button
function print(player, i) {
    if (player.list == 0) {
        const lists = listZero.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 1) {
        const lists = listOne.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 2) {
        const lists = listTwo.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 3) {
        const lists = listThree.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    } else if (player.list == 4) {
        const lists = listFour.getElementsByTagName("li");
        lists[i].innerHTML = player.playerName;
        let cancelBTN = createBtn(i, player.list)
        lists[i].appendChild(cancelBTN);
    }
}

// Checks for closest empty object
function checkSpace(a) {
    for (let i = 0; i < a.length; i++) {
        if (Object.keys(a[i]).length === 0) {
            return i;
        }
    }

    return false;
}

// Appends player object into array 
function update(player) {
    if (player.list == 0) {
        let check = checkSpace(storageZero);
        if (check !== false) {
            storageZero.splice(check, 1, player);
            pushObj(player, check);
            print(player, check);
        }
    } else if (player.list == 1) {
        let check = checkSpace(storageOne);
        if (check !== false) {
            storageOne.splice(check, 1, player);
            pushObj(player, check);
            print(player, check);
        }
    } else if (player.list == 2) {
        let check = checkSpace(storageTwo);
        if (check !== false) {
            storageTwo.splice(check, 1, player);
            pushObj(player, check);
            print(player, check);
        }
    } else if (player.list == 3) {
        let check = checkSpace(storageThree);
        if (check !== false) {
            storageThree.splice(check, 1, player);
            pushObj(player, check);
            print(player, check);
        }
    } else if (player.list == 4) {
        let check = checkSpace(storageFour);
        if (check !== false) {
            storageFour.splice(check, 1, player);
            pushObj(player, check);
            print(player, check);
        }
    }
}

// Create sign up Form submission
signUpForm.addEventListener("submit", (event) => {
    const name = signUpForm.elements["playerName"];
    const passw = signUpForm.elements["pin"];
    const listNum = signUpForm.elements["listNum"];

    let playerName = name.value;
    let pin = passw.value;
    let list = listNum.value;

    const person = new player(playerName, pin, list);
    signUpForm.style.display = "none";
    body.style.overflow = "visible";

    update(person);
});

// Gathers info for sign up form
function createPlayer(num) {
    signUpForm.style.display = "";
    const list = document.getElementById("getListNum");
    list.value = num;
    body.style.overflow = "hidden";
}

function closeSignUp() {
    signUpForm.style.display = "none";
    body.style.overflow = "visible";
}

///////////////////////////////////////////////////// MOVE THE GODDAMN FKING FORMS AND MAKE THE NO NO AND YES YES FORM