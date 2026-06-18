let scroll_position = 0;

// SPLASH SCREEN
$(document).ready(function () {
  if (sessionStorage.getItem('splashSeen')) {
    $('#splash').hide();
  } 
  else {
    $('body').css('overflow-y', 'hidden');  // disable scrolling
    console.log ("scrolling disabled");
    sessionStorage.setItem('splashSeen', 'true');

    setTimeout(function() {
      $('#splash').fadeOut('slow');
      $('body').css('overflow-y', 'auto');  // re-enable scrolling
      console.log("scrolling re-enabled");
    }, 3000)
  }
});

// TOP NAV
$(document).on('click', '#top-nav .icon', function() {
  if ($("#nav-items").css('display') === 'none') {
    $("#nav-items").css({
      "display": "flex",
    });    
  }
  else {
    $("#nav-items").css({
      "display": "none",
    });
  }
});

// CREATE GALLERY
function justifyGallery($gallery, targetHeight = 300, gap = 16) {
  const containerWidth = $gallery.width();

  // Save image data before rebuilding
  const images = [];

  $gallery.find('img').each(function () {
      images.push({
          element: $(this),
          ratio: this.naturalWidth / this.naturalHeight
      });
  });

  $gallery.empty();

  let row = [];
  let rowWidthAtTargetHeight = 0;

  images.forEach((image, index) => {
      row.push(image);
      rowWidthAtTargetHeight += image.ratio * targetHeight;

      const gapsWidth = gap * (row.length - 1);

      if (rowWidthAtTargetHeight + gapsWidth >= containerWidth || index === images.length - 1) {

          const scale =
              (containerWidth - gapsWidth) /
              rowWidthAtTargetHeight;

          const rowHeight = targetHeight * scale;

          const $row = $('<div class="gallery-row"></div>');

          row.forEach(item => {
              const width = item.ratio * rowHeight;

              item.element.css({
                  width: width + 'px',
                  height: rowHeight + 'px'
              });

              $row.append(item.element);
          });
          $gallery.append($row);

          row = [];
          rowWidthAtTargetHeight = 0;
      }
  });
}

function initializeGallery() {
  const $gallery = $('.gallery');

  let loaded = 0;
  const $images = $gallery.find('img');

  $images.each(function () {
      if (this.complete) {
          loaded++;
      } else {
          $(this).on('load', function () {
              loaded++;

              if (loaded === $images.length) {
                  justifyGallery($gallery);
              }
          });
      }
  });

  if (loaded === $images.length) {
      justifyGallery($gallery);
  }
}

$(window).on('load', initializeGallery);

$(window).on('resize', function () {
    justifyGallery($('.gallery'));
});


// OPEN CAROUSEL & OVERLAYS
$(document).on('click', '.open', function() {
  const scrollY = window.scrollY;

  $('body').css({
    position: 'fixed',
    top: `-${scrollY}px`,
    width: '100%'
  });

  // Extract the parameters using jQuery's data method
  let id = $(this).data('id');

  $('#' + id).show();
  console.log("opened")
});

// CLOSE CAROUSEL & OVERLAYS
$(document).on('click', '.close', function() {
  const scrollY = Math.abs(parseInt($('body').css('top')) || 0);

  $('body').css({
    position: '',
    top: '',
    width: ''
  });

  window.scrollTo(0, scrollY);

  let id = $(this).data('id');
  $('#' + id).hide();

  console.log("closed")
});


