const Controller = require(`./Controller`);
const Person = require(`../models/Person`);

class PersonController extends Controller {
    constructor() {
        super(new Person());
    }

    async save(data) {
        if ((await this.list({ cpf: data.cpf })).length > 0)
            return { error: true, message: "Essa pessoa já foi cadastrada!" }

        return super.save(data);
    }
}

module.exports = new PersonController();