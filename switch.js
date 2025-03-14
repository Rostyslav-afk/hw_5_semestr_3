// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const whatWant = prompt("Що ви хочете (на вибрів: Кава, Чай або Сік)");
switch (whatWant.toLowerCase().trim()) {
    case "кава":
        alert("За декілька хвилин вам принесуть Каву!");
        break;
    case "чай":
        alert("За декілька хвилин вам принесуть Чай!");
        break;
    case "сік":
        alert("За декілька хвилин вам принесуть Сік!");
        break;
    default:
        alert("В нас такого немає(");
        break;
}
// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const whatDay = prompt("Виберіть день тижня");
switch (whatDay.toLowerCase().trim()) {
    case "понеділок":
        alert("Сьогодні робочий день!");
        break;
    case "вівторок":
        alert("Сьогодні робочий день!");
        break;
    case "середа":
        alert("Сьогодні робочий день!");
        break;
    case "четверг":
        alert("Сьогодні робочий день!");
        break;
    case "п'ятниця":
        alert("Сьогодні робочий день!");
        break;
    case "субота":
        alert("Сьогодні вихідний день!");
        break;
    case "неділя":
        alert("Сьогодні вихідний день!");
        break;
    default:
        alert("Немає такого дня тижня!");
}

// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const whatMonth = Number(prompt("Напишіть, який місяць (1-12)"));

switch (whatMonth) {
    case 12:
    case 1:
    case 2:
        alert("Зима")
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна")
        break;
    case 6:
    case 7:
    case 8:
        alert("Літо")
        break;
    case 9:
    case 10:
    case 11:
        alert("Осінь")
        break;
    default:
        alert("Немає такого місяця!");
}

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const whatColor = prompt("Виберіть колір(Червоний,Жовтий,Зелений)")

switch (whatColor.toLowerCase().trim()) {
    case "зелений":
        alert("Йдіть")
        break;
    case "жовтий":
        alert("Будьте готові")
        break;
    case "червоний":
        alert("Стоп!")
        break;

    default:
        alert("Ви вибрали не той колір!")
}


// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
const num1 = Number(prompt("Введіть перше число"));
const num2 = Number(prompt("Введіть друге число"));
let whatOperations = prompt("Виберіть операцію (+, -, *, /)")
let result;

switch (whatOperations) {
    case "+":
        result = num1 + num2;
        alert("Ваша відповідь: " + result);
        break;
    case "-":
        result = num1 - num2;
        alert("Ваша відповідь: " + result);
        break;
    case "*":
        result = num1 * num2;
        alert("Ваша відповідь: " + result);
        break;
    case "/":
        if (num2 === 0) {
            alert("Ділення на 0 неможливе!");
        } else {
            result = num1 / num2;
            alert("Ваша відповідь: " + result);
        }
}
