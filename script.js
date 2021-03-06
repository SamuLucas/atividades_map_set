// Atividade 1 - Map

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));

// Atividade 2 - Set

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    return [...mySet];
}
console.log(valoresUnicos(meuArray));