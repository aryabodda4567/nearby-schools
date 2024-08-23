const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { listSchools, addSchool } = require('./db-service');
const { validateSchoolData, validateLatLong } = require("./validation")


const port = 3000;

const app = express();

// Allow Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse request bodies (for POST requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// addSchools handler
app.get('/listSchools', async (req, res) => {

    const data = req.query;
    console.log(data)
    try {

        if(!validateLatLong(data).result){

            res.status(422).json(validateLatLong(data));

        }else{
            const schools = await listSchools(data);

            res.json(schools);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});



// addSchool request handler
app.post('/addSchool', async (req, res) => {

    const data = req.body;

    if (!validateSchoolData(data).result) {

        res.status(422).json(validateSchoolData(data));

    } else {
        try {
            const result = await addSchool(data);
            res.json(result);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
});






app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});









