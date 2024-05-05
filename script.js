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
    <div class="bg-slate-200 w-[215px] mx-auto p-5 rounded-xl my-5 flex flex-col items-center gap-1">
        <img class="rounded-full" src=${el.img} />
        <div class="flex gap-1" >
        <h2 class="font-bold">${el.nome}</h2>
        <h2 class="">${el.cognome}</h2>
        </div>
        <h2>${el.citta}</h2>
        <p class="w-[100%] text-xs text-center">${el.email}</p>
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

    // e.classList.value = e.classList.value === "text-xl ri-menu-line md:hidden" ? "text-xl ri-close-line md:hidden" : "text-xl ri-menu-line md:hidden"

    if(e.classList.value === "text-xl ri-menu-line md:hidden"){
        e.classList.value = "text-xl ri-close-line md:hidden"
        gsap.from("ul li a",{ left:-10 , opacity:0, duration: 0.4, stagger: 0.2})
    }else{
        e.classList.value = "text-xl ri-menu-line md:hidden"
    }


    console.log(e.classList.value)

    navLinks.classList.toggle('left-[0%]')
}

function linkClicked(){
    
    navLinks.classList.remove('left-[0%]')

    menuBtn.classList.value= "text-xl ri-menu-line md:hidden"
    console.log(menuBtn.classList.value)
}

// Animazioni GSAP

gsap.to("#chiSiamo", { opacity: 1, top: 0, duration: 1, delay: 0.5, ease: "power3.out" }) //Chi siamo
gsap.to("#textHero", { opacity: 1, duration: 0.5, bottom: 4, ease: "power1.out" }) // Hero Text