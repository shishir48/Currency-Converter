import { useEffect, useState } from "react"
import axios from "axios"
import DefaultLayout from "../../layouts/default/default.layout"
import "./coverter.css"

const converter = () => {
  const [crypto, setCrypto] = useState([])
  const [currency, setcurrency] = useState([])
  const [selectCrypto, setSelectCrypto] = useState("")
  const [selectCurrency, setSelectCurrency] = useState("")
  const [amount, setAmount] = useState("")
  const [targetAmount, setTargetAmount] = useState("")

  useEffect(() => {
    const url = "http://localhost:3002/api/crypto/currency"
    axios.get(url).then((response) => {
      setCrypto(response.data.crypto)
      setcurrency(response.data.currency)
    })
  }, [])

  const handleCryptoChange = (e) => {
    e.preventDefault()
    setSelectCrypto({
      id: e.target.options[e.target.selectedIndex].getAttribute("data-id"),
      value: e.target.value,
    })
  }
  const handleCurrencyChange = (e) => {
    e.preventDefault()
    setSelectCurrency(e.target.value)
  }

  const handleAmountChange = (e) => {
    e.preventDefault()
    setAmount(e.target.value)
  }

  const convert = async (e) => {
    e.preventDefault()
    const url = "http://localhost:3002/api/crypto/convert"
    const response = await axios.post(url, {
      source: selectCrypto.id,
      amount: amount,
      target: selectCurrency,
    })
    setTargetAmount(response.data.targetAmount)
  }

  return (
    <DefaultLayout>
      <div id="converter">
        <form action="" onSubmit={convert}>
          <label htmlFor="crypto">Choose a crypto:</label>

          <select
            name="crypto"
            id="crypto"
            value={selectCrypto.value}
            onChange={handleCryptoChange}
          >
            {crypto.length
              ? crypto.map((crypto) => {
                  return (
                    <option
                      data-id={crypto.id}
                      key={crypto.name}
                      value={crypto.name}
                    >
                      {crypto.name}
                    </option>
                  )
                })
              : null}
          </select>
          <input type="text" onChange={handleAmountChange} />
          <label htmlFor="currency">Choose a currency:</label>

          <select
            name="currency"
            id="currency"
            value={selectCurrency}
            onChange={handleCurrencyChange}
          >
            {currency.length
              ? currency.map((currency) => {
                  return (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  )
                })
              : null}
          </select>
          <button type="submit">Convert</button>
        </form>
        <h1 id="result">{targetAmount}</h1>
      </div>
    </DefaultLayout>
  )
}

export default converter
