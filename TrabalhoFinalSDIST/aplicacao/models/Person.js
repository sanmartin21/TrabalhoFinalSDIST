const Model = require('./Model');
const mongoose = require('mongoose');

module.exports = class Person extends Model {
    model = 'person';

    constructor(data = {}) {
        super();
        this.fill(data);
    }

    getSchema() {
        return new mongoose.Schema({
            id: String,
            name: String,
            birthDate: String,
            cpf: String,
        });
    }

    attributes() {
        return ['id', 'name', 'birthDate', 'cpf']
    }
}