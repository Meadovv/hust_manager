const login = (req, res) => {
    res.status(200).send({
        success: true,
        message: "API WORK!"
    })
}

const register = (req, res) => {

}

module.exports = {
    login,
    register
}