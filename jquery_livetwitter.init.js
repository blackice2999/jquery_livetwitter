// $Id$
(function ($) {

  Drupal.behaviors.jquerylivetwitter = function (context) {
    if (Drupal.settings.jquerylivetwitter)
    {

      // call twitter feed
      $.each(Drupal.settings.jquerylivetwitter, function ( selector, parameters )
      { 
    		jquerylivetwitterroot = $( '#' + selector + ':not(.jquerylivetwitter-processed)', context )
        jquerylivetwitterroot.addClass( 'jquerylivetwitter-processed' ).liveTwitter( parameters.query, parameters.options );
      });
    }
  }
})(jQuery);