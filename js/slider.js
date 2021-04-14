$(function() {      
  var $wrapper= $( '#fc-wrapper' ),
    $handle = $wrapper.children( 'div.fc-handle-pull' );        

  $handle.on( 'click', function( event ) {        
    ( $handle.data( 'opened' ) ) ? close() : open();        
  });
  
  function open() {
    $wrapper.addClass( 'fc-wrapper-open' );
    $handle.data( 'opened', true );
  }
  
  function close() {
    $wrapper.removeClass( 'fc-wrapper-open' );
    $handle.data( 'opened', false );
  }

});