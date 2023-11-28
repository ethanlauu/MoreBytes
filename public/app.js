// Sample data for available food items
let foodItems = [];

// Sample data for user information
let users = [];

// DOM elements
const registerForm = document.getElementById("registration-form");
const registerButton = document.getElementById("register-button");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const postForm = document.getElementById("post-form");
const postButton = document.getElementById("post-button");
const foodNameInput = document.getElementById("food-name");
const foodQuantityInput = document.getElementById("food-quantity");
const foodLocationInput = document.getElementById("food-location");
const foodList = document.getElementById("food-items");

// Event listener for user registration
registerButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    if (username) {
        users.push(username);
        updateUsersInLocalStorage();
    }
});

// Event listener for user login
loginButton.addEventListener("click", () => {
    const loginUsername = document.getElementById("login-username").value;
    if (users.includes(loginUsername)) {
        // Enable the post form for logged-in users
        postForm.style.display = "block";
    }
});

// Event listener for posting food
postButton.addEventListener("click", () => {
    const foodName = foodNameInput.value;
    const foodQuantity = foodQuantityInput.value;
    const foodLocation = foodLocationInput.value;
    if (foodName && foodQuantity && foodLocation) {
        const post = { name: foodName, quantity: foodQuantity, location: foodLocation };
        foodItems.push(post);
        updateFoodList();
        updateFoodItemsInLocalStorage();
        foodNameInput.value = "";
        foodQuantityInput.value = "";
        foodLocationInput.value = "";
    }
});

// Function to update the food list
function updateFoodList() {
    foodList.innerHTML = "";
    foodItems.forEach((item, index) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Location: ${item.location}</p>
        `;
        foodList.appendChild(listItem);
    });
}

// Function to save food items to localStorage
function updateFoodItemsInLocalStorage() {
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
}

// Function to save users to localStorage
function updateUsersInLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

// Load user information from localStorage on page load
const savedUsers = JSON.parse(localStorage.getItem("users"));
if (savedUsers) {
    users = savedUsers;
}

// Load food items from localStorage on page load
const savedFoodItems = JSON.parse(localStorage.getItem("foodItems"));
if (savedFoodItems) {
    foodItems = savedFoodItems;
    updateFoodList();
}