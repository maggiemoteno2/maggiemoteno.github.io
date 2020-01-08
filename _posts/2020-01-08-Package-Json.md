---
Layout:
Title: Package.Json
Date: 2020-01-08
categories:
---

### Two main functionalities of Package Manager
Online repositories for node.js packages/modules which are searchable
Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.

### Attributes of Package.json
name − name of the package

version − version of the package

description − description of the package

homepage − homepage of the package

author − author of the package

contributors − name of the contributors to the package

dependencies − list of dependencies. NPM automatically installs all the dependencies mentioned here in the node_module folder of the package.

repository − repository type and URL of the package

main − entry point of the package

keywords − keywords

### What is Callback?
Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

For example, a function to read a file may start reading file and return the control to the execution environment immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.