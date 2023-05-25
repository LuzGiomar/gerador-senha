
let sliderElement=document.querySelector("#slider");
let buttonElement=document.querySelector("#button");

let sizePassword=document.querySelector("#valor");
let password=document.querySelector("#password")

let containerPassword = document.querySelector("#container_password");

let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novasenha="";

sizePassword.innerHTML = sliderElement.value;

slider.oniput = function(){
sizePassword.innerHTML = this.value;
}

function geratePassaword(){

    let pass="";

    for(let i = 0, n = charset.length; i < sliderElement.Value; ++i){
        pass += charset.charArt (Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword{
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}


