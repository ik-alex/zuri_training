// function easyHTTP(){
//     this.http = new XMLHttpRequest()
// }
//
// //Make an HTTP GET Request
// easyHTTP.prototype.get = function(url, callback){
//     this.http.open('GET',url,true)
//
//     let self = this
//     this.http.onload = function(){
//         if(self.http.status === 200){
//             callback(null, self.http.responseText)
//         }else{
//             callback('Error: ' + self.http.status)
//         }
//     }
//
//     this.http.send()
// }
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// function easyHTTP(){
//     this.http = new XMLHttpRequest()
// }
//
// easyHTTP.prototype.get = function(url, callback){
//     this.http.open('GET', url, true)
//
//     let self = this
//     this.http.onload = function(){
//         if(this.http.status === 200){
//             callback(null, this.http.responseText)
//         }else{
//             callback('Error: ' + self.http.status )
//         }
//     }
//
//     this.http.send()
// }
// //Make an HTTP POST Request
// easyHTTP.prototype.post = function(url, data, callback){
//     this.http.open('POST', url, true)
//     this.http.setRequestHeader('content-type',
//         'application/json')
//
//     let self = this
//     this.http.onload = function(){
//             callback(null, self.http.responseText)
//     }
//
//     this.http.send(JSON.stringify(data))
// }
// //Make an HTTP PUT Request
// easyHTTP.prototype.put = function(url, data, callback){
//     this.http.open('PUT', url, true)
//     this.http.setRequestHeader('content-type',
//         'application/json')
//
//     let self = this
//     this.http.onload = function(){
//         callback(null, self.http.responseText)
//     }
//
//     this.http.send(JSON.stringify(data))
// }
// //Make an HTTP DELETE Request
// easyHTTP.prototype.delete = function(url, callback){
//     this.http.open('DELETE', url, true)
//
//     let self = this
//     this.http.onload = function(){
//         if (self.http.status === 200) {
//             callback(null, 'Post Deleted')
//         } else {
//             callback('Error: ' + self.http.status)
//         }
//     }
//
//     this.http.send()
// }

// class  easyHTTP{
//     //make http GET request
//     get(url){
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err))
//         })
//     }
// }

//////////////////////////////////////////////////
//
// class easyHTTP{
//    async  get(url){
//        // await response of the fetch call
//        const response = await fetch(url)
//
//        //only proceed once its resolved
//        const resdata = await response.json()
//
//        // proceed once the second promise is resolved
//        return resdata
//     }
//
//     //Make an HTTP POST Request
//     async post(url, data){
//         const postResponse = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         const posdata = await postResponse.json()
//
//         return posdata
//     }
//
//     //Make an HTTP PUT Request
//     async put(url, data){
//        const putres = await fetch(url, {
//            method: 'PUT',
//            headers: {
//                'content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//        })
//         const putdata = await putres.json()
//         return putdata
//     }
//
//     //Make an HTTP delete Request
//     async delete(url){
//         const  deleteres = await fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'content-type': 'application/json'
//             }
//         })
//         const deleteData = await ('Resource Deleted...')
//         return deleteData
//     }
// }


function easyHTTP(){
    this.http = new XMLHttpRequest()
}

//Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true)

    this.http.onload = () => {
        if(this.http.status === 200){
            callback(null, this.http.responseText)
        }else{
            callback('Error: ' + this.http.status)
        }
    }

    this.http.send()
}