const empleados = [
    {
        id: 1,
        nombre: 'Alejandro'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario:1500
    }
]
const getEmpleado = (id, callback) =>{
    return new Promise((resolve, reject) =>{
        const empelado = empleados.find( s => s.id === id)?.nombre;
        (empelado)
            ?resolve(empelado)
            :reject(`No existe el empleado con el id ${id}`);
    });
}
const getSalario = (id, callback) =>{
    return new Promise((resolve, reject) =>{
        const salario = salarios.find( s => s.id === id)?.salario;
        (salario)
            ?resolve(salario)
            :reject(`No hay salarios para la persona con id ${id}`);
    });
  
}
const getInfoUsuarios = async() =>{
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    }catch(error){
        throw error;
    }
   
}
const id = 3;
getInfoUsuarios()
    .then(msg => console.log(msg))
    .catch(err => console.log(err));