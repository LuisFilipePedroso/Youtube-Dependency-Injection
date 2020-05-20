import BaseRepository from "./base/BaseRepository";
import User from "../models/base/User";

class UserRepository {
    private repository: BaseRepository<object>;

    constructor(repository: BaseRepository<object>) {
        this.repository = repository;
    }

    public find(): object {
        return this.repository.find();
    }

    public create(user: User): object {
        return this.repository.create(user);
    }
}

export default UserRepository;
