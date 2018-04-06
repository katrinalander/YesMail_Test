var people = [
    { name: 'John', parent: 'Sue' },
    { name: 'Jack', parent: 'Steve' },
    { name: 'Jill', parent: 'Sally' },
    { name: 'Wayne', parent: 'Jack' },
    { name: 'Twinkle', parent: 'Jack' },
    { name: 'Garth', parent: 'Sue' },
    { name: 'Steve', parent: 'Alejandro' },
    { name: 'Peter', parent: 'Alejandro' }
];

printPeopleArr(people);

function child (member){ // Function to find a child for each member
    var children = [];
    people.forEach(function(person, index){
        if(person.parent === member.parent) {
            children.push({name: person.name, children:[]});
            if(children.length > 1){ // remove duplicate
                people.splice(index,1);
            }
        }
    });
    var newMember = {name: member.parent, children: children};
    return newMember;
}

function printPeopleArr(arr) { // Function to print array of people to html
    arr.forEach(function (p, index) {
        var newElement = document.createElement('div');
        newElement.id = 'person'+index;
        newElement.innerHTML = '<b>Name: </b>'+ p.name+'<b>  Parent: </b>'+ p.parent;
        if(document.getElementById('current') !== null) {
            document.getElementById('current').appendChild(newElement);
        }
    });
}

function printUpdated(arr) { // Function to show updated array of people relationship
    arr.forEach(function (p, index) {
        var newElement = document.createElement('div');
        newElement.id = 'upPerson'+index;
        var ch = printChild(p.children,index);
        newElement.innerHTML = '<b>Name: </b>'+ p.name+'<b>  Children: </b>'+ ch;
        if(document.getElementById('current') !== null) {
            document.getElementById('updated').appendChild(newElement);
        }
    });
}

function printChild(arr,ind) { // Function to print childrens array for each parent
    var newElement = document.createElement('span');
    newElement.id = 'child'+ind;
    arr.forEach(function (p) {
        var elm = document.createElement('span');
        var children = (p.children.length === 0) ? "[]" : p.children;
        elm.innerHTML = ' (name: '+p.name+' children: '+children+')';
        newElement.appendChild(elm);
    });
    return newElement.innerHTML;
}

var family = people.map(child);
printUpdated(family);