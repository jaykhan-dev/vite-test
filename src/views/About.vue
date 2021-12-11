<template>
    <div class="bg-sky-500 p-4">
        <h1 class="text-4xl font-bold text-white my-12">About</h1>
        <img :src="logoURL" :alt="logoCaption" width="1600" height="200">
        <h1 class="text-white font-bold text-6xl">{{title}}</h1>
        <h2 class="font-bold text-3xl my-4 text-white">Add a new Task</h2>
        <span class="text-sm text-white">You have {{allTasks}} {{allTasks > 1 ? 'tasks': 'task'}} at the moment</span>
        <div>
            <input 
            type="text"
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Add a new task"
            class="p-4 rounded hover:bg-sky-900 duration-300"
            >

            <button 
            @click="addTask"
            :disabled="newTask.length < 1"
            class="text-4xl font-bold m-4 hover:text-white duration-300"
            >
            +
            </button>
        </div>

        <div v-if="newTask.length > 0">
            <h3 class="text-white text-sm">New task Preview</h3>
            <p class="text-2xl font-bold my-2 text-blue-900">{{newTask}}</p>
        </div>

        <ul class="mt-8 text-white text-2xl font-bold">
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
</template>

<script>
    export default {
        data () {
            return {
                title: 'My To do App',
                newTask: '',
                logoURL: 'https://images.unsplash.com/photo-1584237863847-b21b4f7ccd4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80',
                logoCaption: 'A Photo by Kelly Sikkema on Unsplash showing post-it notes',
                tasks: [
                    { id: 1, name: 'Learn Vue3', finished: false },
                    { id: 2, name: 'Consume KhanQuest API', finished: false },
                    { id: 3, name: 'Deploy to Netlify', finished: true }
                ]
            }
        },
        methods: {
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