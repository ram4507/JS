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

/*практика*/
var person = [
],
count_pers = 1,
del_user = '';
function addUser() {
  var user = [
  ];
  user.id = count_pers;
  user.firstName = prompt('Введите имя:');
  user.lastName = prompt('Введите фамилию:');
  user.birthDay = prompt('Дату рождения:');
  phone = [
  ];
  var n = true,
  i = 0;
  while (n == true) {
    phone[i] = prompt('Номер телефона:');
    phone.push(phone[i]);
    n = confirm('имеется еще телефон?');
  };
  phone.pop();
  user.tlf = phone.toString();
  for (var b = 0; b < user.length; ++b) {
    user.push(user[b]);
  }
  user.join(',');
  person.push(user);
}
function csvFormat() {
  var persona = '';
  for (i = 0; i < person.length; i++)
  {
    persona = persona + person[i].id + ';' + person[i].firstName + ';' + person[i].lastName + ';' + person[i].birthDay + ';' + person[i].tlf + ';' + '\n';
  }
  return persona;
}
function deluser(del_user) {
  var id = '',
  n = del_user;
  /*n = parseInt(prompt('Укажите код пользователя ?'));*/
  id = parseInt(person[n - 1].id);
  i = 0
  while (i !== person[n - 1].id) {
    i++
  }
  if (i == person[n - 1].id)
  {
    person.splice(n - 1, 1);
  }
	else{ 
		alert('пользователь с таким кодом не найден');}
  return person[0].lastName;
}

/*поиск по имени,фамилии*/
function search(value,person){
  var nam='';
	var re = new RegExp(value,'i');
   for(var b=0; b<=person.length -1; b++){
     if (С==1) { break;}
     else 
     person.forEach(function(value){
     nam= person[b].firstName;
      if(re.test(nam)){
        nam= person[b].firstName + ' '+person[b].lastName;
        C=1;
        result.push(nam);
        }
       });
  } 
return result;
}
var add = confirm('Внимание!! Добавляем пользователя');
while (add == true) {
  addUser(count_pers);
  count_pers++;
  add = confirm('Будут еще пользователи?');
}

console.log(csvFormat());

var del = confirm('Желаете удалить пользователя?');
while (del == true) {
  del_user = parseInt(prompt('Укажите код пользователя ?'));
  if (del_user >= count_pers | del_user == 0) {
    alert('Пользователя с кодом ' + 'нет');
  } 
  else {
    deluser(del_user);
  }
  del = confirm('Будут еще удаляемые пользователи?');
}
console.log(csvFormat());

var poisk = confirm('Поиск ?');
var result=[], C=0;
while (poisk == true){
   poisk = prompt('Кого ищем? : ')
  poisk = poisk.toLowerCase();
    search(poisk,person);
  if (C==0){
    alert('Такого человека в базе нет');
    poisk = confirm('Продолжим ?')}
    else 
      {console.log(result[0]);
       poisk = confirm('Продолжим ?')
       }}
