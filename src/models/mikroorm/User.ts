import {Entity, PrimaryKey, Property} from "mikro-orm";

import BaseUser from "../base/User";

@Entity({ tableName: 'users' })
class User implements BaseUser{

    @PrimaryKey()
    id: string;

    @Property()
    name: string;
}

export default User;