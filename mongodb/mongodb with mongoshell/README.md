# With this file we will learn about mongodb operation in mongoshell

> We will use mongodb compass for store in local pc server

```js
So here is some sort of command for running mongo shell.
    1 Open terminal from your pc
    2 type "mongo" or "mongosh" and hit enter key 3 to open the  navigate
    Mongo Shell
    3 then you go. Like if you wanna see all the db store in compass write `show dbs`
```

---

## Create Database & Collection

> There is no exact command for creating new db in compass, but if we write `use` before a db names then it will switched to the db and create a db in your compass, eg `use e-commerce`. But you will not see it when you type `show dbs` the reasone behind this cz, you don't have any collection in there. So if we have collection in db then it will show when we command `show dbs`

> Now we will have to create a collection to in it. But there is still no explicit command for this. So how do we crate a collection ? Answer is simple we just have to insert a data or many data to create a table. Let see by example `db.products.insertOne({product_name: "Apple", price: "4.2"})` then hit enter. It will crate a collection (if there no collection exist exact products name, if exist then it will insert to it)

```js
    // After inserting  data to e-commerce db, it will response like this
    {
        acknowledged: true,
        insertedId: ObjectId("64943dc9a65b899001ec33f2")
    }
    //  that means data inserted successfully
```

---

## Basic mongodb operation and command
