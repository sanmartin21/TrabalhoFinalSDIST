const Controller = require(`./Controller`);
const Address = require(`../models/Address`);

class AddressController extends Controller {
    constructor() {
        super(new Address());
    }

    async save(data) {
        const existingAddress = await this.list({
            number: data.number,
            street: data.street,
            city: data.city,
            state: data.state
        });

        if (existingAddress.length > 0) {
            return { error: true, message: "Este endereço já foi cadastrado!" };
        }

        return super.save(data);
    }

    async deleteById(addressId) {
        const result = await this.delete({ id: addressId });
        if (result) {
            return { success: true, message: "Endereço deletado com sucesso!" };
        } else {
            return { error: true, message: "Erro ao deletar o endereço!" };
        }
    }
}

module.exports = new AddressController();
