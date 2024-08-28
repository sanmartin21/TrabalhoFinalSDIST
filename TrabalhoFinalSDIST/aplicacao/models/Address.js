const Model = require('./Model');
const mongoose = require('mongoose');

module.exports = class Address extends Model {
    model = 'address';

    constructor(data = {}) {
        super();
        this.fill(data);
    }

    getSchema() {
        return new mongoose.Schema({
            number: Number,
            street: String,
            city: String,
            state: String
        });
    }

    attributes() {
        return ['id', 'number', 'street', 'city', 'state'];
    }
}
