const express = require('express');

const router = express.Router();

const pool = require('../db/conexion')

//routes
router.get('/', (req, res) => {
    res.send('Hello World en Express desde Router');
});

//Crear lista de tareas
router.post('/tasks', async(req, res) => {
try {
    const { description } = req.body;
    const consulta = 'INSERT INTO task (description) VALUES ($1)';
    const values = [description];
    const result = await pool.query(consulta, values)
    res.json(result)
} catch (error) {
    console.log(error)
    
}

})

//Mostrar todas las tareas
router.get('/tasks', async(req, res) => {
   try {
       const consulta = 'SELECT * FROM task';
       const { rows } = await pool.query(consulta)
       
       res.json(rows)
   } catch (error) {
    console.log(error.message)
   }
})

router.get('/tasks/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const consulta = "SELECT * FROM task WHERE id = $1";
        const values = [id];
        const { rows } = await pool.query(consulta, values);
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
})

//Actualizar una tarea
router.put('/tasks/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const consulta = 'UPDATE task SET description = $1 WHERE id = $2';
        const values = [description, id];
        const { rows } = await pool.query(consulta, values)
        res.send('datos actualizados')
    
    } catch (error) {
        console.log(error.message)
    }
})


//Eliminar una tarea

router.delete('/tasks/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const consulta = 'DELETE FROM task WHERE id = $1';
        const values = [id];
        const { rows } = await pool.query(consulta, values)
        res.send('datos eliminados')
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = router