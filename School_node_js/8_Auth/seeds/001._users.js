
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([     // password
    { username: "admin", password: "$2b$12$YxiCT4NmMkpDih.tYaQmqeOvQjoc2sfMS/P7KkuDN51J64n3rCm1q" },
    { username: "seconduser", password: "$2b$12$ZKzwfF5Nk1PFidMbMbi91ep884T6HzpG92ZqD.2nhtKis12MFx9.C" }
  ]);
};
