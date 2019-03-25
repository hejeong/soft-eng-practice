const express = require('express');
const router = express.Router();

// Announcement schema
const Announcement = require('../../schemas/announcements');

// @route   Get api/announcements
// @descr   Get All announcements
// @acess   ALL
router.get('/', (req,res) =>{   
    Announcement.find()
        .sort({ date: -1})
        .then(announcements=> res.json(announcements));

});

// @route   add one api/announcements
// @descr   Create a post
// @acess   Professor or TA
router.post('/', (req,res) => {
    const newAnnouncement = new Announcement({
        message: req.body.message
    });
    newAnnouncement.save().then(item => res.json(item));
});

// @route   Delete api/announcements/:id
// @descr   Delete a post
// @acess   Professor or TA
router.delete('/:id', (req,res) => {
    Announcement.findByIdAndDelete(req.params.id)
        .sort({ date: -1})
        .then(announcements=> res.json(announcements))
});


module.exports = router;