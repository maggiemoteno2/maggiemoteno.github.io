---
Layout:
Title: "Types Of Database Management Systems 2"
Date: 2019-11-13
categories:
---

### Hierarchical Databases
n a hierarchical database management systems (hierarchical DBMSs) model, data is stored in a parent-children relationship nodes. In a hierarchical database, besides actual data, records also contain information about their groups of parent/child relationships.

In a hierarchical database model, data is organized into a tree like structure. The data is stored in form of collection of fields where each field contains only one value. The records are linked to each other via links into a parent-children relationship. In a hierarchical database model, each child record has only one parent. A parent can have multiple children.

To retrieve a field’s data, we need to traversed through each tree until the record is found.

The hierarchical database system structure was developed by IBM in early 1960s. While hierarchical structure is simple, it is inflexible due to the parent-child one-to-many relationship. Hierarchical databases are widely used to build high performance and availability applications usually in banking and telecommunications industries.

### Advantage 
Hierarchical database can be accessed and updated rapidly because in this model structure is like as a tree and the relationships between records are defined in advance. This feature is a two-edged.

### Disadvantage
This type of database structure is that each child in the tree may have only one parent, and relationships or linkages between children are not permitted, even if they make sense from a logical standpoint. Hierarchical databases are so in their design. it can adding a new field or record requires that the entire database be redefined. 

### Network Databases
Network database management systems (Network DBMSs) use a network structure to create relationship between entities. Network databases are mainly used on a large digital computers. Network databases are hierarchical databases but unlike hierarchical databases where one node can have one parent only, a network node can have relationship with multiple entities. A network database looks more like a cobweb or interconnected network of records.

In network databases, children are called members and parents are called occupier. The difference between each child or member can have more than one parent.

### Relational Databases
In relational database management systems (RDBMS), the relationship between data is relational and data is stored in tabular form of columns and rows. Each column if a table represents an attribute and each row in a table represents a record. Each field in a table represents a data value.

Structured Query Language (SQL) is a the language used to query a RDBMS including inserting, updating, deleting, and searching records. 

Relational databases work on each table has a key field that uniquely indicates each row, and that these key fields can be used to connect one table of data to another.

### The relational database has two major reasons
-Relational databases can be used with little or no training.

-Database entries can be modified without specify the entire body.

### Properties of Relational Tables
It's Values are Atomic
In Each Row is alone.
Column Values are of the Same thing.
Columns is undistinguished.
Sequence of Rows is Insignificant.
Each Column has a common Name.

### Object-Oriented Model
In this Model we have to discuss the functionality of the object oriented Programming. It takes more than storage of programming language objects. Object DBMS's increase the semantics of the C++ and Java.I t provides full-featured database programming capability, while containing native language compatibility. It adds the database functionality to object programming languages. This approach is the analogical of the application and database development into a constant data model and language environment. Applications require less code, use more natural data modeling, and code bases are easier to maintain. Object developers can write complete database applications with a decent amount of additional effort.

The object-oriented database derivation is the integrity of object-oriented programming language systems and consistent systems. The power of the object-oriented databases comes from the cyclical treatment of both consistent data, as found in databases, and transient data, as found in executing programs.
Object-oriented databases use small, recyclable separated of software called objects. The objects themselves are stored in the object-oriented database. Each object contains of two elements:
Piece of data (e.g., sound, video, text, or graphics).
Instructions, or software programs called methods, for what to do with the data.

### Disadvantage of Object-oriented databases

Object-oriented databases have these disadvantages.
Object-oriented database are more expensive to develop.
In the Most organizations are unwilling to abandon and convert from those databases.

### Benefits of Object-oriented databases
The benefits to object-oriented databases are compelling. The ability to mix and match reusable objects provides incredible multimedia capability.

 ### Graph Databases
 Graph Databases are NoSQL databases and use a graph structure for sematic queries. The data is stored in form of nodes, edges, and properties. In a graph database, a Node represent an entity or instance such as customer, person, or a car. A node is equivalent to a record in a relational database system. An Edge in a graph database represents a relationship that connects nodes. Properties are additional information added to the nodes.

The Neo4j, Azure Cosmos DB, SAP HANA, Sparksee, Oracle Spatial and Graph, OrientDB, ArrangoDB, and MarkLogic are some of the popular graph databases. Graph database structure is also supported by some RDBMs including Oracle and SQL Server 2017 and later versions. 

### ER Model Databases
An ER model is typically implemented as a database. In a simple relational database implementation, each row of a table represents one instance of an entity type, and each field in a table represents an attribute type. In a relational database a relationship between entities is implemented by storing the primary key of one entity as a pointer or "foreign key" in the table of another entity.

### Document Databases 
Document databases (Document DB) are also NoSQL database that store data in form of documents. Each document represents the data, its relationship between other data elements, and attributes of data. Document database store data in a key value form.

Document DB has become popular recently due to their document storage and NoSQL properties. NoSQL data storage provide faster mechanism to store and search documents.

Popular NoSQL databases are Hadoop/Hbase, Cassandra, Hypertable, MapR, Hortonworks, Cloudera, Amazon SimpleDB, Apache Flink, IBM Informix, Elastic, MongoDB, and Azure DocumentDB.

#### NoSQL Databases
NoSQL databases are the databases that do not use SQL as their primary data access language. Graph database, network database, object database, and document databases are common NoSQL databases. This articles answers the question, what is a NoSQL database.

NoSQL database do not have predefined schemas, which makes NoSQL databases a prefect candidate of rapid changing development environments. NoSQL allows developers to make changes on the fly without affecting applications.
 
NoSQL databases can be categorized in the following five major categories, Column, Document, Graph, Key-value, and Object databases.
 
Here is a list of 10 popular NoSQL databases.
Cosmos DB
ArangoDB
Couchbase Server
CouchDB
Amazon DocumentDB
MongoDB, CouchBase
Elasticsearch
Informix
SAP HANA
Neo4j