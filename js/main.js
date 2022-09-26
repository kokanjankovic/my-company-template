

// // Counts section

//  $('.counter').counterUp({
//      delay: 10,
//      time: 2000
//    });
//    $('.counter').addClass('animated fadeInDownBig');
//    $('h3').addClass('animated fadeIn');


counter(document.querySelector('#counter1'), { start: 0, end: 158, duration: 1000 });

counter(document.querySelector('#counter2'), { start: 0, end: 523, duration: 1000 });

counter(document.querySelector('#counter3'), { start: 0, end: 1382, duration: 100 });
counter(document.querySelector('#counter4'), { start: 0, end: 15, duration: 1000 });



function counter(elm, opts) {
const start = opts.start;
const end = opts.end;
const duration = opts.duration;
const timeoutDuration = duration / Math.abs(end - start);
const isIncreasing = end > start;

   count(start);

   function count(num) {
     if ((isIncreasing && num > end) || (!isIncreasing && num < end)) {
       return false;
     }

    elm.innerHTML = num;
    setTimeout(() => isIncreasing ? count(++num) : count(--num), timeoutDuration);
   }
 }
// Testimonial




AOS.init({
  duration: 1000,
  offset: 500,
  once: true
});
    

