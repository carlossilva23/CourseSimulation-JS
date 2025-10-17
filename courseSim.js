/* dictionary of courses */
const courses = { //TO DO: add courses to this dictionary variable. Courses have titles, credits, and codes. };

/* set (which ensures no duplicates) of courses that holds what is in the user's cart */
let cart = new Set();

/* function to render the available courses to the html */
function renderCourses() {
    //TO DO: select the html element that will display the available courses (hint: the ID of this html element is 'available-courses')
    //TO DO: loop through the dictionary (courses) and extract the courses code, title, and credits. Add the course information into an html div with class
    //'course'. The div should display the title (h3 tag), code (p tag), and number of credits (p tag). Also include a button to call the 'addCourse'
    //function when clicked.
}

/* function to render the cart courses to the html */
function renderCart() {
    //TO DO: select the html element that will display the cart courses (hint: the ID of this html element is 'cart')
    //TO DO: loop through the cart and extract the courses code, title, and credits. Add the course information into an html div with class
    //'course'. The div should display the title (h3 tag), code (p tag), and number of credits (p tag). Also include a button to call the 'removeCourse'
    //function when clicked.
}

/* Function that adds classes to cart. */
function addCourse(courseCode) {
    //TO DO: add code to add the course to the cart
    renderCourses();
    renderCart();
}

/* Function that removes courses from cart. */
function removeCourse(code) {
    //TO DO: add code to remove the course from the cart
    renderCart();
}

/* Function to enroll the user (cart has between 10 and 15 courses). */
function enroll(cart) {
    //TO DO: check to see if the user has 10-15 credits in their cart (hint: use a loop!)
    //TO DO: alert the user about their status (do they or do they not have enought credits)
}

renderCourses();
renderCart();
