/*задание 1*/
var a = '',b = '',c = '';
a = parseInt(prompt('введите число от 0 до 255'));
b = parseInt(prompt('введите число от 0 до 255'));
c = parseInt(prompt('введите число от 0 до 255'));
function colorRGB(a, b, c) {
  var result = a.toString(16) + b.toString(16) + c.toString(16);
  return ('#' + result.toUpperCase());
}
colorRGB(a, b, c);
console.log(colorRGB(a, b, c));

/*задание 2*/
var a = '';
a = parseInt(prompt('введите число от 0 до 999'));
function transform(a) {
  var obj = {
  };
  if (a <= 999) {
    obj['сотни'] = a / 100 | 0;
    obj['десятки'] = a % 100 / 10 | 0;
    obj['единицы'] = a % 10 | 0;
    return obj;
  } else {
    console.log('введенное число превышает значение 999');
    return obj;
  }
}
console.log(transform(a));




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
