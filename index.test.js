const mergeSort = require("./index");

describe("Checking sorted table", function() {
  test("Returns sorted table", () => {
    const list = mergeSort([ 'Lions ', 'Snakes ', 'Tarantulas ', 'FC Awesome ', 'Grouches ' ]);
    expect(list).toStrictEqual(["Tarantulas ", "Lions ", "FC Awesome ", "Snakes ", "Grouches "]);
  });
});



