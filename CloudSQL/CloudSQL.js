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

// SQLinstanceName
function SQLinstanceName(inputField) {
    var regex = /^[a-z][a-z0-9\-]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("SQLinstanceNameError").textContent =
            'Start a-z Only  a-z, 0-9, "-" are allowed.';
    } else {
        document.getElementById("SQLinstanceNameError").textContent = "";
    }
}


// DBversion
function DBversion(selectElement) {
    var selectedValue = selectElement.value;
    // var categoryError = document.getElementById('category_error');

    if (selectedValue === "") {
        document.getElementById("DBversionError").textContent =
            "Please select a Runtime.";
    } else {
        document.getElementById("DBversionError").textContent = "";
    }
}

// Tire
function Tire(selectElement) {
    var selectedValue = selectElement.value;
    // var categoryError = document.getElementById('category_error');

    if (selectedValue === "") {
        document.getElementById("TireError").textContent =
            "Please select a Runtime.";
    } else {
        document.getElementById("TireError").textContent = "";
    }
}

// DB Name
function DBname(inputField) {
    var regex = /^[a-z][A-Za-z0-9\-_]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^A-Za-z0-9\-_]/g, "");
        document.getElementById("DBnameError").textContent =
            'Start A-Z,a-z Only A-Z, a-z, 0-9, "-" are allowed.';
    } else {
        document.getElementById("DBnameError").textContent = "";
    }
}

//SQL userName
function SQLuserName(inputField) {
    var inputValue = inputField.value;

    if (inputValue === "") {
        // If empty, display an error message
        document.getElementById("SQLuserNameError").textContent =
            'Field cannot be empty.';
    } else {
        document.getElementById("SQLuserNameError").textContent = "";
    }
}

//SQL password
function SQLpassword(inputField) {
    var inputValue = inputField.value;

    if (inputValue === "") {
        // If empty, display an error message
        document.getElementById("SQLpasswordError").textContent =
            'Field cannot be empty.';
    } else {
        document.getElementById("SQLpasswordError").textContent = "";
    }
}

// FORM VALIDATION
function validateForm() {
    var RepoName = document.getElementById("reponame");
    var Pat = document.getElementById("pat");
    var Region = document.getElementById("region");
    var Zone = document.getElementById("zone");
    var sQLinstanceName = document.getElementById("SQLinstancename");
    var dBversion = document.getElementById("Dbversion");
    var tire = document.getElementById("TirE");
    var dBname = document.getElementById("Dbname");
    var sqluserName = document.getElementById("sQLuserName");
    var sqlpassword = document.getElementById("sQLpassword");


    repository(RepoName);
    PersonalAccessToken(Pat);
    region(Region);
    zone(Zone);
    SQLinstanceName(sQLinstanceName);
    DBversion(dBversion);
    Tire(tire);
    DBname(dBname);
    SQLuserName(sqluserName);
    SQLpassword(sqlpassword);



    var RepoNameError = document.getElementById("reponameError").textContent;
    var PatError = document.getElementById("patError").textContent;
    var RegionError = document.getElementById("regionError").textContent;
    var ZoneError = document.getElementById("zoneError").textContent;
    var sQLinstanceNameError = document.getElementById("SQLinstanceNameError").textContent;
    var dBversionError = document.getElementById("DBversionError").textContent;
    var tireError = document.getElementById("TireError").textContent;
    var dBnameError = document.getElementById("DBnameError").textContent;
    var sQLuserNameError = document.getElementById("SQLuserNameError").textContent;
    var sQLpasswordError = document.getElementById("SQLpasswordError").textContent;


    if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || sQLinstanceNameError.trim() !== "" || dBversionError.trim() !== "" || tireError.trim() !== "" || dBnameError.trim() !== "" || sQLuserNameError.trim() !== "" || sQLpasswordError.trim() !== "") {
        return false;
    }
    return true;
}