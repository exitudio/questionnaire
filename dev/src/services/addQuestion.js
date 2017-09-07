import express from 'express'
const router = express.Router()
router.post('/addquestion', function (req, res) {
    return res.status(200).json(
        {
            status: 'complete!!!'
        })
})
export default router