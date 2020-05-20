import BaseRepository from '../base/BaseRepository';

interface Response {
    message: string;
}

class UserRepository implements BaseRepository<object> {

    public find(): Response {
        return {
            message: 'Finding all users from MikroORM'
        }
    }

    public create(data: object): object {
        return data;
    }
}

export default UserRepository;
