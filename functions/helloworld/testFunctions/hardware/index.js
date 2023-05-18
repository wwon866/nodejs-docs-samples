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
const fetch = require('node-fetch');

/**
 * HTTP Cloud Function that makes an HTTP request
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */


// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('register', async (req, res) => {
  const url ="https://weigh9-backend.vercel.app/hardware/register?token=1234";
    // res.redirect("https://weigh9-backend.vercel.app/docs")
    // res.send('Bye World!');
    // const req2 = http.request(options, (res) => {
        
    //     res.on('data', (chunk) => {
    //       res.send(chunk.json())
    //     });
    //   });
    const externalRes = await fetch(url);
    res.send(
      // externalRes.json()
      fetch(url)
    )
});
// [END functions_helloworld_get]
