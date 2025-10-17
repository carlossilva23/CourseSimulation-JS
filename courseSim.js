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

// cart is a Set of course codes (e.g., "CSC110", "CSC210")
const cart = new Set();

function renderCourses() {
    const available_courses_div = document.getElementById("available-courses");
    available_courses_div.innerHTML = ""; // clear

    for (const code in courses) {
        const course = courses[code];
        const new_div_html = `
        <div class="course">
          <h3>${course.title}</h3>
          <p>Code: ${code}</p>
          <p>Credits: ${course.credits}</p>
          <button type="button" onclick="addCourse('${code}')">Add Course</button>
        </div>
      `;
        available_courses_div.innerHTML += new_div_html;
    }
}

function renderCart() {
    const cart_courses_div = document.getElementById("cart");
    cart_courses_div.innerHTML = "";

    if (cart.size === 0) {
        cart_courses_div.innerHTML = "<p>No courses added yet.</p>";
        return;
    }

    // iterate directly over the Set of codes
    for (const code of cart) {
        const course = courses[code];
        const new_div_html = `
        <div class="course">
          <h3>${course.title}</h3>
          <p>Code: ${code}</p>
          <p>Credits: ${course.credits}</p>
          <button type="button" onclick="removeCourse('${code}')">Remove Course</button>
        </div>
      `;
        cart_courses_div.innerHTML += new_div_html;
    }
}

function addCourse(courseCode) {
    if (cart.has(courseCode)) return; // already in cart
    cart.add(courseCode);
    renderCourses();
    renderCart();
}

function removeCourse(code) {
    if (cart.has(code)) {
        cart.delete(code);
        alert(`${code} was removed from your cart.`);
        renderCourses();
        renderCart();
    }
}

function enroll() {
    let totalCredits = 0;
    for (const code of cart) {          
        totalCredits += courses[code].credits;
    }

    if (totalCredits >= 10 && totalCredits <= 15) {
        alert(`Congratulations! You have enrolled with ${totalCredits} credits!`);
    } else {
        alert(`Incorrect number of credits to enroll (you have ${totalCredits}).`);
    }
}


renderCourses();
renderCart();
