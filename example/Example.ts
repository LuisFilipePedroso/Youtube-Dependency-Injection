interface Database {
    fetch(): string;
}

class Postgres implements Database {
    fetch(): string {
        return 'Buscando dados no banco postgres';
    }
}

class MySQL implements Database {
    fetch(): string {
        return 'Buscando dados no banco mysql';
    }
}

class App {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public fetch() {
        return this.database.fetch();
    }
}

const app = new App(new MySQL());
console.log(app.fetch());
