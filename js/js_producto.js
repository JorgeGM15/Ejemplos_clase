//componente mejorado

const productos = [
    {nombre:"taza", precio:50, img:"https://m.media-amazon.com/images/I/61-gPGG7umL.jpg"},
    {nombre:"playera", precio:2500, img:"https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/3021008-0303V1.jpg"}
    
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>"
    `;

    contenedor.appendChild(card);
});