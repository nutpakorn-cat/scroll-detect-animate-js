/**
 * Configuration Variable
 */
let isEnable = false;

/**
 * scrollPositionList 2d ArrayList
 * key: 0 : object dom
 *      1 : scroll position
 *      2 : callback classes
 */
let scrollList = [];
let elementIndex = 0;

/**
 * Collecting elements 
 */
$( '.scroll-animate' ).each( ( i,obj ) => {
    nextClass = $( obj ).attr('class').split('scroll-animate');

    $( obj ).removeClass(nextClass[1]);
    scrollList.push( [ obj, $( obj ).offset().top, nextClass[1] ] );
});

function scrollInit() {
    isEnable = true;
}
function scrollDisable() {
    isEnable = false;
}

function scrollCheck() {
    if( elementIndex < scrollList.length-1 && isEnable ) {
        if( $( window ).scrollTop() >= scrollList[elementIndex][1] ) {
            // Add class
            $( scrollList[elementIndex][0] ).addClass( 'animated ' + scrollList[elementIndex][2] );
            elementIndex++;
        }
    }
}

$( window ).scroll( () => { scrollCheck() } );