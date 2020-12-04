
const axios = require('axios').default;


// //Get example
// async function getAccount() {
//   await axios.get('http://localhost:3013/rest/account/')
//   .then(response => {
//     console.log(response.data);
//   });
// }
var body = {
  accType: "Volunteer",
  email: "kevinwwweeweqweqwe@appstate.edu",
  password: "password",
  name: {
    fname: "Keveeeein",
    lname: "Kevin"
  }
};

const getRequestAccount = async () => {
  try {
    const response = await axios.get('http://localhost:3013/rest/account/');
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

async function postRequest() {
  var data = {
    email : 'joe@appstate.edu',
    password: 'password'
  }
  const resonse  = await axios.post('http://localhost:3013/rest/account/signin', data);
  console.log(resonse.data);
}

async function getUserFromEmail() {
  const endpoint = 'http://localhost:3013/rest/account/' +
  'hillbj1@appstate.edu';

  const response = await axios.get(endpoint);
  console.log(response.data[0].accType);
  return response.data[0].accType;
}

//Register Post Request
async function postRequestRegister() {
    var data = {
        "accType": "parent",
        "email": "hellwo",
        "password": "ok",
        "name" : {
            "fname" : "ok",
            "lname" :"ok"
        }
    }
    const response = await axios.post('http://localhost:3013/rest/account', data);
    console.log(response.status);
    return response.data;
}

getUserFromEmail();
