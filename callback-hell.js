const empleados = [
    {
        id: 1,
        nombre: 'Aleajdnro'
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
    if(empleado){
        callback(null, empleado)
    }else{
        callback(`El empleado con el id ${id } no existe`);
    }
}
const getSAlario = (id, callback) =>{
    const salario = salarios.find( e => e.id ===id )?.salario
    if(salario){
        callback(null,salario);
    }else{
        callback(`El empleado con el id ${id} no existe`);
    }
}
const id = 1;
getEmpleado(id,(err, empleado) =>{
    if(err){
        console.log('Error');
        return console.log(err)
    }
    getSAlario(id,(err, salario)=> {
        if(err){
            console.log('Error');
            return console.log(err);
        }else{
            console.log('El empleado:', empleado, 'tiene un salario de:', salario);
        }
    });
});
