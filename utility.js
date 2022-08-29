//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzg0MzYyLCJleHAiOjE2NjE3ODc5NjIsIm5iZiI6MTY2MTc4NDM2MiwianRpIjoiVVpObFNIZ0pyanNjTUtrcCIsInN1YiI6OTcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.bigwUBzK19D_XMRM0i-sU1qqY8FguUVj5ZO_F1KeNuA"; // put access token
const student = {
student_id: '63362082',
  name: 'Nattawut', // replace with your full name.
  age: 20, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


/*exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "POST",
            uri: EXTERNAL_API,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            formData: {
                message: `HTTP Request :${data.student_id} `,
                student_id: student_id
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}*/

exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzg0MzYyLCJleHAiOjE2NjE3ODc5NjIsIm5iZiI6MTY2MTc4NDM2MiwianRpIjoiVVpObFNIZ0pyanNjTUtrcCIsInN1YiI6OTcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.bigwUBzK19D_XMRM0i-sU1qqY8FguUVj5ZO_F1KeNuA`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}


// exports.fakeStudentbyInfo = function (student_id, cb) {

//   cb(student);
// }