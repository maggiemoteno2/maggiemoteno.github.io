---
Layout:
Title: "Json and API"
Date: 2019-07-17
categories:
---

###Json and API
JSON API documents work as any other API format, you send a request to an endpoint and receive your document. The JSON API specification defines how resources are structured.

###Compound documents
A compound document is a resource which includes the data of included relations. 

###Sparse fieldsets
When you are using compound documents your request could get large, fast. 
Especially when the included relationships contain a lot of data. 
Most of the time you do not need every single attribute defined in the resources but only want things like author names. 
JSON API provides sparse fieldsets for this use case.

###Other features
Servers may implement a few more features which are defined by the specification. 
These features are includes, sorting, pagination and filtering.

###Sorting
If the server supports it, you can sort your records using the sort request parameter. 
Sorting is in ascending order by default, to sort descending you can prepend - to the field.

###Pagination
If the server supports pagination it will supply a few extra meta attributes with pagination information. 
The server can decide how to paginate themselves, be it through an offset, or direct page numbers. 
An example of an implementation uses the required links to other pages and includes some metadata in the meta tag.

###Filtering
The spec says little about filtering, it just states there may be a parameter which is called filter which is used to fulfil filtering on the server.
 The implementation is specific for the server and can be anything.

###Deleting resources
There isn’t much to say about deleting resources, you just send a DELETEcall to the endpoint.




