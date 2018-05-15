module.exports = function (app, fs) {
    // index page
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/login', (req, res) => {
        res.render('login')
    })
}