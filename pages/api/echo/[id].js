export default function getById(req, res) {
    // res.statusCode = 200
    // res.setHEader('Content-Type', 'application/json')
    // res.end(req.query.id)
    res.json({
        yourId: req.query.id
    })
}
