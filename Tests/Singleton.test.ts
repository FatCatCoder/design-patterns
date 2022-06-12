const Database = require('../Creational/Examples/Singleton');

test('Is Singleton', () => {
    let S1 = Database.getInstance();
    let S2 = Database.getInstance();

  expect(S1).toBe(S2);
});


test('Pool Works', async() => {
  let S1 = Database.getInstance();

  console.log(await Database.Query("SELECT * FROM HELLO WHERE UserId = @UserId", [{Key: "@UserId", Value: "10132"}]));  

});