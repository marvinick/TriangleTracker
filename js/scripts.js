var triangleTracker = function(a, b, c) {
    if((a === b) && (a == c ) && (b === c)) {
        return "Equilateral";
    } else if ((a === b) || (a === c )) {
        return "Isosceles";
    } else if ((a === b) || (b === c )) {
        return "Isosceles";
    } else if ((b === c) || (a === c )) {
        return "Isosceles";
    } else if ((a !== b) && (a !== c) && (b !== c)) {
        return "Scalene";
    }
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangleTracker(a, b, c);

    $(".triangle").text(a,b,c);
    if (result == "Equilateral") {
      $(".equilateral").text("Equilateral");
    } else if (result == "Isosceles") {
        $(".isosceles").text("Isosceles");
    } else if (result == "Scalene") {
        $(".scalene").text("Scalene");
    }

    $("#result").show();
    event.preventDefault();
  });
});

// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0 ))  {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//   } else {
//       $(".not").text("not").remove();
//   }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
