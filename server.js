import express from 'express';
import yup from 'yup';
import validate from './middleware/validateRequest.js';
import bodyParser from 'body-parser';
const app = express();

app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }))

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().test('len', 'Must be exactly 10 characters', val => val.length === 10).required(),
    description: yup.string().required(),
    services: yup.array()
})

app.post('/api/post', validate(schema), (req, res) => {

    res.status(201);
    res.send();


})

app.get('/', (req, res) => {

    res.send("This server is working");
})