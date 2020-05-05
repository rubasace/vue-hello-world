<template>
    <div class="todo-list">
        <h1>{{ title }}</h1>
        <ol>
            <li v-for="item in items">{{item}}</li>
        </ol>
        <p>
            <input
                    type="text"
                    class="input"
                    @keypress.enter="addElement"
                    v-model="newElement"
            >
        </p>
    </div>
</template>

<script>
    import {Component, Prop, Vue} from "vue-property-decorator";

    export default {
        name: "TodoList",
        components: {},
        data() {
            return {
                items: [],
                title: "TO-DO List",
                newElement: ""
            }
        },
        methods: {
            addElement() {
                this.items.push(this.newElement)
                this.newElement = ""
            }
        }
    };

    // @Component
    // export default class HelloWorld extends Vue {
    //   @Prop() private msg!: string;
    // }
</script>