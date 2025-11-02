// Declare variables and select DOM elements
var goalAmountInput = document.getElementById("goal-amount");
var currentSavingsInput = document.getElementById("current-savings");
var monthlyContributionInput = document.getElementById("monthly-contribution");
var calculateBtn = document.getElementById("calculate-btn");
var progressBar = document.getElementById("progress-bar");
var result = document.getElementById("result");

// Add event listener for calculate button
calculateBtn.addEventListener("click", () => {
    // Validate user input
    const goalAmount = parseFloat(goalAmountInput.value);
    const currentSavings = parseFloat(currentSavingsInput.value);
    const monthlyContribution = parseFloat(monthlyContributionInput.value);
    if (isNaN(goalAmount) || isNaN(currentSavings) || isNaN(monthlyContribution)) {
        result.textContent = "Please enter valid numbers.";
        result.classList.add("show");
        return;
    }

    // Calculate remaining amount and months to reach goal
    const remainingAmount = goalAmount - currentSavings;
    const monthsToGoal = Math.ceil(remainingAmount / monthlyContribution);
    const progressPercentage = (currentSavings / goalAmount) * 100;
    
    // Update progress bar based on current savings
    progressBar.style.width = `${progressPercentage}%`;

    // Display result based on the savings progress
    result.classList.remove("show");
    setTimeout(() => {
        // Handle UI messages for result display
        if (currentSavings >= goalAmount) {
            result.innerHTML = `"Congratulations! You have reached your goal!"`;
        } else {
            result.innerHTML = ` Keep going! You'll reach your goal in ${monthsToGoal} months.`;
        }
        result.classList.add("show");
    }, 100);
});