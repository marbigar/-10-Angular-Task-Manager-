app.factory("TaskService", function() {

    return {
        getTasks: function() {
            return tasks;
        },
        deleteTask: function(id) {
            for(var key in tasks) {
                if( tasks[key].id == id ) {
                    tasks.splice(key, 1);
                }
            }
        },
        addTask: function(task) {
            tasks.push(task);
        },
        checkTask: function(id) {
            for(var key in tasks) {
                if( tasks[key].id == id ) {
                    tasks[key].status = 'Виконано';
                }
            }
        },
        uncheckTask: function(id) {
            for(var key in tasks) {
                if( tasks[key].id == id ) {
                    tasks[key].status = 'В процесі';
                }
            }
        },
        edit: function(id, text) {
            for(var key in tasks) {
                if( tasks[key].id == id ) {
                    tasks[key].title = text
                }
            }
        }
    }
});



var tasks = [
    {
        id: 1,
        title: "Сходити в зал",
        status: "В процесі",
        checked: false
    },
    {
        id: 2,
        title: "Сходити в магазин",
        status: "В процесі",
        checked: false
    },
    {
        id: 3,
        title: "Зробити ДЗ",
        status: "В процесі",
        checked: false
    },
    {
        id: 4,
        title: "Приготувати їсти",
        status: "В процесі",
        checked: false
    }
];
