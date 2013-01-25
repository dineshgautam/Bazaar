var SearchView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function() {
        this.el.html(SearchView.template());
        return this;
    };

    /*this.findByName = function() {
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };*/

    this.findByName = function() {
        store.findByName($('.search-key').val(), function(items) {
            $('.item-list').html(SearchView.liTemplate(items));
        });
    };

    this.initialize();

}

SearchView.template = Handlebars.compile($("#home-tpl").html());
//HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
SearchView.liTemplate = Handlebars.compile($("#item-li-tpl").html());