(function($){
  $(function(){

    var $buttonCollapse = $('.button-collapse');
    var $liTab = $('li');
    var $form = $('.addTODO');

      $buttonCollapse.sideNav();

      $liTab.on('click', function(){
        $form.toggle();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
