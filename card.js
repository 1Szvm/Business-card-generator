function display(Obj){
    if(document.getElementById(`${Obj.id}`).value==""){
        document.getElementById(`${Obj.id}output`).innerHTML=Obj.placeholder
    }else{
        document.getElementById(`${Obj.id}output`).innerHTML=document.getElementById(`${Obj.id}`).value
    }
}

function orient(){
    document.querySelector(".bcard").classList.toggle("sideway")
}

function textalign(Obj){
    document.getElementById("nameoutput").style.textAlign=Obj.id
    document.getElementById("joboutput").style.textAlign=Obj.id
    document.getElementById("emailoutput").style.textAlign=Obj.id
    document.getElementById("numberoutput").style.textAlign=Obj.id
    document.getElementById("addresoutput").style.textAlign=Obj.id
    document.getElementById("weboutput").style.textAlign=Obj.id
}

function fsize(){
    const ptag = document.querySelectorAll("p")
    document.getElementById("nameoutput").style.fontSize=`${parseInt(document.getElementById("fSize").value)+16}px`
    document.getElementById("joboutput").style.fontSize=`${parseInt(document.getElementById("fSize").value)+10}px`
    ptag.style.fontSize=`${parseInt(document.getElementById("fSize").value)}px`
}