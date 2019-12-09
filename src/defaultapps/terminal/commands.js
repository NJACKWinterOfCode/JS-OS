export var tree = (res) => {
    var element = document.createElement("div");
    element.appendChild(document.createTextNode('user@root:~$ tree'))
    for(let i=0;i<4;i++){
        var terminalOutput=document.getElementById('terminalOutput');
        var content = document.createElement("div")
        console.log(res.contents[i].name)
        element.appendChild(content)
        content.appendChild(document.createTextNode('|-'+res.contents[i].name))
        terminalOutput.append(element)
    }
}

export var ls = (res) => {
    var element = document.createElement("div")
    element.appendChild(document.createTextNode('user@root:~$ ls'))
    var content = document.createElement("br")
    element.appendChild(content)
    for(let i=0;i<4;i++){
        var terminalOutput=document.getElementById('terminalOutput');
        console.log(res.contents[i].name)
        element.appendChild(document.createTextNode(res.contents[i].name + ' '))
        terminalOutput.append(element)
    }
}


