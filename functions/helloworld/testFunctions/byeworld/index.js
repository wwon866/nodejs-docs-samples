// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START functions_helloworld_get]
const functions = require('@google-cloud/functions-framework');
const { request } = require('http');

const options = new URL('https://weigh9-backend.vercel.app/hardware/register?token=1234');
// var options = {
//     url: "https://weigh9-backend.vercel.app/hardware/register?token=1234",
//     json: true
//  };
// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('Byeworld', (req, res) => {
    // res.redirect("https://weigh9-backend.vercel.app/docs")
    // res.send('Bye World!');
    const req2 = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
          console.log('No more data in response.');
        });
      });
      
    res.send(
      req2.chunk  
    )
});
// [END functions_helloworld_get]
