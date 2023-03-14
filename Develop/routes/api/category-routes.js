const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get("/", (req, res) => {
  Category.findAll({
    params: ["id", "category_name"],
    include: [
      {
        model: Product,
        params: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    params: ["id", "category_name"],
    include: [
      {
        model: Product,
        params: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "No Category found with this id! " });
        return;
      }
      res.json(Data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// create a new category
router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((Data) => res.json(Data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
// update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Data) => res.json(Data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
// delete a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Data) => res.json(Data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
