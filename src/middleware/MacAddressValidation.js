const MacAddressValidation = (req, res, next) => {
    if (!req.body.macAddress) {
        return res.status(400).json({error: "MacAddress é obrigatório"})
    }else {
        next()
    }
}

module.exports = MacAddressValidation