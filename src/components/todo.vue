<template>

    <div class="text-sm bg-black text-white fixed top-20 
            left-4 w-12 grid place-items-center rounded-full p-4 
            text-2xl font-bold">
            {{allTasks}} 
    </div>
    <div class="p-4 grid lg:grid-cols-3 mt-36">
        <div class="">
            <h1 class="font-bold text-4xl">{{title}}</h1>

            <div>
                <h2 class="font-bold text-2xl mt-4">Add Strategy</h2>
                <input 
                type="text"
                v-model="newStrategy"
                placeholder="new strategy"
                class="p-4 rounded border-2 border-black hover:bg-sky-200 duration-300 mt-2"
                >

            </div>

            <div>
                <h2 class="font-bold text-2xl mt-4">Add tactics</h2>
                <input 
                type="text"
                v-model="newTask"
                @keyup.enter="addTask"
                placeholder="new tactic"
                class="p-4 rounded border-2 border-black hover:bg-sky-200 duration-300"
                >

                <button 
                @click="addTask"
                :disabled="newTask.length < 1"
                class="text-4xl font-bold m-4 hover:text-sky-500 duration-300"
                >
                +
                </button>
            </div>
        </div>       
        
        <div class="col-span-2">
            <h1 class="font-bold lg:text-8xl text-4xl mt-8">{{newStrategy}}</h1>
            <ul class="mt-8 text-2xl font-bold">
                <li 
                v-for="(task, index) in latest" 
                :key="task.id"
                @click="finishTask(task)"
                :class="{strikeout: task.finished}">
                    {{index + 1}}. {{task.name}}
                
                <div v-if="task.finished">
                    <button
                    @click="removeTask(task.id)" 
                    class="p-4 border-2 border-white rounded shadow-2xl">Delete Task</button>
                </div>
                
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Make Plan',
                newTask: '',
                newStrategy: '',
                tasks: []
            }
        },
        methods: {
            addStrategy() {
                if (this.newStrategy.length < 1) return

                this.newStrategy = ''
            },
            addTask() {
                if (this.newTask.length < 1) return

                this.tasks.push({
                    id: this.tasks.length + 1,
                    name: this.newTask,
                    finished: false
                });

                this.newTask = ''
            },
            removeTask(taskID) {
                this.tasks = this.tasks.filter(task => {
                    return task.id !== taskID
                })
            },
            finishTask(task) {
                task.finished = !task.finished
            }
        },
        computed: {
            allTasks() {
                return this.tasks.length
            },
            latest() {
                return [...this.tasks].reverse()
            }
        }

    }
</script>

<style>
.strikeout {
    text-decoration: line-through;
}
</style>