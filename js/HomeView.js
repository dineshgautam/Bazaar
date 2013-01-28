var HomeView = function(items) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(HomeView.liTemplate(items));
        return this;
    };

    this.findByName = function() {
        store.findByName($('.search-key').val(), function(items) {
            $('.selected-item-list').html(HomeView.liTemplate(items));
        });
    };

    this.showSelectedItems = function() {
        store.showSelectedItems(function(items) {
            $('.selected-item-list').html(HomeView.liTemplate(items));
        });
	}

    this.initialize();

}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#selected-item-li-tpl").html());