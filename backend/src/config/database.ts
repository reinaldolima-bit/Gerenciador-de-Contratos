import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    synchronize: true,
    logging: false,
    entities: [/* your entities here */],
    migrations: [],
    subscribers: [],
});

export default AppDataSource;