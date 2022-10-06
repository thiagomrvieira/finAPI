const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

/**
 * CPF - String
 * name - String
 * id - Uuid
 * statement - Array
 */
app.post('/account', (request, response) => {
    const {cpf, name} = request.body;

    // Verifica se já existe user com o CPF
    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

    if (customerAlreadyExists) {
        return response.status(400).json({error: "Customer already exists!" });
    }

    customers.push({
        cpf, 
        name, 
        id: uuidv4(), 
        statemant: []
    });

    console.log(customers);

    return response.status(201).send();

})

app.listen(3333);