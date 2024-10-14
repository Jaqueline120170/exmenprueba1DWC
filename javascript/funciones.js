export function creaImagen() {
    // Función que crea un elemento imagen, completa sus clases y el src
    const imagen = document.createElement('img'); // Crea el elemento img
    imagen.className = "img-fluid"; // Asigna la clase
    imagen.src = "./imagenes/elcano.jpg"; // Usa la variable correcta para establecer el src
    imagen.alt = "Descripción de la imagen"; // Agrega un atributo alt para accesibilidad
    // Devuelve el elemento imagen
    return imagen;
}


export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array
    const table =document.createElement('table')
    const tr=document.createElement('tr');
    const th1=document.createElement('th');
    th1.innerText='Categoría'
    const th2=document.createElement('th');
    th2.innerText="Velocidad";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    arrayHuracanes.forEach(item=> {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerText=item.cat;
        td2.innerText=item.vel;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    })
    table.className="table";
    return table;
}

export function creaParrafo() {
    const parrafo = 'Este es mi <b>párrafo</b>, que guay!';
    let p = document.createElement('p');
    p.innerHTML = parrafo;
    return p;
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    const ul =document.createElement('ul');
    ul.className="list-group";
    //por cada fruta en la lista añado un elemento li a ala lista ul
    lista.forEach(fruta=>{
        const li = document.createElement('li');
        li.innerText=fruta;
        li.className="list-group-item"
        ul.appendChild(li);
    });
    //devuelvo la lista
    return li;
}
