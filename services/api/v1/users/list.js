module.exports = async function (f, opts) {
    f.get('/list', async (req, res) => {
        res.send([0, 1, 2])
    })
}
