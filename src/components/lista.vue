<template>
    <div class="container center-align">
        <h3 class="green-text">{{title}}</h3>
        <div class="row">
            <div class="col s12 m5">
                <form class="row" action="#" method="post" id="forma_action" v-on:submit.prevent="onSubmit">
                    <div class="input-field col s12">
                        <input id="action" type="text" class="validate" v-model="item.descricao">
                        <label for="action">Insira um item na lista...</label>
                    </div>
                    <button class="btn" type="submit" name="action">Adicionar
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>

            <div class="col s12 m7">
                <table class="centered">
                    <thead>
                        <tr>
                            <th>Resolver</th>
                            <th>Descrição</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in itens" :key="index">
                            <td v-if="item.status == false">
                                <a href="#" @click.prevent="resolveItem(item)"><i class="material-icons green-text">check</i></a>
                            </td>
                            <td v-else> </td>
                            <td v-bind:class="{resolved : item.status}">{{ item.descricao }}</td>
                            <td>
                                <a href="#" @click.prevent="deleteItem(item)"><i class="material-icons red-text">delete</i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            item: {},
            itens: []
        }
    },
    methods: {
        onSubmit(){
            if(this.item == ''){
                alert('Favor digitar um item!')
            }else{
                this.itens.push({
                    descricao: this.item.descricao,
                    status: false
                })
                this.item = {}
            }
        },
        resolveItem(item){
            item.status = true
            this.$snotify.success("Item resolvido com sucesso!", 'Sucesso')
        },
        deleteItem(item){
            this.itens.splice(this.itens.indexOf(item), 1)
            this.$snotify.success("Item excluído com sucesso!", 'Sucesso')
        }
    },
}
</script>

<style scoped>

.resolved{text-decoration: line-through; color: gray;}
    
</style>