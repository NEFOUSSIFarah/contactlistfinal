// require express 
const express = require ("express");
const Contact = require("../models/Contact");

const router = express.Router();


/// Routes

// test route
router.get("/test", (req, res) => {
    res.send("Hello world");
});

//add contact
router.post("/addcontact", async(req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new Contact({ name, email, phone });
        await newContact.save();
        res.status(200).send({ msg : "contact add successfully", newContact});
    } catch (error) {
        res.status(400).send({msg: "cannot add contact", error});
    }
});

//get all
router.get('/getAll', async (req, res) =>{
    try {
        const contactList = await Contact.find()
        res.status(200).send({msg: 'This is the list of all contacts', contactList});
    } catch (error) {
        res.status(400).send({msg:"cannot get contacts", error});
    }
});

 // get one contact
 router.get("/id", async(req, res) => {
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg:"I got the contact", contactToGet})
    } catch (error) {
        res.status(400).send({msg:"Cannot get contact", error });
    }
 });

 //delete contact
 router.delete('/:_id', async (req, res) => {
try {
    const {_id}= req.params
    await Contact.findOneAndDelete({_id})
    res.status(200).send({msg: "I deleted the contact"});
} catch (error) {
    res.status(200).send({msg: "Cannot delete contact with this id", error});
}
 });

//edit contact
router.put("/:_id", async (req, res) => {
    try {
        const { _id } = res.params;
        const result = await Contact.updateOne({_id}, { $set: {...req.body} });
        res.status (200).send({msg:"Contact updated ..."});
    } catch (error) {
        res
        .status(400)
        .send({msg:"Cannot Update", error});
    }
});

//export
module.exports = router;


