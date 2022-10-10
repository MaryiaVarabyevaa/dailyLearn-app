const {User_words} = require('../models/models');
const ApiError = require('../error/ApiError');

class WordController {
    async create(request, response) {
      const {original_word, translated_word} = request.body;
      const word = await User_words.create({original_word, translated_word});
      return response.json(word);
    }
    async getAll(request, response) {
      const words = await User_words.findAll();
      return response.json(words);
    }
    async check(request, response) {
        
    }
}

module.exports = new WordController();