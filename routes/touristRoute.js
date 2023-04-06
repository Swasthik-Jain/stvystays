const express = require("express");
const router = express.Router();

const Place = require('../models/tourist')
router.get("/getallplaces", async(req, res) => {
    try {
        const places = await Place.find({})
        res.send(places);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});
router.post('/addplace' , async(req, res) => {
    try {
        const newroom = new Place(req.body)
        await newroom.save()

        res.send('New Room Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.delete('/deleteplace/:id', async(req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id)
        res.send(`Place with ID ${deletedPlace._id} deleted successfully`)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;