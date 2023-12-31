
var webstore = new Vue({
    el: '#app', 
    data: { // values of the data
    // the key matches the value of 'v-text/html' 
    sitename: 'Lesson Application', //title of the site
    ShowLesson: true,
    order: {// order form
        Name: '',
        PhoneNum: null,
        address: '',
        birthday: '',
        city:'',
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
            }//makes checkout visible 
        },
        addToCart: function () {
        this.cart.push (this.lesson.id);
        }// add to cart
        },
        submitForm() {alert('Order submitted!') // alert at the end
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
    sortLessons: function (attribute) {
        if (this.sortAttribute === attribute) {
            this.sortAscending = !this.sortAscending;
        } else { // sorting, not the same 
            this.sortAttribute = attribute;
            this.sortAscending = true;
        }
        this.Lessons.sort((a, b) => {
            const valueA = a[attribute];
            const valueB = b[attribute];

            if (this.sortAscending) {
                return valueA.localeCompare(valueB); // compares the strings to each other
            } else {
                return valueB.localeCompare(valueA);
            }
    });
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