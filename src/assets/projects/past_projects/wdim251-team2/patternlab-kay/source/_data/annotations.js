var comments = {
"comments" : [
	{
		"el": "header[role=banner]",
		"title" : "Masthead",
		"comment": "The main header of the site doesn't take up too much screen real estate in order to keep the focus on the core content. It's using a linear CSS gradient instead of a background image to give greater design flexibility and reduce HTTP requests."
	},
	{
		"el": ".logo",
		"title" : "Logo",
		"comment": "The logo image is an SVG file, which ensures that the logo displays crisply even on high resolution displays. A PNG fallback is provided for browsers that don't support SVG images.</p><p>Further reading: <a href=\"http://bradfrostweb.com/blog/mobile/hi-res-optimization/\">Optimizing Web Experiences for High Resolution Screens</a></p>"
	},
	{
		"el": "#nav",
		"title" : "Navigation",
		"comment": "<p>Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by creating a simple menu anchor that toggles the main navigation on small screens. This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p><p>The nav is only hidden when a certain level of javascript is supported in order to ensure that users with little/poor javascript support can still access the navigation. Once the screen size is large enough to accommodate the nav, we show the main navigation links and hide the menu anchor.<p><p>See also: <a href=\"http://bradfrostweb.com/blog/web/responsive-nav-patterns/\">Responsive Navigation Patterns</a></p>"
	},
	{
		"el": ".search-form",
		"title" : "Search",
		"comment": "<p>Search is an incredibly important priority, especially for mobile. It is a great idea to give users the ability to jump directly to what they are looking for without forcing them to wade through your site's navigation. Check out the <a href=\"http://burton.com\">Burton</a> and <a href=\"http://yelp.com\">Yelp</a> mobile sites for great examples of experiences that prioritize search.</p><p>We're also using the <a href=\"http://dev.w3.org/html5/markup/input.search.html\">HTML5 search input type</a>, which is great for mobile devices that can <a href=\"http://diveintohtml5.info/forms.html\">bring up the appropriate virtual keyboard</a> for many smartphones. And like the main header navigation, we're hiding the search form on small screens to save space. Clicking the search anchor toggles the form. </p>"
	},
	{
		"el": ".article-header h1",
		"title" : "Article Header",
		"comment": "<p>The article header should be no more than 140 characters. </p>"
	},
	{
		"el": ".block-hero",
		"title" : "Hero",
		"comment": "<p>The hero area highlights one major story using a large image and a captivating headline.</p>"
	},
	{
		"el": ".latest-posts",
		"title" : "Upcoming Events",
		"comment": "<p>The latest post is a list of five of the current or upcoming happenings and events.</p>"
	},
	{
		"el": ".middle-panel",
		"title" : "Featured Profile image",
		"comment": "<p>A jpeg image of a featured member or anyother current point of interest. This profile image is required to fit 300x465 pixel containment so that it may fit nicely with the surrounding content.</p>"
	},
	{
		"el": ".why-join",
		"title" : "Why Join",
		"comment": "<p>A header title of 'Why Join', and s paragraph of roughly 176 characters will live here. This will be a charasmatic pitch to the viewer followed by the call to action button labeled 'Join Now'.</p>"
	},
	{
		"el": ".copyright",
		"title" : "Copyright Information",
		"comment": "<p>Basic Copyright information like year and company name.</p>"
	},
	{
		"el": ".footer-nav",
		"title" : "Bottom Naviation",
		"comment": "<p>Same basic styles as header navigation.</p>"
	},
	{
		"el": "label",
		"title" : "Form Label",
		"comment": "<p>Label for each form input will rest above the input field.</p>"
	},
	{
		"el": "input",
		"title" : "Form Input",
		"comment": "<p>Each input field will have placeholder text to help the user understand what to type into each field.</p>"
	},
	{
		"el": "figure",
		"title" : "Location Map",
		"comment": "<p>A google map image displaying the address. This is a png inside a figure that is 283x283 pixels. It is the first section of thre columns.</p>"
	},
	{
		"el": ".subheading--location",
		"title" : "Contact Section Header",
		"comment": "<p>A Two word title that represents the type of contact information being provided like 'Site location' or 'Site Hours'</p>"
	},
	{
		"el": ".text",
		"title" : "Contact Section Body of Text",
		"comment": "<p>An unordered list that corresponds to the Contact Section Header. A 269 Maximum character preference.</p>"
	},
]
};