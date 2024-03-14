const usuarios  = [
    {id:1, correo: "sucap@saet.cw", user: "Victor Vasquez", password: "rxalg"},
    {id:2, correo: "jose_perez@hotmail.com", user:"Jose Perez", password: "P4rrot0"},
    {id:3, corre: "wubu@muvi.vn", user: "Effie Parks", password: "ificfjf"}
    
];
function validarUsuario(correo, pass) {
    // Buscar el usuario en la lista
    const usuarioEncontrado = 
    usuarios.find(usuario => usuario.correo === correo && usuario.password === pass);

    // Si se encontró un usuario, retornar verdadero; de lo contrario, retornar falso
    return usuarioEncontrado !== undefined;
}

module.exports = {
    validarUsuario
};


