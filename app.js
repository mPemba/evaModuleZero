var getName = document.getElementById("getName")
getName.addEventListener('click', function() {
  addName();
});

var getToys = document.getElementById("getToys")
getToys.addEventListener('click', function() {
  addToys();
});

var dog = {
  name: "cooper", 
  age: 1,
  gay: true,
  toys: ['bone ', 'seal ', 'unicorn '],
}

function addName () {
  var dogName = document.getElementById("dogName");

  if (dog.name === 'cooper') {
    var name = document.createTextNode(dog.name);
  } else {
    var name = document.createTextNode('error');
  }

  dogName.appendChild(name);
}

function addToys() {
  var dogToys = document.getElementById("dogToys");

  for (var i = 0; i < dog.toys.length; i++) {
    var toy = document.createTextNode(dog.toys[i]);
    dogToys.appendChild(toy);
  }
}
