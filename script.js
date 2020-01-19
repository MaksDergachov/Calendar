function getText() {
    return imput.value
}


function addParagraph(text) {
    p = document.createElement('p')
    document.body.append(p)
    p.innerText = text

}

function handleKeydown(event) {
    if (event.key == 'Enter') { 
        addActivity(getText())
        activities.push(getText())
    }

}

imput.onkeydown = handleKeydown

activities = ['Практика программирования','Теория программирования', 'Английский']
activities.forEach(addActivity)

function addActivity(name) {
    div = document.createElement('div')
    acts.append(div)
    span = document.createElement('span')
    input = document.createElement('input')
    input.type = 'number'
    div.append(span, input)
    span.innerText = name
}
