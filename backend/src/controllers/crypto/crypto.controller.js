const express = require("express")
const router = express.Router()

const listCurrencyController = require("./list-currency/list-currency.controller")
const convertCurrencyController = require("./convert-currency/convert-currency.controller")

/**
 * list crypto currencies and currencies
 *
 * @endpoint GET /currency
 *
 */
router.get("/currency", listCurrencyController)
router.post("/convert", convertCurrencyController)

module.exports = router
