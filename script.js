// Array of medical terms with definitions
const words = [
    { word: "Amniotomy", definition: "Artificial rupture of membranes to induce or accelerate labor." },
    { word: "Braxton Hicks Contractions", definition: "Irregular, painless uterine contractions that occur throughout pregnancy." },
    { word: "Cephalopelvic Disproportion (CPD)", definition: "A condition where the baby’s head is too large to fit through the mother’s pelvis." },
    { word: "Colostrum", definition: "The first form of breast milk, rich in antibodies and nutrients." },
    { word: "Crowning", definition: "The stage of labor when the baby’s head starts to emerge from the birth canal." },
    { word: "Dilation", definition: "The widening of the cervix in preparation for childbirth." },
    { word: "Eclampsia", definition: "A severe complication of pregnancy characterized by seizures following preeclampsia." },
    { word: "Episiotomy", definition: "A surgical incision made in the perineum to enlarge the vaginal opening for childbirth." },
    { word: "Fundal Height", definition: "The measurement from the pubic bone to the top of the uterus, used to assess fetal growth." },
    { word: "Gestational Diabetes", definition: "A form of diabetes that develops during pregnancy and usually resolves after delivery." },
    { word: "Involution", definition: "The process of the uterus returning to its pre-pregnancy size after childbirth." },
    { word: "Kangaroo Care", definition: "Skin-to-skin contact between a newborn and a parent to promote bonding and regulate body temperature." },
    { word: "Lanugo", definition: "Fine, soft hair covering the fetus, usually shed before or shortly after birth." },
    { word: "Linea Nigra", definition: "A dark vertical line that appears on the abdomen during pregnancy." },
    { word: "Quickening", definition: "The first movements of the fetus felt by the mother, usually around 16–20 weeks of pregnancy." },
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

// Search functionality
const searchInput = document.querySelector('#search-section input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.querySelector('#search-results');

searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim().toLowerCase();
    const result = searchMedicalTerm(query);
    displaySearchResults(result);
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        const result = searchMedicalTerm(query);
        displaySearchResults(result);
    }
});

// Function to search for medical terms based on the input query
function searchMedicalTerm(query) {
    if (query === "") {
        return [];
    }
    return words.filter(wordObj => wordObj.word.toLowerCase().includes(query));
}

// Function to display the search results
function displaySearchResults(results) {
    const searchResultsContainer = document.querySelector('#search-results');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `
                <h3>${result.word}</h3>
                <p>${result.definition}</p>
            `;
            searchResultsContainer.appendChild(resultElement);
        });
    }
}

document.querySelectorAll('.cardview').forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = `definition${index + 1}.html`;
    });
});


const termList = document.getElementById("termList");
const defSection = document.getElementById("definitionSection");

dictionary.forEach((term, index) => {
    const card = document.createElement("div");
    card.className = "cardview";
    card.innerHTML = `<h1 class="termi">${term.title}</h1>`;
    card.onclick = () => showDefinition(index);
    termList.appendChild(card);
});

function showDefinition(index) {
    currentTermIndex = index; // Track which term is active

    document.getElementById("termTitle").innerText = dictionary[index].title;
    document.getElementById("termPronunciation").innerText = dictionary[index].pronunciation;
    document.getElementById("termDefinition").innerText = dictionary[index].definition;

    termList.style.display = "none";
    defSection.style.display = "block";
}


function goBack() {
    termList.style.display = "grid";
    defSection.style.display = "none";
}