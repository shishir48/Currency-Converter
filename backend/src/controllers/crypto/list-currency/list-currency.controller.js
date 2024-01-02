const axios = require("axios")

module.exports = async (req, res) => {
  try {
    // const cryptoUrl =
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    // const cryptoResponse = await axios.get(cryptoUrl)
    // const currencyUrl =
    //   "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    // const currencyResponse = await axios.get(currencyUrl)
    // res.status(200).send({
    //   crypto: cryptoResponse.data,
    //   currency: currencyResponse.data,
    // })
    res.status(200).send({
      crypto: [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          image:
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          current_price: 45776,
          market_cap: 895892783364,
          market_cap_rank: 1,
          fully_diluted_valuation: 960501365067,
          total_volume: 30641818885,
          high_24h: 45870,
          low_24h: 42583,
          price_change_24h: 3151.21,
          price_change_percentage_24h: 7.39288,
          market_cap_change_24h: 60375269762,
          market_cap_change_percentage_24h: 7.22609,
          circulating_supply: 19587425,
          total_supply: 21000000,
          max_supply: 21000000,
          ath: 69045,
          ath_change_percentage: -33.71925,
          ath_date: "2021-11-10T14:24:11.849Z",
          atl: 67.81,
          atl_change_percentage: 67388.66947,
          atl_date: "2013-07-06T00:00:00.000Z",
          roi: null,
          last_updated: "2024-01-02T09:53:04.401Z",
        },
        {
          id: "ethereum",
          symbol: "eth",
          name: "Ethereum",
          image:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          current_price: 2422.4,
          market_cap: 290897167796,
          market_cap_rank: 2,
          fully_diluted_valuation: 290897167796,
          total_volume: 15938761021,
          high_24h: 2434.45,
          low_24h: 2297.13,
          price_change_24h: 123.07,
          price_change_percentage_24h: 5.35225,
          market_cap_change_24h: 15097574918,
          market_cap_change_percentage_24h: 5.47411,
          circulating_supply: 120185070.566525,
          total_supply: 120185070.566525,
          max_supply: null,
          ath: 4878.26,
          ath_change_percentage: -50.35803,
          ath_date: "2021-11-10T14:24:19.604Z",
          atl: 0.432979,
          atl_change_percentage: 559203.15657,
          atl_date: "2015-10-20T00:00:00.000Z",
          roi: {
            times: 69.72168966776961,
            currency: "btc",
            percentage: 6972.168966776961,
          },
          last_updated: "2024-01-02T09:53:08.784Z",
        },
      ],
      currency: ["btc", "eth", "ltc", "bch"],
    })
  } catch (e) {
    console.log(e.response)
    res.status(500).send("ERROR")
  }
}
