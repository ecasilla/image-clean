var images = [ 'test/fixtures/images/arrow_left.svg',
  'test/fixtures/images/arrow_right.svg',
  'test/fixtures/images/button_nav.svg',
  'test/fixtures/images/button_nav_rollover.svg',
  'test/fixtures/images/footer_button.svg',
  'test/fixtures/images/footer_button_rollover.svg',
  'test/fixtures/images/footerlocationpin.png',
  'test/fixtures/images/guides.png',
  'test/fixtures/images/logo.jpg',
  'test/fixtures/images/modalHeader.jpg',
  'test/fixtures/images/x_out.svg',
  'test/fixtures/images/x_out_white.svg',
  'test/fixtures/images/addressable/addressable-left-arrow.png',
  'test/fixtures/images/addressable/addressable-right-arrow.png',
  'test/fixtures/images/addressable/addressable.jpg',
  'test/fixtures/images/addressable/addressable_bucket_2.jpg',
  'test/fixtures/images/addressable/car.jpg',
  'test/fixtures/images/addressable/footerlocationpin.png',
  'test/fixtures/images/addressable/header.jpg',
  'test/fixtures/images/addressable/headerAddressable.png',
  'test/fixtures/images/addressable/houseMap.png',
  'test/fixtures/images/addressable/housemap.jpg',
  'test/fixtures/images/addressable/ipad.jpg',
  'test/fixtures/images/about/aboutSection1.jpg',
  'test/fixtures/images/about/aboutSection2.jpg',
  'test/fixtures/images/about/aboutSection3.jpg',
  'test/fixtures/images/about/headerAbout.jpg',
  'test/fixtures/images/casestudy/aretailModal.jpg',
  'test/fixtures/images/casestudy/atapmodal.jpg',
  'test/fixtures/images/casestudy/auto.png',
  'test/fixtures/images/casestudy/autoHeader.jpg',
  'test/fixtures/images/casestudy/autoModal.jpg',
  'test/fixtures/images/casestudy/cpg.png',
  'test/fixtures/images/casestudy/cpgModal.jpg',
  'test/fixtures/images/casestudy/food.png',
  'test/fixtures/images/casestudy/foodHeader.jpg',
  'test/fixtures/images/casestudy/foodModal.jpg',
  'test/fixtures/images/casestudy/retail.png',
  'test/fixtures/images/casestudy/retailModal.jpg',
  'test/fixtures/images/casestudy/smallAuto.png',
  'test/fixtures/images/casestudy/smallFood.png',
  'test/fixtures/images/casestudy/smallTAP.png',
  'test/fixtures/images/casestudy/tap.png',
  'test/fixtures/images/casestudy/tapHeader.jpg',
  'test/fixtures/images/casestudy/tapModal.jpg',
  'test/fixtures/images/casestudy/tapModal2.jpg',
  'test/fixtures/images/casestudy/upcircle.jpg',
  'test/fixtures/images/contact/download.jpg',
  'test/fixtures/images/contact/email.jpg',
  'test/fixtures/images/contact/phone.jpg',
  'test/fixtures/images/directresponse/Direct.jpg',
  'test/fixtures/images/directresponse/old.jpg',
  'test/fixtures/images/directresponse/responseHeader.jpg',
  'test/fixtures/images/directresponse/responseSection1.jpg',
  'test/fixtures/images/directresponse/responseSection2.jpg',
  'test/fixtures/images/dtveverywhere/directv_everywhere.jpg',
  'test/fixtures/images/dtveverywhere/headerEverywhere.jpg',
  'test/fixtures/images/dtveverywhere/oldheader.jpg',
  'test/fixtures/images/dtveverywhere/section1.jpg',
  'test/fixtures/images/dtveverywhere/section2.jpg',
  'test/fixtures/images/dtveverywhere/section2old.jpg',
  'test/fixtures/images/homepage/card.jpg',
  'test/fixtures/images/homepage/emptyLot.jpg',
  'test/fixtures/images/homepage/hamburger.jpg',
  'test/fixtures/images/homepage/shoe.jpg',
  'test/fixtures/images/homepage/sidebar-nav-1.png',
  'test/fixtures/images/homepage/sidebar-nav-down.png',
  'test/fixtures/images/homepage/sidebar-nav-up.png',
  'test/fixtures/images/homepage/suitcase.jpg',
  'test/fixtures/images/homepage/water.jpg',
  'test/fixtures/images/homepage/wheel.jpg',
  'test/fixtures/images/homepage/wheel_slide1.jpg',
  'test/fixtures/images/homepage/wheel_slide2.jpg',
  'test/fixtures/images/homepage/wheel_slide3.jpg',
  'test/fixtures/images/homepage/wheel_slide4.jpg',
  'test/fixtures/images/interactive/Interactive_bucket_1.jpg',
  'test/fixtures/images/interactive/NEWloreal.jpg',
  'test/fixtures/images/interactive/amex.jpg',
  'test/fixtures/images/interactive/deadliestcatch.jpg',
  'test/fixtures/images/interactive/graphIcon.jpg',
  'test/fixtures/images/interactive/interactive.jpg',
  'test/fixtures/images/interactive/interactiveHeader.jpg',
  'test/fixtures/images/interactive/lexusgx.jpg',
  'test/fixtures/images/interactive/loreal.jpg',
  'test/fixtures/images/interactive/mountainmonsters.jpg',
  'test/fixtures/images/interactive/old.jpg',
  'test/fixtures/images/interactive/oldamex.jpg',
  'test/fixtures/images/interactive/olddeadliestcatch.jpg',
  'test/fixtures/images/interactive/oldlexusgx.jpg',
  'test/fixtures/images/interactive/oldloreal.jpg',
  'test/fixtures/images/interactive/playArrow.png',
  'test/fixtures/images/interactive/playOverlay.png',
  'test/fixtures/images/interactive/playOverlaySmall.png',
  'test/fixtures/images/interactive/rupaul.jpg',
  'test/fixtures/images/interactive/unusuallythicke.jpg',
  'test/fixtures/images/interactive/whopperlust.jpg',
  'test/fixtures/images/internal/american-muslim.jpg',
  'test/fixtures/images/internal/doomsday.jpg',
  'test/fixtures/images/internal/header-bg.jpg',
  'test/fixtures/images/internal/header-slide.jpg',
  'test/fixtures/images/internal/image-left-analytics.jpg',
  'test/fixtures/images/internal/image-left.jpg',
  'test/fixtures/images/internal/image-right.jpg',
  'test/fixtures/images/internal/print.jpg',
  'test/fixtures/images/internal/video-play.jpg',
  'test/fixtures/images/modal/arrow-left.jpg',
  'test/fixtures/images/modal/arrow-right.jpg',
  'test/fixtures/images/modal/automotive.jpg',
  'test/fixtures/images/modal/chart-exposure.jpg',
  'test/fixtures/images/modal/chart-impressions.jpg',
  'test/fixtures/images/modal/cli-chevrolet.jpg',
  'test/fixtures/images/modal/cli-dodge.jpg',
  'test/fixtures/images/modal/cli-toyota.jpg',
  'test/fixtures/images/modal/close.jpg',
  'test/fixtures/images/solutions/addressable.png',
  'test/fixtures/images/solutions/clusters.png',
  'test/fixtures/images/solutions/directResponse.png',
  'test/fixtures/images/solutions/dtvEverywhere.png',
  'test/fixtures/images/solutions/everywhere_icon.png',
  'test/fixtures/images/solutions/headerClusters.png',
  'test/fixtures/images/solutions/headerDexter.png',
  'test/fixtures/images/solutions/headerFake.png',
  'test/fixtures/images/solutions/headerSports.png',
  'test/fixtures/images/solutions/headerSuperSpot.png',
  'test/fixtures/images/solutions/interactive.png',
  'test/fixtures/images/solutions/leftArrow.png',
  'test/fixtures/images/solutions/overlay.jpg',
  'test/fixtures/images/solutions/rightArrow.png',
  'test/fixtures/images/solutions/slideAddressable.jpg',
  'test/fixtures/images/solutions/slideClusters.jpg',
  'test/fixtures/images/solutions/slideEverywhere.jpg',
  'test/fixtures/images/solutions/slideSpot.jpg',
  'test/fixtures/images/solutions/smallAddressable.png',
  'test/fixtures/images/solutions/smallClusters.png',
  'test/fixtures/images/solutions/smallDTVEverywhere.png',
  'test/fixtures/images/solutions/smallSports.png',
  'test/fixtures/images/solutions/smallSuper.png',
  'test/fixtures/images/solutions/smallTap.png',
  'test/fixtures/images/solutions/sports.png',
  'test/fixtures/images/solutions/superSpot.png',
  'test/fixtures/images/solutions/tap.png',
  'test/fixtures/images/sports/headerSports.jpg',
  'test/fixtures/images/sports/old.jpg',
  'test/fixtures/images/sports/peyton.png',
  'test/fixtures/images/sports/peytonManning.jpg',
  'test/fixtures/images/sports/powerfulFans.jpg',
  'test/fixtures/images/sports/sportsIcons.jpg',
  'test/fixtures/images/sports/sports_header.jpg',
  'test/fixtures/images/sports/sundayTicketLogo.jpg',
  'test/fixtures/images/sports/whenInRome.jpg',
  'test/fixtures/images/superspot/SuperSpot_2.jpg',
  'test/fixtures/images/superspot/bestshows.jpg',
  'test/fixtures/images/superspot/bestshowsOld.jpg',
  'test/fixtures/images/superspot/headerSuperSpot.jpg',
  'test/fixtures/images/superspot/old.jpg',
  'test/fixtures/images/superspot/reachBetter.jpg',
  'test/fixtures/images/superspot/superspot.jpg',
  'test/fixtures/images/superspot/viewerStats.jpg',
  'test/fixtures/images/tap/chart.jpg',
  'test/fixtures/images/tap/chart.png',
  'test/fixtures/images/tap/headerTap.jpg',
  'test/fixtures/images/tap/multiplePlatforms.jpg',
  'test/fixtures/images/tap/nielsen.jpg',
  'test/fixtures/images/tap/old.jpg',
  'test/fixtures/images/tap/tune_in.jpg',
  'test/fixtures/images/clusters/01_male.jpg',
  'test/fixtures/images/clusters/02_sports.jpg',
  'test/fixtures/images/clusters/03_adult.jpg',
  'test/fixtures/images/clusters/04_female.jpg',
  'test/fixtures/images/clusters/05_kids.jpg',
  'test/fixtures/images/clusters/06_lifestyle.jpg',
  'test/fixtures/images/clusters/07_news.jpg',
  'test/fixtures/images/clusters/08_young_adult.jpg',
  'test/fixtures/images/clusters/adultCluster.jpg',
  'test/fixtures/images/clusters/adultModal.jpg',
  'test/fixtures/images/clusters/adultsCluster.jpg',
  'test/fixtures/images/clusters/clusterbuy.jpg',
  'test/fixtures/images/clusters/clusters.jpg',
  'test/fixtures/images/clusters/clusters_bucket_1.jpg',
  'test/fixtures/images/clusters/clusters_bucket_2.jpg',
  'test/fixtures/images/clusters/femaleCluster.jpg',
  'test/fixtures/images/clusters/femaleModal.jpg',
  'test/fixtures/images/clusters/graph.jpg',
  'test/fixtures/images/clusters/headerClusters.jpg',
  'test/fixtures/images/clusters/kidsCluster.jpg',
  'test/fixtures/images/clusters/kidsModal.jpg',
  'test/fixtures/images/clusters/lifestyleCluster.jpg',
  'test/fixtures/images/clusters/lifestyleModal.jpg',
  'test/fixtures/images/clusters/male.jpg',
  'test/fixtures/images/clusters/maleCluster.jpg',
  'test/fixtures/images/clusters/maleModal.jpg',
  'test/fixtures/images/clusters/map.jpg',
  'test/fixtures/images/clusters/newsCluster.jpg',
  'test/fixtures/images/clusters/newsModal.jpg',
  'test/fixtures/images/clusters/old.jpg',
  'test/fixtures/images/clusters/sports.jpg',
  'test/fixtures/images/clusters/sportsCluster.jpg',
  'test/fixtures/images/clusters/sportsModal.jpg',
  'test/fixtures/images/clusters/youngadultCluster.jpg',
  'test/fixtures/images/clusters/youngadultModal.jpg',
  'test/fixtures/images/clusters/modals/adultModal.jpg',
  'test/fixtures/images/clusters/modals/femaleModal.jpg',
  'test/fixtures/images/clusters/modals/kidsModal.jpg',
  'test/fixtures/images/clusters/modals/lifestyleModal.jpg',
  'test/fixtures/images/clusters/modals/maleModal.jpg',
  'test/fixtures/images/clusters/modals/newsModal.jpg',
  'test/fixtures/images/clusters/modals/sportsModal.jpg',
  'test/fixtures/images/clusters/modals/youngadultModal.jpg',
  'test/fixtures/images/index2/01.jpg',
  'test/fixtures/images/index2/02.jpg',
  'test/fixtures/images/index2/03.jpg',
  'test/fixtures/images/index2/04.jpg',
  'test/fixtures/images/index2/05.jpg',
  'test/fixtures/images/index2/06.jpg',
  'test/fixtures/images/index2/07.jpg',
  'test/fixtures/images/index2/01/slide_1.jpg',
  'test/fixtures/images/index2/01/slide_2.jpg',
  'test/fixtures/images/index2/01/slide_3.jpg',
  'test/fixtures/images/index2/01/slide_4.jpg',
  'test/fixtures/images/index2/02/slide_1.jpg',
  'test/fixtures/images/index2/02/slide_2.jpg',
  'test/fixtures/images/index2/02/slide_3.jpg',
  'test/fixtures/images/index2/02/slide_4.jpg',
  'test/fixtures/images/index2/03/slide_1.jpg',
  'test/fixtures/images/index2/03/slide_2.jpg',
  'test/fixtures/images/index2/03/slide_3.jpg',
  'test/fixtures/images/index2/03/slide_4.jpg',
  'test/fixtures/images/index2/04/slide_1.jpg',
  'test/fixtures/images/index2/04/slide_2.jpg',
  'test/fixtures/images/index2/04/slide_3.jpg',
  'test/fixtures/images/index2/04/slide_4.jpg',
  'test/fixtures/images/index2/05/slide_1.jpg',
  'test/fixtures/images/index2/05/slide_2.jpg',
  'test/fixtures/images/index2/05/slide_3.jpg',
  'test/fixtures/images/index2/05/slide_4.jpg',
  'test/fixtures/images/index2/06/slide_1.jpg',
  'test/fixtures/images/index2/06/slide_2.jpg',
  'test/fixtures/images/index2/06/slide_3.jpg',
  'test/fixtures/images/index2/06/slide_4.jpg',
  'test/fixtures/images/index2/07/slide_1.jpg',
  'test/fixtures/images/index2/07/slide_2.jpg',
  'test/fixtures/images/index2/07/slide_3.jpg',
  'test/fixtures/images/index2/07/slide_4.jpg',
  'test/fixtures/images/index2/menu/01.jpg',
  'test/fixtures/images/index2/menu/02.jpg',
  'test/fixtures/images/index2/menu/03.jpg',
  'test/fixtures/images/index2/menu/04.jpg',
  'test/fixtures/images/index2/menu/05.jpg',
  'test/fixtures/images/index2/menu/06.jpg',
  'test/fixtures/images/index2/menu/07.jpg',
  'test/fixtures/images/index2/menu/arrow.png',
  'test/fixtures/images/index2/menu/menu.png',
  'test/fixtures/images/index2/menu/slide-01.png',
  'test/fixtures/images/index2/menu/slide-02.png',
  'test/fixtures/images/index2/menu/slide-03.png',
  'test/fixtures/images/index2/menu/slide-04.png' ]

module.exports = images;
