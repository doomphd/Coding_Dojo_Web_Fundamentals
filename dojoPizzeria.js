function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olive", "onions"]);
var s3 = pizzaOven("thin", "alfredo", ["mozzarella"], ["chicken", "parsley", "onions"]);
var s4 = pizzaOven("hand tossed", "pesto", ["mozzarella"], ["sausage", "ham", "pineapple"]);


console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
