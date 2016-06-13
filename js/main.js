$(function() {
	// Smooth Scroll
	$(".nav-links a").smoothScroll();
	$(".scroll-down").smoothScroll();

	// Click the Menu button ...
	$(".menu-open").on("click", function() {
		// ... open the navbar
		$(".nav-links").toggleClass("show-menu");
	});
	
	// Click the Close button ...
	$(".menu-close").on("click", function() {
		// ... close the navbar
		$(".nav-links").toggleClass("show-menu");
	});
	
	// Click on a link in the navbar ...
	$(".nav-links a").on("click", function() {
		// ... close the navbar
		$(".nav-links").removeClass("show-menu");
	});
	
	// Click on the easter egg ...
	// $(".easter-egg").on("click", function() {
		// ... toggle the .translucent-overlay
		// $(".translucent-overlay").toggleClass("show-bars");
		// $("#page-header").toggleClass("front-bars");
	// });
});