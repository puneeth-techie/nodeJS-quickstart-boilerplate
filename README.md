# nodeJS-quickstart-boilerplate

This is a quick starter project for Node JS, which contained an MVC architecture pattern. It will reduce and get rid of many start-up work and configurations of your project.

## Project Structure [MVC architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

- Models - The model is responsible for managing the data of the application. It receives user input from the controller.

- Views - The view renders presentation of the model in a particular format.

- Controllers - The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

- Routes - Routing with Express in Node: Express. js has an “app” object corresponding to HTTP. We define the routes by using the methods of this “app” object. This app object specifies a callback function, which is called when a request is received.

- Utils - Best way to write the helper function in this folder.

- Middlewares - The purpose of a middleware is to extract a common controller code, which should be executed on multiple requests and usually modifies the request and/or the response objects.

* Startups - This folder contains all the files which are responsible for our application start-up.

- Public - Best way to serve all our static files.

* .env - Dotenv is a zero-dependency module that loads environment variables from a . env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.

You can also install and setup Babel if you would like.

### Env Variables

Create a .env file in then root and add the following and necessary configurations

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri

```

### Install Dependencies (frontend & backend)

```
npm install

```

### Run & Build

```
# Run backend (:5000)
npm run dev

```

## License

MIT License

Copyright (c) 2021 Puneeth P Gowda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
