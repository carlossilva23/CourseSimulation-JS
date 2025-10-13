/* dictionary of courses */
const courses = {
    "CSC101": { title: "Intro to Computer Science", credits: 3 },
    "CSC110": { title: "Intro to Programming I", credits: 4 },
    "CSC120": { title: "Intro to Programming II", credits: 4 },
    "CSC144": { title: "Discrete Math I", credits: 3 },
    "CSC210": { title: "Software Development", credits: 3 },
    "CSC244": { title: "Discrete Math II", credits: 3 },
    "CSC252": { title: "Computer Organization", credits: 3 },
    "CSC345": { title: "Analysis of Discrete Structures", credits: 3 },
    "CSC380": { title: "Principles of Data Science", credits: 3 }
};

let cart = new Set();

/* function to render the available courses to the html */
function renderCourses() {
    let available_courses_div = document.getElementById("available-courses");

    for (c in courses) {
        let current_code = c;
        let current_course = courses[c];
        let current_title = current_course.title;
        let current_credits = current_course.credits;

        let new_div_html =
            "<div class=\"course\">"
            + "<h3>" + current_title + "</h3>"
            + "<p>Code: " + current_code + "</p>"
            + "<p>Credits: " + current_credits + "</p>"
            + "<button onclick=\"addCourse(this)\" type=\"button\">Add Course</button>"
            + "</div>";

        available_courses_div.innerHTML += new_div_html;
    }
}

function renderCart() {
    let cart_courses_div = document.getElementById("cart");

    /* the cart is empty */
    if (cart.size == 0) {
        cart_courses_div.innerHTML = "<p>No courses added yet.</p>";
    }

    /* the cart is not empty */
    else {
        for (c in cart) {
            let current_code = c;
            let current_course = courses[c];
            let current_title = current_course.title;
            let current_credits = current_course.credits;

            let new_div_html =
                "<div class=\"course\">"
                + "<h3>" + current_title + "</h3>"
                + "<p>Code: " + current_code + "</p>"
                + "<p>Credits: " + current_credits + "</p>"
                + "<button onclick=\"removeCourse(this)\" type=\"button\">Remove Course</button>"
                + "</div>";

            cart_courses_div.innerHTML += new_div_html;
        }
    }
}

renderCourses();
renderCart();