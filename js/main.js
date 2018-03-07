// WEEK 16 group discussion questions
// 1. What does vue-router allow us to do?
// Allows us to switch between views of our content

// 2. What new vue-specific HTML element do we use to create a "link" using vue-router?
// to= "" 

// 3. What new vue-specific HTML element do we use to display new content via a vue-router route?
// <router-view></router-view>...leave it empty

// 4. What new vue-specific HTML element do we use to trigger transition animations?
// <transition></transition>

// 5. What is the syntax for initiating a Vue-Router instance?
// var = new Vue-Router({})

// 6. What is the syntax for mounting a Vue-Router instance to your Vue instance?
// .mount('#app')

// 7. What new property do we add to our Vue instance in order to enable using Vue-Router?
// router,---keyword

// 8. In our components, what is the name of the property in which we store our HTML markup which will be output to our HTML document?
// const one ={
// 	template--- ANSWER
// }






// create one variable (or constant) for each link in your HTML. Each of these variables will contain one object with one "template" property.

const home = {
	template: `<div class="text-center">
					<h1>Home</h1>
					<img src="img/home.png" alt="">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
				</div>`
}

const about = {
	template: `<div class="text-center">
					<h1>About</h1>
					<img src="img/about.png" alt="">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
				</div>`
}

const blog = {
	template: `<div class="text-center">
					<h1>Blog</h1>
					<img src="img/blog.png" alt="">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
				</div>`
}

const faq = {
	template: `<div class="text-center">
					<h1>FAQ</h1>
					<img src="img/faq.png" alt="">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
				</div>`
}

const contact = {
	template: `<div class="text-center">
					<h1>Contact</h1>
					<img src="img/contact.png" alt="">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
				</div>`
}

// create a new VueRouter instance, stored in a variable called "myRouter".
const router = new VueRouter({
	// inside your VueRouter instance, create a "routes" property containing an array. Inside this array, create one object for each link in your HTML. Each object should have two properties: "path" and "component".
	routes: [
		// for each path property of each object in your "routes" array, give each the value of a string containing a "/" followed by a number (e.g. "/one", "/two", "/three", etc.). Each "component" property will remain empty for now.
		{	
			path: "/one",
			component: home
		},
		{	
			path: "/two",
			component: about
		},
		{	
			path: "/three",
			component: blog
		},
		{	
			path: "/four",
			component: faq
		},
		{	
			path: "/five",
			component: contact
		}
	]
})



// create a new Vue instance with an "el" property, linking your instance to your "#app" div.
var routeTest = new Vue({
	router,
	el: "#app",
	data: {
	},
	methods:{
	}
}).$mount('#app')



















