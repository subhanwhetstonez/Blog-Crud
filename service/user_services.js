const express = require("express");
const pool = require("../module.js");
const { Query } = require("pg");

class UserService {
  constructor() {
    this.db = pool;
  }

  async userDisplay() {
    const result = await this.db.query(
      `SELECT users.id, name, title, content FROM users LEFT JOIN blogs ON users.id = blogs.users_id`
    );
    return result;
  }

  async specificUser(ID) {
    const result = await this.db.query(
      `SELECT users.id, name, title, content FROM users INNER JOIN blogs ON users.id = ${ID}`
    );
    return result;
  }

  async blogByUser(USID) {
    const result = await this.db.query(
      `SELECT * FROM blogs WHERE users_id = ${USID}`
    );
    return result;
  }

  async inputUser(name) {
    const result = await this.db.query(
      `INSERT INTO users (name) 
      VALUES ('${name}') RETURNING *`
    );
    return result;
  }

  async updateUser(ID, name) {
    const result = await this.db.query(`UPDATE users SET name = ${name}`);
    return result;
  }

  async deleteUser(ID) {
    const result = await this.db.query(`DELETE FROM users WHERE id = ${ID}`);
    return result;
  }
}

module.exports = UserService;
