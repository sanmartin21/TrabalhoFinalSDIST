const express = require('express');
const router = express.Router();

const PersonController = require(`./controller/PersonController`);
const AddressController = require(`./controller/AddressController`);
const ContactController = require(`./controller/ContactController`);


router.get('/person/:id', async (req, res) => {
    const person = await PersonController.find({ key: 'id', value: req.params.id })
    res.render('person', { person: person });
});

router.post('/person', async (req, res) => {
    const response = await PersonController.save({ ...req.body });
    res.send(response);
});

router.get('/persons', async (req, res) => {
    const response = await PersonController.list(req.params);
    res.send(response);
});


router.get('/address/:id', async (req, res) => {
    const person = await AddressController.find({ key: 'id', value: req.params.id })
    res.render({ person: person });
});

router.post('/address', async (req, res) => {
    const response = await AddressController.save({ ...req.body });
    res.send(response);
});

router.get('/addresses', async (req, res) => {
    const response = await AddressController.list();
    res.send(response);
});

router.delete('/address/:id', async (req, res) => {
    const response = await AddressController.deleteById(req.params.id);
    res.send(response);
});

router.get('/contact/:id', async (req, res) => {
    const person = await ContactController.find({ key: 'id', value: req.params.id })
    res.render({ person: person });
});

router.post('/contact', async (req, res) => {
    const response = await ContactController.save({ ...req.body });
    res.send(response);
});

router.get('/contacts', async (req, res) => {
    const response = await ContactController.list();
    res.send(response);
});


module.exports = router;