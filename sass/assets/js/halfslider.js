var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  (function(){
  
    //YT Video Holder
      let ytVid = [];
      
      //load YouTube API script
      let tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                
                //when iframe is ready, bind click event to thumb div (custom play button)
                window.onYouTubeIframeAPIReady = function() {
                    $(document).on('click', '.thumb', function() {
                        const $this = $(this);
                        const $iframe = $this.parent().find('iframe');
              $($iframe).each(function() {
                            var v = new YT.Player($($iframe).attr('id'), {
                                events: {
                                    'onReady': onPlayerReady($this)
                                }
                            });
                            ytVid.push(v);
                        });
                    });
                }
    
                //hide thumb div and play video
                window.onPlayerReady = function(thumb) {
            return function(e) {
                        for (var i = 0; i < ytVid.length; i++) {
                            if (ytVid[i].a.src == e.target.a.src) {
                                $(thumb).fadeOut();
                                ytVid[i].playVideo();
                            }
                        }
                    }
                }
    
    })()