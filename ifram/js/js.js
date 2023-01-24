/* Isotope Filter
  -------------------------------------------------------*/
  var $portfolioFilter = $('#project-grid, #masonry-grid');
  $('.project-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $portfolioFilter.isotope({ filter: filterValue });
    $('.project-filter a').removeClass('active');
    $(this).closest('a').addClass('active');
  });



