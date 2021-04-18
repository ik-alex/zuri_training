/**
 *EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author IK
 * @license MIT
 *
 *
 **/


// class EasyHTTP{
//
//     // Make an HTTP GET Request
//     async get(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err));
//         });
//     }
// }


class EasyHTTP{
    //Make HTTP GET request
   async get(url){
       const response = await fetch('url')
       const resData = await response.json()
       return resData
    }

    //Make HTTP POST request
    async post(url, data){
       //Make HTTP post request
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
   }
}
