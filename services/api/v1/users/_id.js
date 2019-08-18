module.exports = async function (f, opts) {
    f.get('/:id', async (req, res) => {
        res.send({ answer: 42 })
    })
}