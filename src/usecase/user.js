class userUseCase {
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUser(filter){
        let result = {
            isSuccess: true,
            statusCode: 200,
            data: []
        }

        const userResult = await this.userRepository.getAllUser(filter);
        
        result.data = userResult
        return result
    }

    async getUserById(id){
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }

        const userResult = await this.userRepository.getUserById(id);
        if (userResult === null) {
            result.reason = 'user not found';
            return result;
        }
        result.isSuccess = true;
        result.statusCode = 200;
        result.data = userResult
        return result
    }

    
    async createUser(userData){
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }

        const userResult = await this.userRepository.createUser(userData);

        result.isSuccess = true;
        result.statusCode = 200;
        result.data = userResult
        return result
    }

    async updateUser(userData, id){
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }
        const getUser = await this.userRepository.getUserById(id)
        if (getUser === null) {
            result.reason = "user not found"
        }

        await this.userRepository.updateUser(userData, id)


        result.isSuccess = true;
        result.statusCode = 200;
        result.data = userResult
        return result
    }

    async deleteUser(userData, id){
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }
        const getUser = await this.userRepository.getUserById(id)
        if (getUser === null) {
            result.reason = "user not found"
        }

        await this.userRepository.deleteUser(userData, id)


        result.isSuccess = true;
        result.statusCode = 200;
        result.data = userResult
        return result
    }
}

module.exports = userUseCase;
