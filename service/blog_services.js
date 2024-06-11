const express = require("express");
const pool = require("../module.js");
const { Query } = require("pg");

class BlogService {
  constructor() {
    this.db = pool;
  }

  async blogDisplay() {
    const result = await this.db.query(`SELECT * FROM blogs ORDER BY id ASC`);
    return result;
  }

  async specificBlog(ID) {
    const result = await this.db.query(`SELECT * FROM blogs WHERE id = ${ID}`);
    return result;
  }

  async specificBlogByUser(USID) {
    const result = await this.db.query(
      `SELECT * FROM blogs WHERE users_id = ${USID}`
      // `SELECT users.id, users.name, blogs.title, blogs.content FROM users INNER JOIN blogs ON users.id=blogs.id;`
    );
    return result;
  }

  async inputBlog(users_id, title, content) {
    console.log("wii");
    const result = await this.db.query(
      `INSERT INTO blogs (users_id, title, content) 
      VALUES ('${users_id}', '${title}', '${content}') RETURNING *`
    );
    console.log("woo");
    return result;
  }

  async updateBlog(ID, users_id, title, content) {
    const result = await this.db.query(
      `UPDATE blogs SET users_id = '${users_id}', title = '${title}', content = '${content}'`
    );
    return result;
  }

  async deleteBlog(ID) {
    const result = await this.db.query(`DELETE FROM blogs WHERE id = ${ID}`);
    return result;
  }
}

module.exports = BlogService;
