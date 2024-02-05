// function addTask() {
//     var input = document.getElementById("taskInput");
//     var task = input.value;
//     input.value = "";
  
//     if (task === "") {
//         alert("Please enter a task!");
//         return;
//     }
  
//     var taskList = document.getElementById("taskList");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(task));
//     taskList.appendChild(li);
//   }





// document.addEventListener("DOMContentLoaded", function () {
//     var contactForm = document.getElementById("contactForm");

//     contactForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevents the form from submitting normally

//         // Validate the form fields (you can add more complex validation if needed)
//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         var subject = document.getElementById("subject").value;
//         var message = document.getElementById("message").value;

//         if (!name || !email || !subject || !message) {
//             alert("All fields are required. Please fill in all the fields.");
//             return;
//         }

//         // If all fields are filled, you can proceed with form submission or other actions
//         // For now, we'll just log the values to the console
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Subject:", subject);
//         console.log("Message:", message);

//         // Optionally, you can reset the form after submission
//         contactForm.reset();
//     });
// });












function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);

    // Add event listener for marking tasks as complete
    li.addEventListener("click", function () {
        li.classList.toggle("complete");
    });

    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
}
