const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json());
app.use(cors())
|   

app.listen(3006, ()=>{
    console.log('server startend')
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'kuminii'
})
app.get('/',(req, res)=>{
    db.query('select * from producto',
    (err,result) =>{
        if(err)console.log(err)
        else{
            res.send(result)
            console.log("Metodo Get", result)
        }
    }
    )
})

app.post('/crear', (req,rest)=>{
    const id = req.body.id_producto; 
    const categoria = req.body.categoria;
    const subcategoria = req.body.subcategoria;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const imagen = req.body.imagen;
    const codCate = req.body.codCate;

    db.query('INSERT INTO producto VALUES (?,?,?,?,?)', [id_producto, categoria, subcategoria, nombre, precio,imagen] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El producto se registra con exito")
            console.log("El producto se registro con exito", result)
        }
    }
})

app.put('/edit', (req,res)=>{
    const id = req.body.id_producto; 
    const categoria = req.body.categoria;
    const subcategoria = req.body.subcategoria;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const imagen = req.body.imagen;
    const codCate = req.body.codCate;

    db.query('UPDATE producto SET categoria=?,subcategoria=?,nombre=?,precio=? imagen=? WHERE id_producto=?', [categoria, subcategoria, nombre, precio,imagen,id_producto] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El producto se actualizo con exito", result)
            console.log("El producto se registro con exito", result)
        }
    }

} )

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM producto WHERE id=?', id_producto ),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar", result)
            console.log("El producto eliminado con exito!!", result)
        }
    }
})