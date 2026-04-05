import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory:')

db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username text UNIQUE,
        password text
    )
    `)

db.exec(`
    CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id int,
        task text,
        completed boolean DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `)

export default db