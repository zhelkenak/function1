let num = 1;

function func() {
	num = 2;
}
func();

console.log(num);
///
let nyam = 1;

function funky() {
	nyam = 6;
}
funky();

console.log(nyam);

function sayHello() {
  console.log("Привет, студент!");
}

sayHello();
sayHello();


function greet(name) {
  console.log("Привет, " + name);
}

greet("Алия");
greet("Данияр");

function add(a, b) {
  return a + b;
}

let result = add(10, 5);
console.log(result);

function welcome() {
  console.log("Добро пожаловать на урок JavaScript!");
}

welcome();
welcome();

function square(number) {
  return number * number;
}

console.log(square(4));
console.log(square(7));
console.log(square(10));

function sum(a, b) {
  return a + b;
}

console.log(sum(15, 25));

function rectangleArea(width, height) {
  return width * height;
}

console.log(rectangleArea(5, 8));

function checkEven(number) {
  if (number % 2 === 0) {
    return "Чётное";
  } else {
    return "Нечётное";
  }
}

console.log(checkEven(12));
console.log(checkEven(7));

function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешён";
  }
  return "Доступ запрещён";
}

console.log(checkAge(20));
console.log(checkAge(16));

function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(80, 90, 100));

function calculator(a, b, operation) {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;

  if (operation === "/") {
    if (b === 0) return "Деление на ноль!";
    return a / b;
  }

  return "Неизвестная операция";
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));

function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Некорректный балл";
  }

  if (score >= 90) {
    return "Отлично";
  } else if (score >= 70) {
    return "Хорошо";
  } else if (score >= 50) {
    return "Удовлетворительно";
  } else {
    return "Неудовлетворительно";
  }
}

console.log(getGrade(95));
console.log(getGrade(78));
console.log(getGrade(45));

function calculatePrice(price) {
  if (price >= 20000) {
    return price * 0.9;
  }

  return price;
}

console.log(calculatePrice(15000));
console.log(calculatePrice(30000));

function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

console.log(findMax(12, 45, 28));

function checkAccess(age, registered, permission) {
  if (age >= 16 && registered && permission) {
    return "Доступ в лабораторию разрешён";
  }

  return "Доступ запрещён";
}

console.log(checkAccess(17, true, true));
console.log(checkAccess(15, true, true));
console.log(checkAccess(18, true, false));

function square(number) {
  return number * number;
}

console.log(square(6));

function sum(a, b) {
  return a + b;
}
console.log(sum(40, 40));

function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(minutesToSeconds(2)); 

function rectangleArea(side) {
  return side * side;
}
console.log(rectangleArea(7)); 

function checknumber(num) {
  if (num % 2 === 0) {
    return "Чётное";
  } else {
    return "Нечётное";
  }
}

console.log(checknumber(12));
console.log(checknumber(7));

function checkAge(age) {
  if (age >= 18) {
    return "совершеннолетний";
  }
  return "несовершеннолетний";
}
console.log(checkAge(17));

function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

console.log(findMax(12, 45, 30));