const express = require('express')
const app = express()
// Middleware
app.use(express.json())

app.get('/getAll', (req,res) => {
    res.json({
        "status":"Petición por get recibida.."
    })
})

let arreglo = []
app.post('/ingresaAlumno', (req, res) =>{
    arreglo.push(req.body)
    res.json(arreglo)
})

app.get('/mostrarAlumnos', (req,res) =>{
    res.json(arreglo)
})

app.get('/buscaAlumno/:id', (req, res) =>{
    res.json(arreglo.filter((arreglo) => arreglo.id === parseInt(req.params.id)))
})

app.put('/actualizaAlumno/:id', (req, res) => {
    const alumnoId = parseInt(req.params.id)    
    const alumnoIndex = arreglo.findIndex((alumno) => alumno.id === alumnoId)
    
    if (alumnoIndex !== -1) {
        arreglo[alumnoIndex] = {
            ...arreglo[alumnoIndex],
            ...req.body
        }
        
        res.json({ mensaje: 'Información del alumno actualizada con éxito'})
    }
});

app.delete('/eliminaAlumno/:id', (req, res) => {
    const alumnoId = parseInt(req.params.id)
    const alumnosSinEliminar = arreglo.filter((alumno) => alumno.id !== alumnoId)

    if (alumnosSinEliminar.length < arreglo.length) {
        arreglo = alumnosSinEliminar;
        res.json({ mensaje: 'Alumno eliminado con éxito' })
    }
})



/*app.get('/rutax/:num', (req,res) => {
    const numero = parseInt(req.params.num)

    let binario = ''
    while (numero > 0){
        const residuo = numero % 2
        binario = residuo + binario
        numero = Math.floor(numero / 2)
    }

    res.json({
        "result": binario
    })
})

app.get('/binario/:number', (req,res) => {
    const numero = parseInt(req.params.num)

    let binario
    let result = ''
    while (numero > 0){
        binario = parseInt(numero%2)
        result = r + result
        numero = parseInt(numero/2)
    }

    res.json({
        "result": result
    })
})*/

app.post('/insertProduct', (req,res) => {
    console.log(req.body)
    res.json({
        "status":"producto insertado"
    })
})

app.listen(3200, () => {
    console.log("Server on port 3200")
})