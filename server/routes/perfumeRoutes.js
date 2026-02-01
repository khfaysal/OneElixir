const express = require('express');
const router = express.Router();
const Perfume = require('../models/Perfume');

// GET all perfumes
router.get('/', async (req, res) => {
    try {
        const perfumes = await Perfume.find();
        res.json(perfumes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new perfume (for your admin use)
router.post('/', async (req, res) => {
    const perfume = new Perfume({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        scentProfile: req.body.scentProfile,
        image: req.body.image
    });

    try {
        const newPerfume = await perfume.save();
        res.status(201).json(newPerfume);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;