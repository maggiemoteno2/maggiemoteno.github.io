---
Layout:
Title: "Put Vs Post"
Date: 2020-07-10
---
### Post
The POST method is used to request that the origin server accept the entity enclosed in the request as a new subordinate of the resource identified by the Request-URI in the Request-Line.
-POST is NOT idempotent.
-We Use POST when you want to add a child resource under resources collection.
- We Always use POST for CREATE operations.

### Put
 PUT method requests for the enclosed entity be stored under the supplied Request-URI. If the Request-URI refers to an already existing resource – an update operation will happen, otherwise create operation should happen if Request-URI is a valid resource URI (assuming client is allowed to determine resource identifier).
 - if you send retry a request multiple times, that should be equivalent to single request modification.
 -Use PUT when you want to modify a singular resource which is already a part of resources collection. 
 -We use PUT for UPDATE operations.