const { Url_Foto } = require('../models')

class userRepository {
    constructor() {
        this.UrlFotoModel = Url_Foto;
    }

    async getFotoByUserId(userId) {
        const result = await this.UrlFotoModel.findOne({
            where: { userId }
        })
        return result
    }

    async createUrlFoto(data) {
        const result = await this.UrlFotoModel.create(data)
        return result
    }

    async deleteUrlFoto(id) {
        const result = await this.UrlFotoModel.destroy({
            where: { id }
        })
        return result
    }
}

module.exports = userRepository
