## Introduction

Here are my notes for the Full Stack JavaScript Path: Course - Databases.

---
## Contents

### Databases
1. [SQL](#db-sql)
---

### Databases

<a id= "SQL></a>
#### SQL

| Topic | Notes |
|-------|-------|
| Order execution of a query | [(here)](https://sqlbolt.com/lesson/select_queries_order_of_execution) |
| Tip for UPDATE| Write constraint first and test it in a SELECT query, before writing the column/value pairs to update.|
| | <ul><li>`WHERE` used to filter rows before any aggregation.</li><li>If want to filter based on result of aggregate function, use `HAVING` clause - Applied after aggregation and cna filter groups based on result of aggregate functions.</li></ul> |
| To filter `GROUP BY` | Use `HAVING`. |
| When joining more than 3 tables. | SELECT movie.title, actor.name FROM movie<br>INNER JOIN casting ON movie.id = casting.movieid<br>INNER JOIN actor ON casting.actorid = actor.id<br>WHERE movie.yr = 1962 AND casting.ord = 1; |
