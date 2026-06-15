const API_URL = "https://tienda-ropa-backend-68ny.onrender.com/prendas";

async function guardarPrenda(){

const prenda={
nombre:document.getElementById('nombre').value,
categoria:document.getElementById('categoria').value,
talla:document.getElementById('talla').value,
precio:Number(document.getElementById('precio').value),
stock:Number(document.getElementById('stock').value),
imagen:document.getElementById('imagen').value
};

await fetch(API_URL,{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify(prenda)
});

cargarPrendas();
}

async function cargarPrendas(){

const respuesta=await fetch(API_URL);
const prendas=await respuesta.json();

const catalogo=document.getElementById('catalogo');

catalogo.innerHTML='';

prendas.forEach(prenda=>{

catalogo.innerHTML += `

<div class="card">
<img src="${prenda.imagen}">
<h3>${prenda.nombre}</h3>
<p>${prenda.categoria}</p>
<p>Talla: ${prenda.talla}</p>
<p>$${prenda.precio}</p>
<p>Stock: ${prenda.stock}</p>
</div>
`;

});
}

cargarPrendas();
