const axios = require("axios")

module.exports = async (req, res) => {
  const { source, amount, target } = req.body
  const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${source}&vs_currencies=${target}`
  const response = await axios.get(URL)
  const targetAmount = amount * response.data[source][target]
  res.status(200).send({ targetAmount })
}
