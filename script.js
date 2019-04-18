$(document).ready(function() {
  $('.content-box').click(function() {
    $('.content-box').animate(
      {
        width: '500px',
        height: '+=250px'
      },
      200
    );
    $('.content-after')
      .show()
      .animate(
        {
          opacity: '1'
        },
        200
      );
  });
});
