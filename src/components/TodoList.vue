<template>
    <div class="todo-list">
        <h1>{{ title }}</h1>
        <ol>
            <li v-for="(item,index) in items">{{item}} <button @click="deleteElement(index)">X</button></li>
        </ol>
        <p>
            <input
                    type="text"
                    class="input"
                    @keypress.enter="addElement"
                    v-model="newElement"
            >
        </p>
        <p>
            <button @click="clear">Clear {{items.length}} </button>
        </p>
    </div>
</template>

<script>
    import {Component, Prop, Vue} from "vue-property-decorator";

    export default {
        name: "TodoList",
        components: {},
        props: {
            title: {
                type: String,
                default: "TO-DO List"
            }
        },
        data() {
            return {
                items: [],
                newElement: ""
            }
        },
        methods: {
            addElement() {
                this.items.push(this.newElement)
                this.newElement = ""
            },
            clear() {
                this.items = []
            },
            deleteElement(index){
                this.items.splice(index, 1)
            }
        }
    };

    // @Component
    // export default class HelloWorld extends Vue {
    //   @Prop() private msg!: string;
    // }
</script>