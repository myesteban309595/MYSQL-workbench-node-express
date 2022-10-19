const router = require('express').Router();

router.get('/', (req,res)=> {
    req.getConnection((err, conn) => {
        
        if(err) return res.send(err);

        conn.query('SELECT * FROM books', (err, rows)=> {
            if(err) return res.send(err);
            res.json(rows)
        })
    });
});

router.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        console.log(req.body);
        if(err) return res.send(err);

        conn.query('INSERT INTO books set ?',[req.body], (err, rows)=> {
            if(err) return res.send(err);
            res.json(rows)
        })
    });
})

router.delete('/:id', (req,res) => {
    req.getConnection((err, conn) => {
        console.log(req.body);
        if(err) return res.send(err);

        conn.query('DELETE FROM books WHERE id = ?',[req.params.id], (err, rows)=> {
            if(err) return res.send(err);
            res.send("el libro ha sido eliminado")
        })
    });
})

router.put('/:id', (req,res) => {
    req.getConnection((err, conn) => {
        console.log(req.body);
        if(err) return res.send(err);

        conn.query('UPDATE books set ? WHERE id = ?',[req.body, req.params.id], (err, rows)=> {
            if(err) return res.send(err);
            res.send("el libro ha sido modificado")
        })
    });
})


module.exports = router