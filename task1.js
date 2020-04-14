
let money = +prompt("Ваш бюджет на месяц?", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD", 0);

let appData = {
    budget: money,
    timeData: time,
    expense: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", 0),
        b = prompt("Во сколько обойдется?", 0);

    if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expense[a] = b;
    } else {
        i--;
    }   
}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет = " + appData.moneyPerDay);
