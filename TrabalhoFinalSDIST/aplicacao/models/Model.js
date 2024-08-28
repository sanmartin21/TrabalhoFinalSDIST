module.exports = class Model {
    constructor() { }

    serialize(data) {
        const attributes = this.attributes();

        Object.keys(data).forEach(key => {
            if (!attributes.includes(key))
                delete data[key];
        });

        return data
    }

    fill(data) {
        const attributes = this.attributes();

        Object.keys(data).forEach(key => {
            if (attributes.includes(key))
                this[key] = data[key];
        });
    }
}