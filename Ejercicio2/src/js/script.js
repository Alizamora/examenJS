/**
 * Ejercicio #2
 * 
 */


document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const texto = document.getElementById('texto').value;
    const estilo = document.getElementById('estilo').value;
    const color = document.getElementById('color').value;
    
    //Creo las expresiones regular para el color
    const re = /^\#[\da-zA-Z]{6}/;

    //Si retorna True
    if (re.test(color)) {

        //Creo un parrafo
        const p = document.createElement('p');
        
        switch(estilo){
            case "Normal":
            p.style.setProperty('font-style','normal');
            break;
            case "Cursiva":
            p.style.setProperty('font-style','italic');
            break;
            case "Negrita":
            p.style.setProperty('font-weight', 'bold');      
            break;
            default:
            p.style.setProperty('font-weight', 'normal');
            p.style.setProperty('font-style','normal');
        }

        //Creamos elementos para que se agreguen en la DOM
        p.innerHTML = texto;
        p.style.setProperty('color', color);
        let div = document.getElementById('contenedor')
        div.appendChild(p);
    } else {
        alert('Color invalido');
    }
    
})

