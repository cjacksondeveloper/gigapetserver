
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'jake', password: '$2a$10$Btn9IxpDz4MFiaS3LYQNx.M.wNQQ6bI4HQ5znpRJiy3gd.HNjXEpi'},
        {id: 2, username: 'jacob', password: '$2a$10$blUx.N6d/uGs1z7.DXj8F.BbJMI4jlxE4Qj1azFP2xiDRV8C8ZTja'},
        {id: 3, username: 'zechariah', password: '$2a$10$Tot5CPuiqb/VMzDG7hWneey8THOqS24tYOK2R7pU4kgl1IEqL5/fO'}
      ]);
    });
};
