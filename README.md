# cs465-fullstack
CS-465 Full Stack Development with MEAN

-  **Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**
-  To build the frontend, I started with Express HTML to create basic page layouts and handle server-side rendering.  JavaScript was added for interactive features like form validation and dynamic content updates.  Later, I brought in Angular to build the SPA, which allowed for smoother navigation, client-side routing, and faster user interactions without full page reloads.

-  **Why did the backend use a NoSQL MongoDB database?**
-  MongoDB was used because it made it easy to work with the data shown on the site.  Its flexible, document-based structure let us quickly add or update content without needing to hard code anything.  It also made it simple to scale and expand the app by just updating the database, which was way more efficient than constantly changing the backend logic or layout.

-  **How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**
-  JSON is a lightweight data format used to structure and transfer information. Unlike JSON, JavaScript is a full programming language that lets you write logic, functions, and interact with elements in your system. In this project, JSON acted as the communicator between the frontend and backend.  The frontend would trigger an action, the backend would handle the logic, and then send the result back in a JSON format.  This allowed the frontend to dynamically display updated data without needing a full page refresh.

  
-  **Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**
-  When trying to make the code as efficient as possible, a lot of the refactoring happened in the HTML files.  These files can get repetitive fast, especially when building out multiple pages with the same structure.  To cut down on that redundancy, I used tools like partials to make the code cleaner and less cluttered while still getting the same output.  For example, partials allowed me to break up repeated sections like headers, footers, and navbars into their own files, which I could then reuse across different pages. This made everything more organized and easier to manage.

  
-  **Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a fullstack application.**
-  The four main methods used are PUT, POST, DELETE, and GET.  These allow the frontend and backend to communicate effectively.  PUT updates existing data, GET retrieves data, POST sends in new data, and DELETE removes data. They closely align with CRUD operations in a database.  Using these methods through specific endpoints also makes it easier to test functionality using tools like Postman. However, once you add layers of security like authentication and authorization, testing can get a bit more complicated since you need to make sure the proper credentials or tokens are included for the system to respond correctly.


-  **How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**
-  This course helped me develop full stack skills that support my goals in data science and data engineering.  I learned how to manage data with tools like MongoDB and build APIs, while also understanding how data is used on the frontend with Angular.  These skills make me more marketable by giving me a well-rounded view of how data moves through applications, plus stronger problem-solving abilities that are key in any data role.

