const express = require("express")
const router = express.Router()

const crypto = require("../controllers/crypto/crypto.controller")

router.use("/crypto", crypto)

module.exports = router
