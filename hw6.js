function arrayTolist() {
  var spis = null;
  for (i = mas.length - 1; i >= 0; i--) {
    spis = {
      value: mas[i],
      rest: spis
    }
  }
  return spis;
}
function listToarray() {
  var spis = prompt('Введите элементы списка:');
  var elem = 0;
  while (elem != spis.length) {
    mas1.push(spis.charAt(elem));
    elem++;
  }
  return mas1;
}
function prepend(){
  elem = prompt('Введите элемент:');
  mas = {value: elem,rest: mas};
  return mas;
}
function nth(elem, txt) {
  var smb = '';
  if (elem <= txt.length) {
    smb = txt.charAt(elem);
  } 
  else {  smb = undefined;  }
  return smb;
}

function reverseArray(mas1)
{
	var mas2 = [];
	for (i = mas1.length - 1; i >= 0; i--)
	{
		mas2.push(mas1[i]);
	}
	return mas2;
}

function reverseArrayInPlace(mas1)
{ var dl=0, elem;
   dl = mas1.length-1;
   ndl = dl/2;
  for (i = 0; i <= ndl; i++){
    elem = mas1[i];
    mas1[i] = mas1[dl-1];
    mas1[dl-1] = elem;
   }
return mas1;   
}
var mas = [],mas1 = [],txt = '';
mas = prompt('Введите элементы масссива:');
console.log(arrayTolist(mas));
console.log(listToarray(mas1));
console.log(prepend(mas));
var elem = prompt('номер позиции в списке?')
txt = mas.value + mas.rest;
console.log(nth(elem, txt));
console.log(reverseArray(mas1));
console.log(reverseArrayInPlace(mas1));


/*функция pick(obj,keys)*/
function pick(obj, keys) {
  var str = '';
  for (var i = 0; i <= keys.length - 1; i++) {
    if ((keys[i] in user) != false) {
      str = (keys[i] + ': ' + user[keys[i]]);
      person.push(str);
    }
  }
}
var user = {
  name: 'Sergey',
  age: 30,
  email: 'sergey@gmail.com',
  friends: ['Sveta','Artem']
}
var keys = ['name','second name','age','email','friends'];
var person = [];
pick(user, keys);
console.log(person);
