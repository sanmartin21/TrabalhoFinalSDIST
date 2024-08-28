DB = require('../models/MongoDB')

const mongoose = require('mongoose');

module.exports = class Controller {

    Database = new DB();

    constructor(model) {
        this.model = model;
        this.mongooseModel = mongoose.model(this.model.model, this.model.getSchema())
    }

    save(data) {
        data = this.model.serialize(data);
        if (data.id)
            return this.update(data);

        return this.create(data);
    }

    create(data) {
        return this.Database.create(this.mongooseModel, data);
    }

    find(data) {
        return this.Database.findOne(this.mongooseModel, data)
    }

    list(filters) {
        return this.Database.list(this.mongooseModel, filters);
    }

    update(data) {
        return this.Database.update(this.mongooseModel, data);
    }

    delete(data) {
        return this.Database.delete(this.mongooseModel, data);
    }
}