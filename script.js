function getText() {
    return imput.value
}


// function addParagraph(text) {
//     p = document.createElement('p')
//     document.body.append(p)
//     p.innerText = text

// }

function handleKeydown(event) {
    if (event.key == 'Enter') { 
        addActivity({name: getText(), mins: 0})
        activities.push({name: getText(), mins: 0})
    }

}

imput.onkeydown = handleKeydown

activities = [
    {name: 'Практика программирования', mins: 0}, 
    {name: 'Теория программирования', mins: 0},
    {name: 'Английский', mins: 0}
] 
activities.forEach(addActivity)

function addActivity(activity) {
    const div = document.createElement('div')
    acts.append(div)
    const span = document.createElement('span')
    const input = document.createElement('input')
    input.onkeydown = handleEnterMin
    input.type = 'number'
    div.append(span, input)
    span.innerText = activity.name
}

function handleEnterMin(event) {
    if (event.key == 'Enter') {
        const name = event.target.previousSibling.innerText
        console.log(name)
        
        let i = 0
        while (i < activities.length) {
            if (activities[i].name == name) var activity = activities[i]
            i++
        }
        console.log(activity)
    //найти в массиве действие, соответствующее этому инпуту
    // увеличить его свойство "Минс" на значение этого инпута
    }
}

