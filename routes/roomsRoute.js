const express = require("express");
const router = express.Router();

const Room = require('../models/room')

router.get("/getallrooms", async(req, res) => {
    try {
        const rooms = await Room.find({})
        res.send(rooms);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.post("/getroombyid", async(req, res) => {

    const roomid = req.body.roomid;

    try {
        const room = await Room.findOne({_id : roomid})
        res.send(room);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/addroom' , async(req, res) => {
    try {
        const newroom = new Room(req.body)
        await newroom.save()

        res.send('New Room Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      await room.remove();
      res.send(`Room ${req.params.id} deleted successfully`);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  });


module.exports = router;