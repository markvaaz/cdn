document.create = function create(el, atributos, appendTo){
  let elemento = document.createElement(el);
  
  for(let atributo in atributos){
    if(atributo == "appendChild"){
      atributos[atributo].forEach(child => {
        elemento.appendChild(child);
      });
    }else if(atributo == "addEventListener"){
       elemento.addEventListener(atributos[atributo].event, atributos[atributo].function);
    }else{
      if(elemento[atributo] !== null && elemento[atributo] !== undefined){
        elemento[atributo] = atributos[atributo];
      }
    }
  }
  if(appendTo){
    appendTo.appendChild(elemento)
  }
  return elemento;
}