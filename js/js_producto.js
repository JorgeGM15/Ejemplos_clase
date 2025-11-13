//componente mejorado

const productos = [
    {nombre:"gorra", precio: 2000, img:"https://formulaentreamigos.com/wp-content/uploads/2025/02/701233006001_PP_1_FERRARI_026280_01-scaled.jpg"},
    {nombre:"playera", precio: 2500, img:"https://formulaentreamigos.com/wp-content/uploads/2025/02/5.png"},
    {nombre:"gorra", precio: 2000, img:"https://formulaentreamigos.com/wp-content/uploads/2025/02/701233006001_PP_1_FERRARI_026280_01-scaled.jpg"},
    {nombre:"playera", precio: 2500, img:"https://formulaentreamigos.com/wp-content/uploads/2025/02/5.png"},
    {nombre:"gorra", precio: 2000, img:"https://formulaentreamigos.com/wp-content/uploads/2025/02/701233006001_PP_1_FERRARI_026280_01-scaled.jpg"},
    {nombre:"playera", precio: 2500, img:"https://formulaentreamigos.com/wp-content/uploads/2025/02/5.png"},
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});