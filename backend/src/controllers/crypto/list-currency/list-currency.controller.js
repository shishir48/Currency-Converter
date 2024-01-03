const axios = require("axios")

module.exports = async (req, res) => {
  try {
    const cryptoUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    const cryptoResponse = await axios.get(cryptoUrl)
    const currencyUrl =
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    const currencyResponse = await axios.get(currencyUrl)
    res.status(200).send({
      crypto: cryptoResponse.data,
      currency: currencyResponse.data,
    })
  } catch (e) {
    console.log(e.response)
    res.status(500).send("ERROR")
  }
}
