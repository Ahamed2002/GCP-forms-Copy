// Add your JavaScript logic here
// start filter option for search field
const filterInput = document.getElementById('form1');
const buttons = document.querySelectorAll('.lii');

filterInput.addEventListener('input', function () {
    const filterText = this.value.toLowerCase();

    buttons.forEach(button => {
        const buttonText = button.querySelector('.action').textContent.toLowerCase();
        button.style.display = buttonText.includes(filterText) ? 'flex' : 'none';
    });
});
// end filter option for search field
//start Form Hint msg
function toggleHint(inputId) {
    var hint = document.getElementById(inputId + 'Hint');
    var isVisible = hint.getAttribute('data-visible') === 'true';

    if (!isVisible) {
        hint.style.display = 'block';
        hint.setAttribute('data-visible', 'true');
    } else {
        hint.style.display = 'none';
        hint.setAttribute('data-visible', 'false');
    }
}
//end Form Hint msg

//REPOSITORY NAME
function repository(inputField) {
    var inputValue = inputField.value;

    if (inputValue === "") {
        // If empty, display an error message
        document.getElementById("reponameError").textContent =
            'Field cannot be empty.';
    } else {
        document.getElementById("reponameError").textContent = "";
    }
}

// PERSONAL ACCESS TOKEN
function PersonalAccessToken(inputField) {
    var regex = /^[A-Za-z0-9\_]+$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^A-Za-z0-9\_]/g, "");
        document.getElementById("patError").textContent =
            'Only A-Z, a-z, 0-9, "_" are allowed.';
    } else {
        document.getElementById("patError").textContent = "";
    }
}
// REGION
function region(selectregion) {
    var selecteRegion = selectregion.value;
    // var categoryError = document.getElementById('category_error');

    if (selecteRegion === "") {
        document.getElementById("regionError").textContent =
            "Please select a Region.";
    } else {
        document.getElementById("regionError").textContent = "";
    }
}

// ZONE
function zone(selectzone) {
    var selecteZone = selectzone.value;
    // var categoryError = document.getElementById('category_error');

    if (selecteZone === "") {
        document.getElementById("zoneError").textContent =
            "Please select a Zone.";
    } else {
        document.getElementById("zoneError").textContent = "";
    }
}

// Dataset ID
function DatasetID(inputField) {
    var regex = /^[a-z][a-z0-9\_]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\_]/g, "");
        document.getElementById("DatasetError").textContent =
            'Start a-z Only   a-z, 0-9, "_" are allowed.';
    } else {
        document.getElementById("DatasetError").textContent = "";
    }
}

// Friendly Name
function FriendlyName(inputField) {
    var regex = /^[a-z][a-z]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z]/g, "");
        document.getElementById("FriendlyNameError").textContent =
            'Start a-z Only  a-z are allowed.';
    } else {
        document.getElementById("FriendlyNameError").textContent = "";
    }
}

// Table ID
function TableID(inputField) {
    var regex = /^[a-z][a-zA-Z0-9\_]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-zA-Z0-9\_]/g, "");
        document.getElementById("TableIDError").textContent =
            'Start a-z Only   a-z,A-Z,0-9, "_" are allowed.';
    } else {
        document.getElementById("TableIDError").textContent = "";
    }
}


// Time Partitioning
function TimePartitioning(selectElement) {
    var selectedValue = selectElement.value;
    // var categoryError = document.getElementById('category_error');

    if (selectedValue === "") {
        document.getElementById("TimePartitioningError").textContent =
            "Please select a TimePartitioning.";
    } else {
        document.getElementById("TimePartitioningError").textContent = "";
    }
}




// FORM VALIDATION
function validateForm() {
    var RepoName = document.getElementById("reponame");
    var Pat = document.getElementById("pat");
    var Region = document.getElementById("region");
    var Zone = document.getElementById("zone");
    var Datasetid = document.getElementById("datasetid");
    var Shell = document.getElementById("shell");
    var Bucket = document.getElementById("bucket");
    var timePartitioning = document.getElementById("TimePartitioning");


    repository(RepoName);
    PersonalAccessToken(Pat);
    region(Region);
    zone(Zone);
    DatasetID(Datasetid);
    FriendlyName(Shell);
    TableID(Bucket);
    TimePartitioning(timePartitioning);



    var RepoNameError = document.getElementById("reponameError").textContent;
    var PatError = document.getElementById("patError").textContent;
    var RegionError = document.getElementById("regionError").textContent;
    var ZoneError = document.getElementById("zoneError").textContent;
    var DatasetIDError = document.getElementById("DatasetIDError").textContent;
    var FriendlyNameError = document.getElementById("FriendlynameError").textContent;
    var TableIDError = document.getElementById("TableidError").textContent;
    var TimePartitioningError = document.getElementById("timePartitioningError").textContent;


    if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || ServiceNameError.trim() !== "" || RuntimeError.trim() !== "" || ShellError.trim() !== "" || BucketError.trim() !== "") {
        return false;
    }
    return true;
}