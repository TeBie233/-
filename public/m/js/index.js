$(function() {
    
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 
    });
 
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 
    });

})