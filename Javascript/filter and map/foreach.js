let books = [
    {title: "books one", genre:"fiction", publish: 1, edition: 2},
    {title: "books second", genre:"history", publish: 45, edition: 5},
    {title: "books third", genre:"fiction", publish: 87, edition: 89},
    {title: "books forth", genre:"fiction", publish: 76, edition: 2},
    {title: "books fifth", genre:"history", publish: 44, edition: 2},
    {title: "books six", genre:"histry", publish: 34, edition: 2},
]
let newbooks = books.filter((bk) => bk.genre ==='history');
newbooks = books.filter((bk) => bk.publish >20);
console.log(newbooks);