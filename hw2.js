"use strict";
//задача 1
var =  1 , Ь =  1 , с, d; // объявляем переменные, первым двум присваиваем значения
c=  ++ а; предупреждение (с); // 2 префикс, выводим уже увеличенное на 1 значение
d = b ++ ; предупреждение (d); // 1 постфикс, выводим текущее значение, а после увеличиваем на 1
c = ( 2 +  ++ а); предупреждение (с); // 5 + 2 эквивалентно а, где а = 2 + 1
d = ( 2 + Ь ++ ); предупреждение (d); // 4 + 2 эквивалентно Ь, где Ь = 2, а после вывода б увеливается на 1
оповещения (а); // 3 здесь а = 3
предупреждение (б); // 3 здесь Ь = 3
			
//задача 2
var =  2 ; // переменной присваивается значение 2
переменная х =  1  + (а * =  2 ); // х = 1 + (а * 2)
предупреждение (х); // х = 5
			
var mass =[];
for (var i = 0; i < 100; i++)
{
	if (i % 3==0 && i % 5==0) 
		mass[i] = "FizzBuzz";

	if (i % 3==0) 
       mass[i] = "Fizz";

	if (i % 5==0) 
        mass[i] = "Buzz";
	}
alert (mass);

//так и не понял, как в консоле смотреть результат и выполнять какие-то операции (например как увидеть результат consol.log()), может чего-то не хватает в раширениях Хрома... Открывается консоль а далее...  туплю видимо//



