const faker = require('faker')

module.exports = () => {
  let data = {
    books: [],
  }

  const generateBook = () => ({
    id: faker.datatype.uuid(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    stars: faker.datatype.number({
      min: 1,
      max: 5,
    }),
    title: faker.lorem.words(5),
  })

  for (let i = 0; i < 15; i++) {
    const book = generateBook()
    data.books.push(book)
  }

  return data
}
