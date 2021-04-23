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
    const empleado = empleados.find( e => e.id === id)?.nombre;
    const promesa = new Promise((resolve, reject)=>{
        (empleado)
            ?resolve(empleado)
            :reject(`No existe el empleado con el id ${id}`);
       
    }); 
    return promesa;
}
const getSalario = (id, callback) =>{
    const salario = salarios.find( s => s.id === id)?.salario;
    const promesa = new Promise((resolve, reject)=>{
        (salario)
            ?resolve(salario)
            :reject(`No hay salarios para la persona con id ${id}`);
    });
    return promesa;
}
const id = 1;
//getEmpleado(id)
//    .then(empleado =>  console.log(empleado))
//    .catch(err => console.log(err));

//getSalario(id)
//    .then(salario => console.log(salario))
//    .catch(err => console.log(err));
/*
getEmpleado(id)
    .then(empleado =>{
        getSalario(id)
            .then(salario =>{
                console.log('El empleado:', empleado, 'tiene un salario de: ', salario);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
*/
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));
