// do the migration
exports.up = function(knex) {
  // tables <sets> 
    return knex.schema
        .createTable("users", table => {
            table.increments("id");
            table.string("username").unique().notNullable();
            table.string("password").notNullable();    
            
            table.dateTime("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
            table.timestamp("created_at").defaultTo(knex.fn.now());    
    })
    .createTable("electives", table => {
        table.increments("id");
        table.string("course_name").notNullable();    
        
        // unsigned is to match the datatype of the primary key in users
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("users.id")

        table.dateTime("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};


// undo the migration aka rollback
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("electives")
    .dropTableIfExists("users");
};
