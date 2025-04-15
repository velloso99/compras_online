var menuitens = document.getElementById("menuitens");

menuitens.style.maxHeight ="0px";

function menucelular() {
    if(menuitens.style.maxHeight =="0px"){
        menuitens.style.maxHeight ="200px";
    }else{
        menuitens.style.maxHeight ="0px";
    } 
}
var EntrarPainel= document.getElementById("EntrarPainel");
var CadastroSite= document.getElementById("CadastroSite");
var Indicador= document.getElementById("Indicador");

function Cadastro()
{
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";
}
function Entrar()
{
    CadastroSite.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
}







