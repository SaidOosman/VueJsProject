
var webstore = new Vue({
    el: '#app', 
    data: { // values of the data
    // the key matches the value of 'v-text/html' 
    sitename: 'Lesson Application', //title of the site
    lesson: { //my first lesson data
    id: 10,
    subject: "Maths",
    location: "London",
    price: 100,
    space:10,
    image: "images/lesson-icon.png"
    },
    cart:[],// empty array

    methods: { //function of the add cart
        addToCart: function () {
        this.cart.push
        (this.lesson.id);
        }
        }
    }

    });