// Array of medical terms with definitions
const words = [
    { word: "Epidermis", definition: "The outer layer of the skin." },
    { word: "Hemoglobin", definition: "A protein in red blood cells that carries oxygen." },
    { word: "Myocardium", definition: "The muscular tissue of the heart." },
    { word: "Neuron", definition: "A nerve cell that transmits electrical impulses." },
    { word: "Osteocyte", definition: "A bone cell that maintains bone tissue." },
    { word: "Plasma", definition: "The liquid component of blood." },
    { word: "Synapse", definition: "A junction between two nerve cells." },
    { word: "Thrombus", definition: "A blood clot that forms inside a blood vessel." }
];

// Function to get a consistent random word based on the date in Philippine Standard Time (PST)
function getWordOfTheDay() {
    const now = new Date();

    // Convert to Philippine Standard Time (UTC+8)
    const philTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

    // Get the day number of the year
    const startOfYear = new Date(philTime.getFullYear(), 0, 0);
    const diff = philTime - startOfYear;
    const dayOfYear = Math.floor(diff / 86400000); // Convert to day number

    const index = dayOfYear % words.length; // Get a word based on the day

    // Update the HTML
    document.getElementById("word").textContent = words[index].word;
    document.getElementById("word-definition").textContent = words[index].definition;
}

// Run the function when the page loads
window.onload = getWordOfTheDay;

document.getElementById('menu-btn').addEventListener('click', function() {
    alert('Menu button clicked! (Add menu functionality here)');
});