const Controller = require(`./Controller`);
const Contact = require(`../models/Contact`);

class ContactController extends Controller {
    constructor() {
        super(new Contact());
    }

    findByPerson(personId) {
        return this.Database.findMany({ key: 'person_id', value: personId })
    }
}

module.exports = new ContactController();