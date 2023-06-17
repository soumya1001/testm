let element = document.getElementById("wrapper")

element.addEventListener('click',(event)=>{
    if(event.target.nodeName == 'P'){
        console.log("Dont touch Denger")
        return;
    }
    console.log(event.target.nodeName);
})

for(let i=1; i<=100 ; i++){

    let para = document.createElement('p')
    para.innerText="this is a para";
    element.appendChild(para);
}

document.body.appendChild(element)