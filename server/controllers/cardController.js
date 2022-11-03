const {User_words} = require('../models/models');
const ApiError = require('../error/ApiError');
class CardController {
    async create(req, res) {
        const {original_word, translated_word} = req.body;
        const word = await User_words.create({original_word, translated_word});
        return res.json(word);
    }
    async getAll(req, res) {
        const words = await User_words.findAll();
        return res.json(words);
    }
    // todo: finish check function
    // async check(req, res) {
    //     res.json('lala')
    // }
}
module.exports = new CardController ();
