<template>
<div class="flex justify-center dark:bg-black dark:text-white dark:duration-300">
    <div class="p-4 grid lg:grid-cols-3 lg:w-3/4 md:grid-cols-2 sm:w-full mt-20 items-start border-t border-gray-400">
        <div class="lg:sticky md:sticky top-20">
            <div class="text-sm p-4 text-2xl font-bold">
                {{allTasks}} 
            </div>
            <h1 class="font-bold text-4xl">{{title}}</h1>

            <div>
                <h2 class="font-bold text-2xl mt-4">Add Strategy</h2>
                <textarea 
                type="text"
                v-model="newStrategy"
                placeholder="new strategy"
                class="text-black p-4 rounded lg:w-56 md:w-3/4 w-full shadow-2xl h-20 border-2 border-black hover:bg-sky-200 duration-300 mt-2"
                >
                </textarea>

            </div>

            <div class="">
                <h2 class="font-bold text-2xl mt-4">Add tactics</h2>
                <input 
                type="text"
                v-model="newTask"
                @keyup.enter="addTask"
                placeholder="new tactic"
                class="p-4 lg:w-56 md:w-3/4 w-full rounded border-2 border-black hover:bg-sky-200 duration-300 text-black"
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
        
        <div class="lg:col-span-2">
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
</div>
    
</template>

<script>
    export default {
        data () {
            return {
                title: 'Make Plan',
                newTask: '',
                newStrategy: '',
                tasks: [],
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