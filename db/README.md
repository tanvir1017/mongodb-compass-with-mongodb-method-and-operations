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

### Insert Data :

```js
1. db.`collectionName`.insert({`data`}) // for insert just one document to the database\

2. db.`collectionName`.insertMany([{`data`}]) // For insert many documents to the database
```

### Find Documents :

```js
    # Find all data that exist on this collections
    1.  db.`collectionName`.find(); // if we give an empty parentheses then it will find all the documents exist on the collections

    # Find all data that exist on this collections
    2.  db.`collectionName`.findOne({`condition <[key:value]>`}); // findOne() method used to find the first documents that satisfy the condition.

    # Finding the data which have price 1.99 $
    3.  db.`collectionName`.find({price:1.99}); // Inside the calibrates we can set some field and value names for finding data based on the field and value

    # Projections
    4.  db.`collectionName`.find({price:1.99}, {rating: 0}); // The second parameter of the finding method/func called projections. If we find some sort of data based on the first parameter's condition and we don't want to show some of the properties from those documents. We can tell this by passing key with 0 or 1. Zero means false, and One means true.

    //  In our case we simply telling the method to not show the rating properties exist on condition based find docs.

    # limit()
    3.  db.`collectionName`.find({price:1.99}, {rating: 0}).limit(`expected number of documents`); // The limit() method used for to show how much data you wanna show.

    # skip()
    5.  db.`collectionName`.find({price:1.99}, {rating: 0}).limit(`expected number of documents<number>`).skip(`how much data you wanna skip<number>`); // Let's say we find the data and limit it 2 by limit(2) method, and we just wanna show the second document and skip the first one. For this we use skip(1) method. That will show your data by skipping the first one.
```

### Update Documents :

```js
    # updateOne // used for update one documents based on conditional find
    1. db.`collectionName`.updateOne({_id_: ObjectId("6494428167732b28bd83ee19")}, {$set:{brand: "Miazi -farm"}})
    // So, here we use the method called updateOne() then we pass a condition as first parameter for find the data, if the data reached based on condition the we update the brand by second parameter {$set:{brand:'miazi-farm'}}. The {$set} syntax is monogodb reserved syntax.

    # updateMany // used for update multiple documents based on conditions
    1. db.`collectionName`.updateMany({brand:"Miazi-farm"}, {$set:{brand: "Owned by Miazi-farm"}})
    // In this example up of the line, we first find those documents which have the brand name Miazi-farm and set all of those brand into Owned by Miazi-farm

    # update with aggregation system
    // So a basic problem is find all of the data that have difference brand from Miazi-farm then update all of   this by Owned by Miazi-farm.
    db.`collectionName`.updateMany({
        brand:{
            $not:{
                $eq:{
                    "Miazi Farm"
                }
            }
        }
        }, {
             $set:
              {
                brand:"Owned by Miazi-farm"
              }
            }
        )

    // Here we first find those documents whose don't have the same brand as Miazi-farm by [ $not means not $eq means equal ] Not-equal to brand name Miazi-farm, after that we $set the brand name by Owned by Miazi-farm to all those find documents


    // How update operation work?
        `Find document > if matched > then modified `



```

### Delete documents :

```js
    # deleteOne(condition)  // Used to remove a single document from the collection
    1. db.`collectionName`.deleteOne({_id:ObjectId("")})

    # deleteMany(condition) // Used to remove a multiple document from the collection

    2. db.`collectionName`.deleteMany({brand:'Miazi-farm'})

```
