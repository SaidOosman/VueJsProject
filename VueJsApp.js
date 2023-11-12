
var webstore = new Vue({
    el: '#app', 
    data: { // values of the data
    // the key matches the value of 'v-text/html' 
    sitename: 'Lesson Application', //title of the site
    ShowLesson: true,
    order: {
        Name: '',
        PhoneNum: null,
        },
    lesson: { //my first lesson data
    id: 10,
    subject: "Maths",
    location: "London",
    price: 100,
    space:10,
    image: "images/lesson-icon.png"
    
    },
    cart:[],// empty array

},
    methods: { //function of the add cart
        ShowCheckout:function(){
            if (this.ShowLesson) {
                this.ShowLesson = false
            } else {
                this.ShowLesson = true
            }
        },
        addToCart: function () {
        this.cart.push (this.lesson.id);
        }
        },
        submitForm() {alert('Order submitted!')
    },
        verifyName: function () {
         // regular expression for string
         var nameRegex = /^[A-Za-z\s]+$/;
         return nameRegex.test(this.order.Name);
    },
        verifyPhoneNumber: function () {
             // regular expression for numbers
               var phoneRegex = /^[0-9\-]*$/;
         return phoneRegex.test(this.order.PhoneNum);
    },

        computed: {
            LessonsInCart: function(){
                return this.cart.length || "" ;
            },
            addToCartVisible: function () {
                return this.lesson.space > this.LessonsInCart;
              },
        }
        
        
    

    });