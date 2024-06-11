const express = require("express");
const pool = require("../module.js");
const { Query } = require("pg");

class UserService {
  constructor() {
    this.db = pool;
  }

  async userDisplay() {
    const result = await this.db.query(`SELECT * FROM users ORDER BY id ASC`);
    return result;
  }

  async specificUser(ID) {
    const result = await this.db.query(`SELECT * FROM users WHERE id = ${ID}`);
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
