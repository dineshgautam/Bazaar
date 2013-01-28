var SearchView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
        //this.el.on('click', '.add-item-btn', this.addSelectedItem);
    };

    this.render = function() {
        this.el.html(SearchView.template());
        return this;
    };

    this.findByName = function() {
        store.findByName($('.search-key').val(), function(items) {
            $('.item-list').html(SearchView.liTemplate(items));
        });
    };

    /*this.addSelectedItem = function(event) {
        console.log('addItemToList');
        //app.showAlert("addItemToList", "Info");
        store.addSelectedItem($('.search-key').val(), function(items) {
            $('.selected-item-list').html(HomeView.liTemplate(items));
        });  
    };*/
    
    this.initialize();

}

SearchView.template = Handlebars.compile($("#search-tpl").html());
SearchView.liTemplate = Handlebars.compile($("#item-li-tpl").html());