/**
 * MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 */

const app = new Vue({
    el:'#app',
    data: {
        listItems : [
            {
                item: 'Milk',
                isDone : false,
            },
            {
                item: 'Cheese',
                isDone : false,
            },
        ],
        priorityList : [
            {
                item: 'Milk',
                isDone : false,
            },
        ],
        newItem : '',
        isDone : false,
    },
    methods: {
        addItem : function(listName, itemToAdd){
            // se il valore == todoList aggiungi al elenco todoList
            newTask = {
                item: '',
                isDone : '',
            };
            newTask.item = itemToAdd;
            newTask.isDone = false;
            this.newItem = '';
            listName.push(newTask);
            // else aggiungi al elenco priorities
        },
        removeItem : function(list,itemToremove){
            list.splice(itemToremove, 1);
        },

        isDoneChange : function(list, index){
            list[index].isDone = !list[index].isDone;  
        },
    }
});