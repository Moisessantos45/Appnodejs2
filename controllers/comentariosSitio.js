import {Comentarios} from "../modules/Comentarios.js"
const guardarComentarios= async(req,res)=>{
    const{nombre,correo,mensaje}=req.body;
    
    const errores=[]

     if (nombre.trim()==="") {
        errores.push({mensaje:"El nombre esta vacio"})
     }
     if (correo.trim()==="") {
        errores.push({mensaje:"El correo esta vacio"})
     }
     if (mensaje.trim()==="") {
        errores.push({mensaje:"Mensaje esta vacio"})
     }
     if (errores.length>0) {
        const mensajes=await Comentarios.findAll();
        //mostrar los errores
        res.render("comentarios",{
            pagina: "comentarios",
            errores,
            nombre,
            correo,
            mensaje,
            comentario,
            mensajes
        })
        
     }else{
        try {
            await Comentarios.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect("/comentarios")
            
        } catch (error) {
            console.log(error)
        }
     }
     console.log(errores)
}

export {
    guardarComentarios
}