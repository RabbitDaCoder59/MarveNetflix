const margin = Array.from(document.querySelectorAll('.icon'));
const dropdown = document.querySelectorAll('.frq-que');

margin.forEach((box, index) => {
    box.addEventListener('click', () => {
        const parent = box.parentElement.parentElement
        console.log({parent})
        margin.filter((_, i) => i !== index ).forEach((m) => {
            const p = m.parentElement.parentElement
            p.classList.remove("margin")
        })
        // dropdown.forEach((d) => d.classList.remove("hide"))

        parent.classList.toggle('margin')
        dropdown[index].classList.toggle("hide")
    })
})


