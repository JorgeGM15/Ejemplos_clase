const out = document.getElementById("output");
const sec = document.getElementById("sec");
const conc = document.getElementById("conc");

function log(msg){
    out.textContent += msg + "\n";
}

function tarea(nombre,tiempo){
    return new Promise(res=>{
        log(`El alumno ${nombre} inicia su tarea`);
        setTimeout(()=>{
            log(`El alumno ${nombre} terminó su tarea en ${tiempo/1000}s`);
            res();
        },tiempo
        )
    })
}

// secuencial
sec.onclick = async () =>{
    out.textContent="";
    log("Ejemplo secuencial");
    const inicio = performance.now();
    await tarea("Jorge",2000);
    await tarea("Bruno",3000);

    log(`Tiempo total de ejecución: ${((performance.now()-inicio) /1000).toFixed(2)}s`);
}

// concurrente
conc.onclick = async () => {
    out.textContent="";
    log("Ejemplo concurrente");
    const inicio = performance.now();

    await Promise.all(
        [
            tarea("Javier", 3000),
            tarea("Emmanuel", 1000)
        ]
    );

    log(`Tiempo total de ejecución: ${((performance.now()-inicio) /1000).toFixed(2)}s`);
}