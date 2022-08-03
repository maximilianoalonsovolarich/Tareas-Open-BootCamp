const compra = ["pan", "leche", "Arroz", "Miel", "Yogures"];

compra.push("Aceite de Soja");
compra.pop();

const peliculas = [
  {
    titulo: "La última piedra",
    director: "Jhons berns",
    fecha: new Date(2000, 10, 23),
  },
  {
    titulo: "Harry: No debes llorar",
    director: "Elias Carrion",
    fecha: new Date(2009, 1, 7),
  },
  {
    titulo: "El principe",
    director: "Azul alsarantino",
    fecha: new Date(2005, 2, 13),
  },
];

const peliculasNuevas = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);

const directores = peliculas.map((pelicula) => {
  return pelicula.director;
});
const titulos = peliculas.map((pelicula) => {
  return pelicula.titulo;
});
const directores_titulos = directores.concat(titulos);
const directores_titulos_prop = [...directores, ...titulos];
