
# Node JS Assignment

 
Simple Node.js app developed with Express.js and used MySql Database to add and retrieve schools nearest to the user.
The app uses the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula)  to calculate the distance from the user's location to the school's location.


## Built With

- Node Js
- MySQL

## Getting Started

Clone the repo
```bash
  Git clone https://github.com/aryabodda4567/nearby-schools.git
```
Navigate to Node Assignment
```bash
    cd nearby-schools 
```
Install Dependecies
```bash
    npm start
```
- Navigate to ```connection.js``` and configure the databse credentials.
- Create a table ```school```
    ```sql
     create table school (id int primary key auto_increment , name varchar(255) ,
      address varchar(255) , latitude FLOAT, longitude FLOAT);
    ```
- Finally run the index.js
    ``` bash
    node index.js
    ```


## API Reference

#### Get all items

```http
  GET /api/list-schools
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `latitude` | `float` | **Required**. User latitude |
| `longitude` | `float` | **Required**. User longitude|

#### Get item

```http
  POST /api/add-school
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. School name |
| `address`      | `string` | **Required**. School address |
| `latitude`      | `string` | **Required**. School latitude |
| `longitude`      | `string` | **Required**. School longitude |
 

 


## Usage/Examples

**Get Schools List API**
```http
https://node-assignment-ten.vercel.app/api/list-schools
```
```javascript
const request = require('request');

const options = {
  method: 'GET',
  url: 'http://localhost:3000/api/list-schools',
  qs: {latitude: '154.019075675593', longitude: '105.194456709'},
  headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
**Response**
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Another Name",
            "address": "dfghj qwancjdncdjincjcnCBHAbchaBCHbshCWcHJBHJBHJ",
            "latitude": -10.9352,
            "longitude": -90.3764,
            "distance": 0.00036768282798957017
        },
        {
            "id": 2,
            "name": "Another Name",
            "address": "dfghj qwancjdncdjincjcnCBHAbchaBCHbshCWcHJBHJBHJ",
            "latitude": -10.9352,
            "longitude": -90.3764,
            "distance": 0.00036768282798957017
        } 
    ]
}
```

**Add School API**

```http
https://node-assignment-ten.vercel.app/api/add-school
```
```javascript
const request = require('request');

const options = {
  method: 'POST',
  url: 'https://node-assignment-ten.vercel.app/addSchool',
  headers: {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'Content-Type': 'application/json'
  },
  body: {
    name: 'Another Name',
    address: 'dfghj qwancjdncdjincjcnCBHAbchaBCHbshCWcHJBHJBHJ',
    latitude: -10.935248,
    longitude: -90.376347
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
**Response**
```javascript
{
  "status": "success",
  "message": "School added successfully"
}
```
