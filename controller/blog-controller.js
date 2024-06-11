const BlogService = require("../service/blog_services.js");

class BlogController {
  constructor() {
    this.blogService = new BlogService();
  }

  async blogDisplay(req, res) {
    const data = await this.blogService.blogDisplay();
    res.json(data.rows);
  }

  async bloguserDisplay(req, res) {
    const data = await this.blogService.specificBlogByUser(users_id);
    res.json(data.rows);
  }

  async oneBlog(req, res) {
    const { id } = req.params;
    const data = await this.blogService.specificBlog(id);
    res.json(data.rows);
  }

  async putinBlog(req, res) {
    const { users_id, title, content } = req.body;
    console.log("waa");
    await this.blogService.inputBlog(users_id, title, content);
    res.json("BLOG HAS BEEN ADDED");
  }

  async updateBlog(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    const data = await this.blogService.updateBlog(id, title, content);
    res.json(data.rows);
  }

  async deleteBlog(req, res) {
    const { id } = req.params;
    const data = await this.blogService.deleteBlog(id);
    res.send("BLOG DATA DELETED SUCCESSFULLY");
  }
}

module.exports = new BlogController();
