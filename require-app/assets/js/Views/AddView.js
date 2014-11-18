define(function(){

    function render(parameters){
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '' +
        '<div class="form-group"><input id="user-name" class="form-control"/>' +
        '<button id="add" type="submit" class="btn btn-default">Add</button></div>';
    }
    return {
        render:render
    };
});