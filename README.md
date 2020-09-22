# Node DB3 Guided Project

## Takeaways
* learned how to use foreign and primary keys ... associating posts to authors with primary key in the foreign key 
* There's different types of JOIN, we're using by default inner Joint
  * Inner Joint
    * Both sides have a result, no sides is allowed to be null
    * left side of table is main table you're querying
    * right side the tables you're joining
  * Left Join
    * returns all of table A, even if table B doesn't have result from right
  * Right join
    * returns all of table B, even if table A doen's have result from right
  * full join
    * returns all if either tables is empty
* Full joins are performant
* SQLite supports inner, left join 
* The purpose of joins is to prevent yourself from doing multiple queries
* We also joined two tables with our excercise-> the main table didnt contain the username, but with the id, the user_id, we were able to abstract username once we joined it 

sql-join.com/sql-join-types

Guided project for **Node DB3** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- [This Query Tool Loaded in the browser](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top).
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor creates database access methods for a multi table schema.
