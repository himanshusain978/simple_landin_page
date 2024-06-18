const express = require("express")
const router = express.Router()
const {handleContact} = require("../controller/handlecontact")

router.post("/contact", handleContact)

module.exports = router