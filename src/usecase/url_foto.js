class urlFotoUseCase {
    constructor (urlFotoRepository, userRepository) {
        this.urlFotoRepository = urlFotoRepository;
        this.userRepository = userRepository;
    }

    
    async urlFotoCreate(data , file){
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }

        const UrlFoto = await this.userRepository.urlFotoCreate(data , file);

        result.isSuccess = true;
        result.statusCode = 200;
        result.data = userResult
        return result
    }
}

module.exports = urlFotoUseCase;
