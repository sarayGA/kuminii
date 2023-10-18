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


//sugerencia//

app.get('/sugerencias',(req, res)=>{
    db.query('select * from sugerencias',
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
    const id_cliente = req.body.id_cliente; 
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;
    const img = req.body.img;
    
    db.query('INSERT INTO sugerencias VALUES (?,?,?,?,?)', [id_cliente, nombre,  email, mensaje,img] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El cliente envio la sugerencia con exito")
            console.log("El cliente se registro con exito", result)
        }
    }
})

app.put('/edit', (req,res)=>{

    const id_cliente = req.body.id; 
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;
    const img = req.body.img;
    
    db.query('UPDATE orden SET Nombre=?,N_Telefono=?,Email=? WHERE id_cliente=?', [id_cliente, nombre, email, mensaje, img] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("eEl cliente envio la sugerencia con exito", result)
            console.log("El cliente se registro con exito", result)
        }
    }

} )

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM sugerencia WHERE id=?', id_cliente ),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar", result)
            console.log("El cliente eliminado con exito!!", result)
        }
    }
})





