const Phones = require("../data/phones.json");

exports.getPhones = async (req, res) => {
  try {
    res.json(Phones);
  } catch (error) {
    res.status(500).send("Hubo un error al obtener los Celulares");
  }
};
