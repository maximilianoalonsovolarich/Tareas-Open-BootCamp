const hoy = new Date();

const nacimiento = new Date(1990, 11, 05);

const comparacion = hoy > nacimiento;

const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anyoNacimiento = nacimiento.getFullYear();
