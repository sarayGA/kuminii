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
    const id_producto = req.body.id; 
    const Categoria = req.body.Categoria;
    const Subcategoria = req.body.Subcategoria;
    const Nombre = req.body.Nombre;
    const Precio = req.body.Precio;
    const Imagen = req.body.Imagen;


    db.query('INSERT INTO producto VALUES (?,?,?,?,?)', [id_producto, Categoria, Subcategoria, Nombre, Precio,Imagen] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El producto se registra con exito")
            console.log("El producto se registro con exito", result)
        }
    }
})

app.put('/edit', (req,res)=>{
    const id_producto = req.body.id; 
    const Categoria = req.body.Categoria;
    const Subcategoria = req.body.Subcategoria;
    const Nombre = req.body.Nombre;
    const Precio = req.body.Precio;
    const Imagen = req.body.Imagen;

    
    db.query('UPDATE producto SET categoria=?,subcategoria=?,nombre=?,precio=? imagen=? WHERE id_producto=?', [Categoria, Subcategoria, Nombre, Precio,Imagen,id_producto] ), 
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

//EMPLEADOS//

app.get('/',(req, res)=>{
    db.query('select * from empleado',
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
    const id_Empleado = req.body.id; 
    const Nombre = req.body.Nombre;
    const N_Telefono = req.body.N_Telefono;
    const Cargo = req.body.Cargo;
    


    db.query('INSERT INTO empleado VALUES (?,?,?,?,?)', [id_Empleado, Nombre, N_Telefono, Cargo] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El empleado se registra con exito")
            console.log("El empleado se registro con exito", result)
        }
    }
})

app.put('/edit', (req,res)=>{
    const id_Empleado = req.body.id; 
    const Nombre = req.body.Nombre;
    const N_Telefono = req.body.N_Telefono;
    const Cargo = req.body.Cargo;

    
    db.query('UPDATE empleado SET Nombre=?,N_Telefono=?,Cargo=? WHERE id_Empleado=?', [id_Empleado, Nombre, N_Telefono, Cargo] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El empleado se actualizo con exito", result)
            console.log("El empleado se registro con exito", result)
        }
    }

} )

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM empleado WHERE id=?', id_Empleado),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar", result)
            console.log("El empleado eliminado con exito!!", result)
        }
    }
})

//ORDEN//

app.get('/',(req, res)=>{
    db.query('select * from orden',
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
    const id_orden = req.body.id; 
    const id_cliente = req.body.id_cliente;
    const id_producto = req.body.id_producto;
    const fecha_pedido = req.body.fecha_pedido;
    const total = req.body.total;
    const id_Empleado = req.body.id_Empleado;
    


    db.query('INSERT INTO orden VALUES (?,?,?,?,?)', [id_orden, id_cliente, id_producto, fecha_pedido, total, id_Empleado] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("La orden se registra con exito")
            console.log("La orden se registro con exito", result)
        }
    }
})

app.put('/edit', (req,res)=>{

    const id_orden = req.body.id; 
    const id_cliente = req.body.id_cliente;
    const id_producto = req.body.id_producto;
    const fecha_pedido = req.body.fecha_pedido;
    const total = req.body.total;
    const id_Empleado = req.body.id_Empleado;
    
    
    
    db.query('UPDATE orden SET id_cliente=?,id_producto=?,fecha_pedido=?,total=?, id_Empleado WHERE id_orden=?', [id_orden, id_cliente, id_producto, fecha_pedido, total, id_Empleado] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("La orden se actualizo con exito", result)
            console.log("La orden se registro con exito", result)
        }
    }

} )

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM orden WHERE id=?', id_orden ),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar", result)
            console.log("La orden eliminado con exito!!", result)
        }
    }
})

//CLIENTE//

app.get('/',(req, res)=>{
    db.query('select * from cliente',
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
    const id_cliente = req.body.id; 
    const Nombre = req.body.Nombre;
    const N_Telefono = req.body.N_Telefono;
    const Email = req.body.Email;
    
    


    db.query('INSERT INTO cliente VALUES (?,?,?,?,?)', [id_cliente, Nombre, N_Telefono, Email] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El cliente se registra con exito")
            console.log("El cliente se registro con exito", result)
        }
    }
})

app.put('/edit', (req,res)=>{

    const id_cliente = req.body.id; 
    const Nombre = req.body.Nombre;
    const N_Telefono = req.body.N_Telefono;
    const Email = req.body.Email;
    
    
    
    db.query('UPDATE orden SET Nombre=?,N_Telefono=?,Email=? WHERE id_cliente=?', [id_cliente, Nombre, N_Telefono, Email] ), 
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("eEl cliente se actualizo con exito", result)
            console.log("El cliente se registro con exito", result)
        }
    }

} )

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM cliente WHERE id=?', id_cliente ),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar", result)
            console.log("El cliente eliminado con exito!!", result)
        }
    }
})

//sugerencia//

app.get('/',(req, res)=>{
    db.query('select * from sugerencia',
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
    const id_cliente = req.body.id; 
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;
    
    
    


    db.query('INSERT INTO cliente VALUES (?,?,?,?,?)', [id_cliente, nombre,  email, mensaje,] ), 
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
    
    
    
    
    db.query('UPDATE orden SET Nombre=?,N_Telefono=?,Email=? WHERE id_cliente=?', [id_cliente, nombre, email, mensaje] ), 
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





