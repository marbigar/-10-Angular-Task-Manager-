app.controller('mainCtrl', ['TaskService', function (TaskService) {

    this.tasks = TaskService.getTasks();
    this.formHidden = true;

    this.edit = function(id, title) {
        this.addBlock.id = id;
        this.addBlock.title = title;
    };

    this.add = function() {
        this.addBlock.status = 'В процесі';
        TaskService.addTask(this.addBlock);
        this.addBlock = {};
    };

    this.delete = function(id) {
        TaskService.deleteTask(id);
    };

    this.check = function(id, checkedStatus) {
        if ( checkedStatus ) {
            TaskService.checkTask(id);
        } else {
            TaskService.uncheckTask(id);
        }
    };

    this.edit = function(task) {
        this.formHidden = false;
        this.editText = task.title;
        this.editId = task.id;
    };

    this.editSave = function() {
        id = this.editId;
        text = this.editText;
        TaskService.edit(id, text);
        this.formHidden = true;
    }

}]);