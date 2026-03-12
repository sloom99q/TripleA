import { db } from "./db";

export function initDatabase() {
db.exec(`
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,

    content_html TEXT NOT NULL,
    content_text TEXT NOT NULL,

    keywords TEXT, 

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    published INTEGER DEFAULT 0
  );
`);
//   db.exec("PRAGMA foreign_keys = ON;");
}
