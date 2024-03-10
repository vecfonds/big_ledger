import { DataSource } from 'typeorm';

// import { UserEntity } from './mudules/user/entities/user.entity';
// import { LocationEntity } from './mudules/location/entities/location.entity';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '1433'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
  },
  synchronize: true,
  logging: true,
  // entities: [UserEntity, LocationEntity],
  subscribers: [],
  migrations: [],
});

// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//     })
//     .catch((error) => console.log(error))
