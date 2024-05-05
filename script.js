let insegnanti = [
    {
        nome: "Roberta",
        cognome: "Rosiello",
        img: "https://amamb.it/wp-content/uploads/2021/03/Roberta-Rosiello-Amamb.png",
        citta: "Foggia",
        telefono: "348 9168294",
        email: "robertarosiellocopy@gmail.com",
    },
    {
        nome: "Cristina",
        cognome: "Paveri",
        img: "",
        citta: "Galatone (LE)",
        telefono: "380 1572879",
        email: "cristinapaveri@alice.it",
    },
    {
        nome: "Franca",
        cognome: "Zavatta",
        img: "",
        citta: "Ascoli Satriano(FG)",
        telefono: "389 1815693",
        email: "francesca.zavatta@virgilio.it",
    },
    {
        nome: "Mariacarla",
        cognome: "Cosenza",
        img: "",
        citta: "Foggia",
        telefono: "349 5927878",
        email: "mariacarlacosenza@tiscali.it",
    },
    {
        nome: "Francesca",
        cognome: "Iuspa",
        img: "",
        citta: "Foggia",
        telefono: "347 2450015",
        email: "francesca.iuspa@tiscali.it",
    },
    {
        nome: "Lucia",
        cognome: "Miglionico",
        img: "",
        citta: "San Giovanni Rotondo (FG)",
        telefono: "339 8720137",
        email: "lucia.miglionico82@gmail.com",
    },
    {
        nome: "Maria Gabriella",
        cognome: "Turrin",
        img: "",
        citta: "Deliceto (FG)",
        telefono: "3479851524",
        email: "m.gabriella@yahoo.it",
    },
]

const elencoIns = document.querySelector('.elenco-insegnanti')

/* forEach insegnanti */

insegnanti.forEach(el => {
    if(el.img === ""){
        el.img = "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
    }
    let insegnHTML = `
    <div class="bg-slate-200 w-[200px] mx-auto p-5 rounded-xl my-5 flex flex-col items-center gap-3">
        <img class="rounded-full" src=${el.img} />
        <div class="flex gap-1" >
        <h2 class="font-bold">${el.nome}</h2>
        <h2 class="">${el.cognome}</h2>
        </div>
        <h2>${el.citta}</h2>
        <h2>${el.telefono}</h2>
    </div>
        `
    elencoIns.innerHTML += insegnHTML
});

/* Bottone copia CF */

const copyBtn = document.querySelector('.copy-btn')
const input = document.querySelector('.input-cf')
copyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(input.value)
    copyBtn.textContent = 'Copiato!'
    setTimeout(() => {
        copyBtn.textContent = 'Copia'
    }, 1500);
})

/* Gestione chiusura menù */

const navLinks = document.querySelector('.navlinks')
const menuBtn = document.getElementById('menuBtn')

function handleMenu(e){

    e.classList.value = e.classList.value === "text-xl ri-menu-line md:hidden" ? "text-xl ri-close-line md:hidden" : "text-xl ri-menu-line md:hidden"

    console.log(e.classList.value)

    navLinks.classList.toggle('left-[0%]')
}

function linkClicked(){
    
    navLinks.classList.remove('left-[0%]')

    menuBtn.classList.value= "text-xl ri-menu-line md:hidden"
    console.log(menuBtn.classList.value)
}