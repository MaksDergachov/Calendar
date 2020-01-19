function getText(){
    return imput.value
}

function addParagraph (text){
    p - document.createElement ('p')
    document.body.append(p) 
    p.innerText = text
}

function handleKeydown(event){
    if(event.key == 'Enter') addParagraph()
}

imput.onkeydown = handleKeydown