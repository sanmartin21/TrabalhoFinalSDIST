const Model = require('./Model');
const mongoose = require('mongoose');

module.exports = class Contact extends Model {
    model = 'contact';

    constructor(data = {}) {
        super();
        this.fill(data);
    }

    getSchema() {
        return new mongoose.Schema({
            phone: String,
            email: String,
            address: String
        });
    }

    attributes() {
        return ['id', 'phone', 'email', 'address'];
    }
}
