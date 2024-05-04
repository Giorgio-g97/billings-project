let insegnanti = [
    {
        nome: "Roberta",
        cognome: "Rosiello",
        img: "https://amamb.it/wp-content/uploads/2021/03/Roberta-Rosiello-Amamb.png",
        citta: "Foggia",
        telefono: "",
        email: "",
    },
    {
        nome: "Cristina",
        cognome: "Paveri",
        img: "",
        citta: "Galatone (LE)",
        telefono: "",
        email: "",
    },
    {
        nome: "Francesca",
        cognome: "Iuspa",
        img: "",
        citta: "Foggia",
        telefono: "",
        email: "",
    },
    {
        nome: "Roberta",
        cognome: "Rosiello",
        img: "",
        citta: "Foggia",
        telefono: "",
        email: "",
    },
    {
        nome: "Roberta",
        cognome: "Rosiello",
        img: "",
        citta: "Foggia",
        telefono: "",
        email: "",
    },
]

const elencoIns = document.querySelector('.elenco-insegnanti')

/* forEach insegnanti */

insegnanti.forEach(el => {
    let insegnHTML = `
    <div class="bg-slate-200 w-[200px] mx-auto p-5 rounded-xl my-5 flex flex-col items-center gap-3">
        <img src=${el.img} />
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
    }, 3000);
})

/* Gestione chiusura menù */

const navLinks = document.querySelector('.navlinks')

function handleMenu(e){

    e.classList.value = e.classList.value === "text-xl ri-menu-line md:hidden" ? "text-xl ri-close-line md:hidden" : "text-xl ri-menu-line md:hidden"

    console.log(e.classList.value)

    navLinks.classList.toggle('top-11')
}