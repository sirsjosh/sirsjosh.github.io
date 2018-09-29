$('.port-item').click(function () {
      $('.collapse').collapse('hide');
        
    $(document).on('click', '[data-toggle="lightbox"]', function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
    });

    $(document).on('click', function(event) {
        if ($(event.target).has('.no-gutters').length) {
            $(".lightbox").hide();
        }
    });
