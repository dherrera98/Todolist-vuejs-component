"use strict"
//Componente footer

Vue.component("footer-comp",{
    props:["tareas"],
    template: `
    <footer>
        <p>Totales: <span>{{total}}</span></p>
        <p>Sin completar: <span>{{sinCompletar}}</span></p>
        <p>Completadas: <span>{{completada}}</span></p>
    </footer>`,
    computed:{
        total(){
            if(this.tareas != null){
                return this.tareas.length
            }
        },
        sinCompletar(){
            var contador = 0
            this.tareas.forEach(tarea => {
                if(tarea.completada == false){
                     contador++
                }
            });
            return contador
        },
        completada(){
             var contador = 0
             this.tareas.forEach(tarea => {
                 if(tarea.completada){
                      contador++
                 }
             });
             return contador
        }
    }
})

//Componente header
Vue.component("header-comp",{
    props:["titulo"],
    template:"#header-temp"
})

//Componente header
Vue.component("anadirtarea-comp",{
    template:`
    <div class="anadirTarea">
        <input type="text" v-model="inputNuevo" @keyup.enter="anadir()" placeholder="Nueva tarea" :maxlength="max">
    </div>`,
    data(){
        return {
            inputNuevo: ""
        }
    },
    methods:{
        anadir(){
            if(this.inputNuevo != ""){
                this.$emit("nueva-tarea",({
                    nombre: this.inputNuevo,
                    prioridad: false,
                    completada: false
                }))
                this.inputNuevo = ""
            }
            let tareasStorage = localStorage.setItem("tareas",JSON.stringify(this.tareas))
        }
    },
    computed:{
        max(){
            return screen.width/17
           }
    }
    })

//componente tareas
Vue.component("tareas-comp",{
    props:["tareas"],
    template:"#tareas-temp",
    methods:{
        eliminarTarea(key){
            this.$emit("elim-tarea", key)
        },

        completarTarea(key){
            this.$emit("comp-tarea", key)
        },
    },
    filters:{
        upperCase(tarea){
            tarea.toString()
            return tarea[0].toUpperCase() + tarea.slice(1,tarea.length).toLowerCase()
        },
        upperCase(data){
            data.toString()
            return data[0].toUpperCase() + data.slice(1,data.length).toLowerCase()
            return data[0].toUpperCase() + data.slice(1,data.length)
        },
    }
})

//instancia
const app = new Vue({
    el:"#app",
    data:{
        titulo:"TodoList",
        tareas:[],
        inputNuevo: "",
    },
    beforeMount(){
        if(JSON.parse(localStorage.getItem("tareas") != null)){
            this.tareas = JSON.parse(localStorage.getItem("tareas"))
        }
    },

    updated(){
        let tareasStorage = localStorage.setItem("tareas",JSON.stringify(this.tareas))
    },

    methods:{
        borrar(key){
            this.tareas.splice(key,1);
        },
        estado(key){
            this.tareas[key].completada = !this.tareas[key].completada
        },
        nuevaTarea(datos){
            this.tareas.unshift(datos)
        }
    }

})