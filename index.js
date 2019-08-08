// Add your code here

function submitData (userName, userEmail){
    return fetch ("http://localhost:3000/users",{ 
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail
        })
    })
   .then(function(response) {
        return response.json();
    }) 
    .then(function(object) {
        const newId = document.createElement('li')
        document.body.appendChild(newId)
        newId.innerHTML = object.id
    })
    .catch(function(error) {
        const newError = document.createElement('li')
        document.body.appendChild(newError)
        newError.innerHTML = error.message
    }) 
 }

// we are using the then function to callback the response
//that the server is sending back, which has been put in as an 
//argument response. This object is then using the method: .json()
//this method converts the body of the response from json into javascript
//This version is then used in the second then as the javascript object.
//which is returned in console.log.
//console log is something (obj, array, string) that you want the user to see.

//below is another version of it, above is better english!

// .then(resp => resp.json())
// .then(respObj => respObj)
