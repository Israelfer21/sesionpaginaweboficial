document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);
function iniciarSesion(){
    var sCorreo='';
    var sContrasenna='';
    var bAcceso=false
;
sCorreo=document.querySelector('#txtCorreo').value;
sContrasenna=document.querySelector('#txtContrasenna').value;
bAcceso =validarcredenciales(sCorreo,sContrasenna);
if(bAcceso==true){
    ingresar();

}
}
function ingresar(){
    var rol=sessionStorage.getItem('rolUsuarioactivo');

    switch(rol){
        case'1':
        window.location.href='inicio.html';
        break;
        case'2':
        window.location.href='usuario.html';
        break;
        default:
            window.location.href='iniciosesion.html';
            break;

    }
}