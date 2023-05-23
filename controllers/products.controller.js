module.exports.productsController = {
  getProducts: (red, res) => {
    res.json(["user1", "user2", "user3"]);
  },
  getProducts1: (red, res) => {
    res.json({ name: "Adam", city: "Grozny" });
  },
  postProducts: (red, res) => {
    res.json("юзер добавлен");
  },
  deleteProducts: (red, res) => {
    res.json("юзер с ID :id удален");
  },
};
