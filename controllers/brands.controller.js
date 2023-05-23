module.exports.brandsController = {
  getBrands: (red, res) => {
    res.json(["user2"]);
  },

  postBrands: (red, res) => {
    res.json("добавлен");
  },
  deleteBrands: (red, res) => {
    res.json("id удален");
  },
};
