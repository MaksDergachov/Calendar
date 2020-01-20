now = new Date()
time = now.getHours() + ':' + now.getMinutes()

x = document.createElement('h1')
x.innerText = time
document.body.append(x)
