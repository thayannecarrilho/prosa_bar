module.exports = class prosaController {
    static home(req, res) {
        res.render('home')
    }
    static contrate(req, res) {
        res.render('contrate')
    }
    static login(req, res) {
        res.render('login')
    }
}

