const deadpool = {
    nombre: 'wade',
    apellido: 'Wilson',
    poder: 'regeneracion',
    edad:50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}
const {nombre, apellido, poder, edad = 0} = deadpool;
console.log(nombre, apellido, poder, edad);