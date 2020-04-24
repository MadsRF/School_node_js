
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    { username: "admin", password: "password" },
    { username: "seconduser", password: "anotherpassword" }
  ]);
};
