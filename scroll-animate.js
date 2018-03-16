/*! scroll-animate-js v1.0.1 | (c) nutterrocker | MIT License */
/**
 * Configuration Variable
 */
let isEnable = true;

/**
 * scrollPositionList 2d ArrayList
 * scrollList[index][expectedValue]
 * 
 * expectedValue info
 * 0 for object dom
 * 1 for scrolling position
 * 2 callback classes
 */
let scrollList = [];
let elementIndex = 0;

/**
 * Control function
 */
function scrollEnable() {
    isEnable = true;
}

function scrollDisable() {
    isEnable = false;
}

/**
 * Scroll checking
 * detect user scrolling
 */
function scrollCheck() {
    if( elementIndex <= scrollList.length-1 && isEnable ) {
        if( $( window ).scrollTop() >= scrollList[elementIndex][1] ) {
            // Add class
            $( scrollList[elementIndex][0] ).prop( 'style', null );
            $( scrollList[elementIndex][0] ).addClass( 'animated ' + scrollList[elementIndex][2] );

            // iterate elementIndex
            elementIndex++;
        }
    }
}

/**
 * Collecting elements 
 * collect user animation then remove it!
 */
$( '.scroll-animate' ).each( ( i,obj ) => {
    nextClass = $( obj ).attr( 'class' ).split( 'scroll-animate' );

    $( obj ).removeClass( nextClass[1] );
    $( obj ).attr( 'style', 'visibility: hidden;' );

    scrollList.push( [ obj, $( obj ).offset().top, nextClass[1] ] );
});

// OnScroll
$( window ).scroll( () => { 
    scrollCheck() 
});