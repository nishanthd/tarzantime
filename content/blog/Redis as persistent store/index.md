---
title: Redis as persistent store
date: "2022-06-18T11:35:03.284Z"
tags: ["redis"]
description: "Using redis as persistence"
thumbnail: ./redis.png
folder: blog
---

#### What is redis ?

Redis stands for Remote Dictionary Server, is a open source in-memory key-value store. Redis supports variety of data structures including Strings, Lists, Sets, Hashes and JSON.

#### So what you can do with Redis ?

Redis nature of in-memory processing makes it very much suitable for applications which requires faster and real time instant responses. Initially redis was preffered for application caching. Later its evolved enough to be considered for persistent store as well by many organizations.

Following are the popular redis use cases,

- Caching

- Chat, messaging, and queues

- Gaming

- Session store

- Media streaming

- Geospatial

- Machine learning

- Real-time analytics

#### Using redis as persistent

Redis can be used as a fully durable database by using the following data persistence mechanisms,

###### AOF(Append-Only File) data persistence

Every shard of a Redis database appends new lines to its persistent file in per every seconds or every write.

###### Snapshot

The entire point-in-time view of the dataset is written to the persistent storage, across all of the database. The snapshot time is configurable.


Thanks for Reading !


###### Resources
1. [Durable Redis](https://redis.com/redis-enterprise/technology/durable-redis)