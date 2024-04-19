function fetchCourse(courseId) {
    return fetch(`http://127.0.0.1:8000/course/${courseId}/`, {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(course => {
        // Generate HTML for the course
        const courseHtml = `
            <div class="column">
                <div class="ui special cards">
                    <div class="ui centered card">
                        <div class="blurring dimmable image">
                            <img class="image-card" src="${course.image}">
                        </div>
                        <div class="content">
                            <a class="header" href="course.html">${course.name}</a>
                            <div class="meta">
                                <span class="date">Start Date: ${course.start_date}</span></br>
                                <span class="date">End Date: ${course.end_date}</span>
                            </div>
                        </div>
                        <div class="ui two bottom attached buttons">
                            <div class="ui button">
                                <i class="add icon"></i>
                                Add to cart
                            </div>
                            <div class="ui green button">
                                <i class="cart icon"></i>
                                Buy now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append the course HTML to the course container
        document.getElementById('courseContainer').innerHTML += courseHtml;

        return course; // Return the fetched course data
    })
    .catch(error => {
        console.error('Error fetching course:', error);
        throw error; // Propagate the error
    });
}

