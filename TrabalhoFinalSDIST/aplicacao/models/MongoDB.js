const mongoose = require('mongoose');

module.exports = class MongoDB {
    async create(Schema, data) {
        return new Promise((resolve, reject) => {
            const modelData = new Schema(data);
            modelData.save(modelData)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        })
    }

    async list(Schema, filters) {
        return new Promise(async (resolve, reject) => {
            await Schema.find(filters)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        })
    }
}