---
title: MongoDB and aggregation
date: "2022-04-14T22:12:03.284Z"
tags: ['mongodb','aggregation','springboot']
description: "Mongodb And Aggregation"
thumbnail: ./mongodb-image.jpeg
folder: blog
---

Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single purpose aggregation methods.

#####when you need aggregation ?
- to perform group by
- to perform operations such as filter,sorting on the reference document
- to project the reference document fields in the resultset
- to paginate

#####Reference document ? What is it ?
Yes, In MongoDB you can refer one document from another using the value of the document's `_id` field,collection name, and, optionally, its database name. `DBRefs` helps to acheive this operation.  

DBRef documents resemble the following document:
```json
{ "$ref" : <value>, "$id" : <value>, "$db" : <value> }
```

Consider a document from a collection that stored a DBRef in a creator field:

```json
{
  "_id" : ObjectId("5126bbf64aed4daf9e2ab771"),
  // .. application fields
  "creator" : {
                  "$ref" : "creators",
                  "$id" : ObjectId("5126bc054aed4daf9e2ab772"),
                  "$db" : "users"
               }
}
```




