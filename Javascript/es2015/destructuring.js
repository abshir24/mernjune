const chocolateCake = {

    ingredients: ["chocolate", "flour", "sugar", "eggs", "water"],

    isVegan: false,

    calories: 594,

    feeds: 8,

    tag: "child-friendly"

};

var destructureChocolateCake = function()

{
    const {isVegan, calories} = chocolateCake

    console.log(isVegan, calories)
}

destructureChocolateCake()