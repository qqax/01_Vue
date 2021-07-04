let navHeaderElem = $('#navbar-header')[0];

//Здравствуйте, {имя}, -приветствие-?

class NavBarHeader {
    constructor(startStr) {
        this.startStr = startStr;
    }

    set fio(name) {
        this.name = name;
        this.updateName();
    }

    get fio() {
        return this.name;
    }

    set greeting(greetMsg) {
        this.greetMsg = greetMsg;
    }

    get greeting() {
        return this.greetMsg;
    }

    get headerHTML() {
        return `<p>${this.startStr}, <span id="userName" style="font-weight: bold">${this.fio}</span>,
        ${this.greeting===undefined || this.greeting=== '' ? 'как сегодня настрой?' : this.greeting}</p>`
    }

    updateName() {
        let nameBlocks = $('#userName');

        for (let elem of nameBlocks) {
            elem.innerText = this.fio;
        }
    }
}

window.onload = function () {
    let Uname;

    let navHeader = new NavBarHeader('Здравствуй');
    let name = localStorage.getItem('UserName');

    if (!name) {
        let newName = prompt('Как к вам обращаться?', 'Dude');
        localStorage.setItem('UserName', newName);
    }

    navHeader.fio = localStorage.getItem('UserName');

    navHeaderElem.innerHTML = navHeader.headerHTML;
    Uname = document.getElementById('userName');

    Uname.addEventListener('click', () => {
        let newName = prompt('Как к вам обращаться?', localStorage.getItem('UserName'));
        localStorage.setItem('UserName', newName);
        navHeader.fio = newName;
    });
}