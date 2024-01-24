const express = require('express')
const db = require('./connector')

const router = express.Router();

router.get("/orders", async (req, res) => {
    try {

        //taking default value of limit and offset if they are not available.
        let limit = req.query.limit || 10;
        let offset = req.query.offset || 0;

        // regular expression to verify limit and offset should only be integers
        let reg = /^[0-9]+$/;
        if (!reg.test(limit) || !reg.test(offset)) {
            limit = 10;
            offset = 0;
        }

        // converting into integers as query params comes as string
        limit = parseInt(limit)
        offset = parseInt(offset)

        //Cheching whether given offset value is more than the rows available in orders or not.
        //If all goes well then fetch the orders
        
        let query = 'SELECT * FROM orders'
        db.query(query, [limit, offset], (err, result) => {
            if (err) {
                return res.status(500).json({ status: false, error: `Internal server error ${err}` });
            }
            if (result.length <= offset) {
                return res.status(200).json({ status: true, data: "No more orders are there" });
            }
            else {
                query = 'SELECT * FROM orders LIMIT ? OFFSET ?'

                db.query(query, [limit, offset], (err, result) => {
                    if (err) {
                        return res.status(500).json({ status: false, error: `Internal server error ${err}` });
                    }
                    if (result.length > 0) {
                        return res.status(200).json({ status: true, data: result });
                    }
                })
            }
        })

    } catch (error) {
        res.status(500).json(`Internal server error occured ${error}`);
    }
})

module.exports = router;