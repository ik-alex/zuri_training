//Book Constructor
// function Book(title, author, isbn){
//     this.title = title
//     this.author = author
//     this.isbn = isbn
// }
//
// //UI constructor
// function UI() {}
//
// //Add book to list
// UI.prototype.addBookToList = function(book){
//     const list = document.getElementById('book-list')
//     //create tr element
//     const row = document.createElement('tr')
//     //Insert cols
//     row.innerHTML = `
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.isbn}</td>
//   <td><a href="#" class="delete">X</a></td>
//   `
//
//     list.appendChild(row)
// }
//
// //clear fields
// UI.prototype.clearFields = function(){
//     document.getElementById('title').value = ''
//     document.getElementById('author').value = ''
//     document.getElementById('isbn').value = ''
// }
//
// //Event Listeners
// document.getElementById('book-form')
//     .addEventListener('submit', function(e){
//     //Get form values
//     const title = document.getElementById('title').value,
//         author = document.getElementById('author').value,
//         isbn = document.getElementById('isbn').value
//
//     //instantiate a book
//     const book = new Book(title, author, isbn)
//
//     //instantiate UI
//     const ui = new UI()
//
//     //Add book to list
//     ui.addBookToList(book)
//
//     //clear fields
//     ui.clearFields()
//
//     e.preventDefault();
// })
//
// function Book(title, author, isbn){
//     this.title = title
//     this.author = author
//     this.isbn = isbn
// }
//
// //user interface
// function UI(){}
//
// UI.prototype.addToBookList = function(book){
//     const list = document.getElementById('book-list')
//     // create tr
//     const row = document.createElement('tr')
//     //create inner cols
//    row.innerHTML = `
//    <td>${book.title}</td>
//    <td>${book.author}</td>
//    <td>${book.isbn}</td>
//    <td><a href="#" type="delete">X</a></td>
//    `
//     list.appendChild(row)
// }
//
// //Show alert
// UI.prototype.showAlert = function(message, className){
//     //create div
//     const div = document.createElement('div')
//     //add classes
//     div.className = `alert ${className}`
//     //Add text
//     div.appendChild(document.createTextNode(message))
//     //Get parent
//     const container = document.querySelector('.container')
//     //insert form
//     const form = document.querySelector('#book-form')
//     //insert alert
//     container.insertBefore(div, form)
//     //timeout after 3seconds
//     setTimeout(function(){
//         document.querySelector('.alert').remove()
//     }, 3000)
// }
//
// UI.prototype.clearFields = function(){
//     document.getElementById('title').value = " "
//     document.getElementById('author').value = " "
//     document.getElementById('isbn').value = " "
// }
//
// //Add eventListner
// document.getElementById('book-form').addEventListener
// ('submit', function(e){
//    const title = document.getElementById('title').value,
//        author = document.getElementById('author').value,
//        isbn = document.getElementById('isbn').value
//
//     const book = new Book(title, author, isbn)
//
//     //instantiate UI
//     const ui = new UI()
//
//     //validate event
//     if(title === '' || author === '' || isbn === ''){
//         //error alert
//         ui.showAlert('Please fill in all fields', 'error')
//     }else{
//         //clear fields
//         ui.clearFields()
//
//         //Add book to list
//         ui.addToBookList(book)
//
//         //show success
//         ui.showAlert('Book Added!', 'success')
//     }
//
//     e.preventDefault()
// })
//

/*_____________________________________________
---------------------------------------------*/

// class Book{
//     constructor(title, author, isbn){
//         this.title = title
//         this.author = author
//         this.isbn = isbn
//     }
// }
//
// class UI{
//     addBookToList(book){
//         const list = document.getElementById('book-list')
//         const row = document.createElement('tr')
//         row.innerHTML = `
//             <td>${book.title}</td>
//             <td>${book.author}</td>
//             <td>${book.isbn}</td>
//             <td><a href="#" class="delete">X<a></td>
//         `
//         list.appendChild(row)
//     }
//
//     showAlert(message, className){
//         //create div
//     const div = document.createElement('div')
//     //add classes
//     div.className = `alert ${className}`
//     //Add text
//     div.appendChild(document.createTextNode(message))
//     //Get parent
//     const container = document.querySelector('.container')
//     //insert form
//     const form = document.querySelector('#book-form')
//     //insert alert
//     container.insertBefore(div, form)
//     //timeout after 3seconds
//     setTimeout(function(){
//         document.querySelector('.alert').remove()
//     }, 3000)
//     }
//
//     deleteBook(target){
//         if(target.className === 'delete'){
//             target.parentElement.parentElement.remove()
//         }
//     }
//
//     clearFields(){
//         document.getElementById('title').value = ''
//         document.getElementById('author').value = ''
//         document.getElementById('isbn').value = ''
//     }
// }
//
// //local storage
// class store{
//     static getBooks(){
//         let books
//         if(localStorage.getItem('books') === null){
//             books = []
//         }else{
//             books = JSON.parse(localStorage.getItem('books'))
//         }
//         return books
//     }
//
//     static displayBook(){
//         const books = store.getBooks()
//
//         books.forEach(function(ik){
//             const ui = new UI()
//             //Add book to UI
//             ui.addBookToList(ik)
//         })
//     }
//
//     static addBook(book){
//         const books = store.getBooks()
//         books.push(book)
//         localStorage.setItem('books', JSON.stringify(books))
//     }
//
//     static removeBook(isbn){
//         const books = store.getBooks()
//         books.forEach(function(ik, index){
//             if(ik.isbn === isbn){
//                 books.splice(index, 1)
//             }
//         })
//         localStorage.setItem('books', JSON.stringify(books))
//     }
// }
//
// //DOM load event
// document.addEventListener('DOMContentLoaded', store.displayBook)
//
// //add eventListener
// document.getElementById('book-form').addEventListener
// ('submit', function(e){
//    const title = document.getElementById('title').value,
//        author = document.getElementById('author').value,
//        isbn = document.getElementById('isbn').value
//
//     const book = new Book(title, author, isbn)
//
//     //instantiate UI
//     const ui = new UI()
//
//     console.log(ui)
//
//     //validate event
//     if(title === '' || author === '' || isbn === ''){
//         //error alert
//        ui.showAlert('Please fill in all fields', 'error')
//     }else{
//         //Add book to list
//         ui.addBookToList(book)
//
//         //Add to Ls
//         store.addBook(book)
//
//         //show success
//         ui.showAlert('Book Added!', 'success')
//
//         //clear fields
//         ui.clearFields()
//     }
//
//     e.preventDefault()
// })
//
// //Add eventListener for delete
// document.getElementById('book-list').addEventListener
// ('click', function(e){
//
//     const ui = new UI()
//
//     ui.deleteBook(e.target)
//
//     //Remove from LS
//     store.removeBook(e.target.parentElement.previousElementSibling.
//     textContent)
//
//     //show message
//     ui.showAlert('Book removed', 'success')
//
//     e.preventDefault()
// })






/************************************************************
 ************************************************************
 ***********************************************************/
//
// document.getElementById('button').addEventListener('click', loadData)
//
// function loadData(){
//     //create an XHR object
//     const xhr = new XMLHttpRequest()
//
//     //open
//     xhr.open('GET', 'data.txt', true)
//
//     console.log('READYSTATE', xhr.readyState)
//
//     //optional - used for spinners/loaders
//     xhr.onprogress = function(){
//         console.log('READYSTATE', xhr.readyState)
//     }
//
//     xhr.onload = function(){
//         if(this.status === 200){
//             document.getElementById('output').innerHTML =
//                 `<h1>${this.responseText}</h1>`
//         }
//     }
//
//     //when an error occurs
//     xhr.onerror = function(){
//         console.log('An error has occurred')
//     }
//
//     xhr.send()
//
//     // The status of the XMLHttpRequest; readystate values
//     // 0: request not initialized
//     // 1: server connection established
//     // 2: request received
//     // 3: processing request
//     // 4: request finished and response is ready
//
//     //HTTP status
//     //200: "OK"
//     //403: "forbidden"
//     //404: "Not Found"
//  }
/*
**********************************************************
 */
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// document.getElementById('button1').addEventListener('click',
//     loadCustomer)
//
// document.getElementById('button2').addEventListener('click',
//     loadCustomers)
//
// function loadCustomer(){
//     const xhr = new XMLHttpRequest()
//
//     xhr.open('GET','customer.json', true)
//
//     xhr.onload = function(){
//         if(this.status === 200){
//             //console.log(this.responseText)
//             const customer = JSON.parse(this.responseText)
//
//             const output = `
//             <ul>
//             <li>ID: ${customer.id}</li>
//             <li>Name: ${customer.name}</li>
//             <li>Company: ${customer.company}</li>
//             <li>Phone: ${customer.phone}</li>
//             </ul>
//             `
//             document.getElementById('customer').innerHTML =
//                 output
//         }
//     }
//
//     xhr.send()
// }
//
//
// //Load Customers
// function loadCustomers(){
//     const xhr = new XMLHttpRequest()
//
//     xhr.open('GET','customers.json', true)
//
//     xhr.onload = function(){
//         if(this.status === 200){
//             //console.log(this.responseText)
//             const customers = JSON.parse(this.responseText)
//
//             let output = " "
//
//             customers.forEach(function(customer){
//                 output += `
//             <ul>
//             <li>ID: ${customer.id}</li>
//             <li>Name: ${customer.name}</li>
//             <li>Company: ${customer.company}</li>
//             <li>Phone: ${customer.phone}</li>
//             </ul>
//             `
//             })
//
//             document.getElementById('customers').innerHTML =
//                 output
//         }
//     }
//
//     xhr.send()
// }
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// document.querySelector('.get-jokes').addEventListener('click',
//     getJokes)
//
// function getJokes(e){
//     const number = document.querySelector('' +
//         'input[type="number"]').value
//
//     const xhr = new XMLHttpRequest()
//
//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`,
//         true)
//
//     xhr.onload = function(){
//         if(this.status === 200){
//             const response = JSON.parse(this.responseText)
//             console.log(response)
//
//             let output = " "
//             if(response.type === 'success'){
//                 response.value.forEach(function(ik){
//                     output += `<li>${ik.joke}</li>`
//                 })
//             }else{
//                 output += '<li>Something went wrong</li>'
//             }
//
//             document.querySelector('.jokes').innerHTML =
//                 output
//         }
//     }
//
//     xhr.send()
//
//     e.preventDefault()
//}

////////////////////////////////////////////////////////////////

// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post Two'}
// ]

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000)
// }
//
// function getPosts(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }
//
// createPost({title: 'Post Three', body: 'This is post three'})
//
//  getPosts()

// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post)
//         callback()
//     }, 2000)
// }
//
// function getPosts(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }
//
// createPost({title: 'Post Three', body: 'This is post three'},
//     getPosts)


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// const http = new easyHTTP()

//get Posts
// http.get(
//     'https://jsonplaceholder.typicode.com/posts', function (err, response) {
//         if(err){
//             console.log(err)
//         }else {
//             console.log(response)
//         }
//     })

//create data
// const data = {
//     title: 'Custom Post',
//     body: 'This is a custom post'
// }

//create post
// http.post('https://jsonplaceholder.typicode.com/posts',
//     data, function(err, post){
//         if(err){
//             console.log(err)
//         }else {
//             console.log(post)
//         }
//     })

//update post
// http.put('https://jsonplaceholder.typicode.com/posts/1',
//     data, function(err, post){
//         if(err){
//             console.log(err)
//         }else {
//             console.log(post)
//         }
//     })

//Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
//     data, function(err, response){
//         if(err){
//             console.log(err)
//         }else {
//             console.log(response)
//         }
//     })



// function createPost(post){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             posts.push(post)
//             resolve()
//         }, 2000)
//     })
// }
//
// function getPosts(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }
//
// createPost({title: 'PostThree', body: 'THis is post three'}).
//     then(getPosts)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// const posts = [
//     {title: 'Post One', body:'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ]
//
// function createPost(post){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             posts.push(post)
//
//             const error = false
//
//             if(!error){
//                 resolve()
//             }else{
//                 reject('Error: Something went wrong')
//             }
//         }, 2000)
//     })
// }
//
// function getPost(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(ik){
//             output += `<li>${ik.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }
//
// createPost({title: 'Post Three', body: "This is post three"}).then(getPost)
// .catch(function(err){
//     console.log(err)
// })

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// document.getElementById('button1').addEventListener(
//     'click', getText)
//
// function getText(){
//     fetch('test.txt').then(
//         function (res) {
//             return res.text()
//         })
//         .then(function(data){
//             console.log(data)
//         })
// }

//
// document.getElementById('button1').addEventListener(
//     'click', getText)
// document.getElementById('button2').addEventListener(
//     'click', getJson)
// document.getElementById('button3').addEventListener(
//     'click', getApi)
//
// function getText(){
//     fetch('test.txt').then( res => res.text())
//         .then( data => {
//             console.log(data)
//             document.getElementById('output').
//                 innerHTML = data
//         })
//         .catch( err => console.log(err))
// }
//
// function getJson(){
//     fetch('customers.json')
//         .then( res => res.json())
//         .then( data => {
//             console.log(data)
//             let resp = ''
//             data.forEach( resp1 =>
//                 resp += `<li>${resp1.name}</li>`
//             )
//             document.getElementById('output').
//                 innerHTML = resp
//         })
//         .catch( err =>  console.log(err))
// }
//
//
// function getApi(){
//     fetch('https://api.github.com/users')
//         .then(function(res){
//             return res.json()
//         })
//         .then( data => {
//             console.log(data)
//             let resp = ''
//             data.forEach( user =>
//                 resp += `<li>${user.login}</li>`
//             )
//             document.getElementById('output').
//                 innerHTML = resp
//         })
//         .catch( err => console.log(err))
//
// }


//
// const sayHello = () =>{
//     console.log('Hello World')
// }

//one line function does not need braces
//const sayHello = () => console.log('Hello')
//one line return
//const sayHello = () => 'Hello'

//return object
//const sayHello = () => ({msg: 'Hello '})

//single param does not need paranthesis
//const sayHello = name => console.log(`Hello ${name}`)

//more than one parameter needs parenthesis
//const sayHello = (firstName, lastName) => console.log(
 //`${firstName} ${lastName}`)

//sayHello('brad', 'travesy')

//const users = ['Nathan', 'John', 'William']

// const namelengths = users.map(function(name){
//     return name
// })
//shorter
// const namelengths = users.map((name) => {
//     return name
// })

//shortest
//const namelengths = users.map( name => name.length)

//console.log(namelengths)

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
// const http = new easyHTTP;
//
// // Get Users
// const users = http.get
// ('https://jsonplaceholder.typicode.com/users')
//
// console.log(users)

//const http = new easyHTTP

 // http.get('https://jsonplaceholder.typicode.com/users')
 //     .then(data => console.log(data))
 //     .catch(err => console.log(err))

//USER DATA
// const data = {
//  name: 'John Doe',
//  username: 'john-doe',
//  email: 'jdoe@gmail.com'
// }

//Create post
// http.post
// ('https://jsonplaceholder.typicode.com/users', data)
//      .then(data => console.log(data))
//      .catch(err => console.log(err))

// http.delete
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//  async function myFunc(){
//      const promise = new Promise((resolve, reject) => {
//      setTimeout(() => resolve('Hello'), 1000)
//      })
//      const error = true
//
//      if(!error){
//      const res = await promise // Wait until promise is resolved
//      }else{
//      await Promise.reject(new Error('Something went wrong'))
//      }
//  }
//
// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


 // async function getUsers(){
 //  // await response of the fetch call
 //  const response = await fetch('https://jsonplaceholder.typicode.com/users')
 //
 //  //only proceed once its resolved
 //  const data = await response.json()
 //
 //  return data
 // }
 //
 // getUsers().then(users => console.log(users))

//console.log('hello world')
// require('express')

// const posts = [
//     {title: 'post one', body: 'this is post one'},
//     {title: 'post two', body: 'this is post two'}
// ]

// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }
//
// function getPost(){
//    setTimeout(() => {
//        let output = ''
//        posts.forEach((post) => {
//         output += `<li>${post.title}</\li>`
//        })
//        document.body.innerHTML = output
//    }, 1000)
// }
//
// createPost({title: 'post three', body: 'this is post three'})
// getPost()

// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }
//
// function getPost(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post) => {
//             output += `<li>${post.title}</\li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }
//
// createPost({title: 'post three', body: 'this is post three'}, getPost)



// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }
//
// function getPost(){
//   let output = ''
//   setTimeout(() => {
//       posts.forEach((post) => {
//           output += `<li>${post.title}</\li>`
//       })
//       document.body.innerHTML = output
//   }, 1000)
// }
//
// createPost({title: 'post three', body: 'this is post three'}, getPost)




//
// const posts = [
//     {title: 'post one', body: 'this is post one'},
//     {title: 'post two', body: 'this is post two'}
// ]
//
// function getPost(){
//     let output = ''
//     setTimeout(() => {
//         posts.forEach((post) => {
//             output += `<li>${post.title}</\li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }
//
// function createPost(post, callback){
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//             posts.push(post)
//             const err = false
//
//             if(!err){
//                 resolve()
//             }else{
//                 reject('Error: something went wrong')
//             }
//         }, 2000)
//     })
// }
//
// createPost({title: 'post three', body: 'this is post three'})
//     .then(getPost)
//     .catch((err) => {
//         console.log(err)
//     })
//
//
// document.getElementById('button1').addEventListener('click', getText)
// document.getElementById('button2').addEventListener('click', getJson)
// document.getElementById('button3').addEventListener('click', getExternal)
//
// // get local text
// function getText() {
//     fetch('test.txt')
//         .then((res) => {
//             return res.text()
//         })
//         .then((data) => {
//             console.log(data)
//             document.getElementById('output').innerHTML = data
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }
//
// // get local json
// function getJson() {
//     fetch('getJson.json')
//         .then((res) => {
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data)
//             let output = ""
//             data.forEach((post) => {
//                 output += `<li>post.title</\li>`
//                 document.getElementById('output').innerHTML = output
//             })
//
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }
//
// //Get from external API
// function getExternal(){
//     fetch('https://api.github.com/users')
//         .then((res) => {
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data)
//             let output = ''
//             data.forEach((user) => {
//                 output += `<li>${user.login}<li\>`
//             })
//             document.getElementById('output').innerHTML = output
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

// const http = new EasyHTTP()
//
// get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// // post users
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//
// const {readFile, writeFile} = require('fs')
//
// readFile('./content/test.txt','utf8', (err,result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
// readFile('./content/test2.txt','utf8',(err,result) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const second = result
// writeFile('./content/result-async.txt',
//     `Here is the result : ${first},  ${second}`,
//     (err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//      })
//     })
// })

//
// const {readFile,writeFile} = require('fs')
//
// console.log('start')
// readFile('./content/test.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/test2.txt','utf8', (err,result) => {
//       if(err){
//           console.log(err)
//           return
//       }
//       const second = result
//         writeFile('./content/result-async1.txt',`Here is the result: ${first} ${second}`,(err,result) => {
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log('done with this task')
//         })
//     })
// })
// console.log('starting next task, starting' )

// const {readFile, writeFile} = require('fs').promise
// // const util = require('util')
// // const readFilePromise = util.promisify(readFile)
// // const writeFilePromise = util.promisify(writeFile)
//
// const start = async() => {
//     try {
//         const first = await readFile('./content/test.txt', 'utf8')
//         const second = await readFile('./content/test2.txt', 'utf8')
//         await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }
//
// getText('./content/test.txt')
// .then((result) => console.log(result))
// .catch(err => console.log(err))
//
 const {writeFileSync} = require('fs')
 const fetch = require('node-fetch')
async function fetchData() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
}

fetchData()
 .then(usersData => {

     writeFileSync('./Result/posts.json', JSON.stringify(usersData))
     console.log(usersData)
 })



//
// console.log('start')
// readFile('./content/test.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/test2.txt','utf8', (err,result) => {
//       if(err){
//           console.log(err)
//           return
//       }
//       const second = result
//          writeFile('./result/posts.json',`Here is the result: ${first} ${second}`,(err,result) => {
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log('done with this task')
//         })
//     })
// })
// console.log('starting next task, starting' )




