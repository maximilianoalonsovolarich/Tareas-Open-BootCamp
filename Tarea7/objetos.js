const datos = {
  nombre: "Maximiliano",
  apellido: "Alonso",
  edad: 32,
  altura: 82,
  eresDesarrollador: true,
};

const edad = datos.edad;
const lista = [
  {
    ...datos,
  },
  {
    nombre: "Tomás",
    apellido: "Rancio",
    edad: 23,
    altura: 18,
    eresDesarrollador: true,
  },
  {
    nombre: "Celeste",
    apellido: "Julisis",
    edad: 31,
    altura: 145,
    eresDesarrollador: false,
  },
];

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);
