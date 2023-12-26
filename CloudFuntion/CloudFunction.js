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

// CloudFunction Name
function CloudFunName(inputField) {
    var regex = /^[a-z][a-z0-9\-]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("CloudFunNameError").textContent =
            'Start a-z Only  a-z, 0-9, "-" are allowed.';
    } else {
        document.getElementById("CloudFunNameError").textContent = "";
    }
}


// Runtime option1
function Runtime1(selectElement) {
    var selectedValue = selectElement.value;
    // var categoryError = document.getElementById('category_error');

    if (selectedValue === "") {
        document.getElementById("Runtime1Error").textContent =
            "Please select a Runtime.";
    } else {
        document.getElementById("Runtime1Error").textContent = "";
    }
}

// Runtime option2
function Runtime2(selectElement) {
    var selectedValue = selectElement.value;
    // var categoryError = document.getElementById('category_error');

    if (selectedValue === "") {
        document.getElementById("Runtime1Error").textContent =
            "Please select a Runtime.";
    } else {
        document.getElementById("Runtime1Error").textContent = "";
    }
}

// Storage Bucket
function StorageBucketObj(inputField) {
    var regex = /^[a-z][a-z0-9\.]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\.]/g, "");
        document.getElementById("StoragebucketObjError").textContent =
            'Start a-z Only  a-z, 0-9, "." are allowed.';
    } else {
        document.getElementById("StoragebucketObjError").textContent = "";
    }
}

//Bucket Url
function BucketUrl(inputField) {
    var inputValue = inputField.value;

    if (inputValue === "") {
        // If empty, display an error message
        document.getElementById("BucketUrlError").textContent =
            'Field cannot be empty.';
    } else {
        document.getElementById("BucketUrlError").textContent = "";
    }
}

// Entry Point
function EntryPoint(inputField) {
    var regex = /^[a-z][a-zA_Z\-]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-zA-Z\-]/g, "");
        document.getElementById("EntryPointError").textContent =
            'Start a-z Only  a-z, A-Z, "-" are allowed.';
    } else {
        document.getElementById("EntryPointError").textContent = "";
    }
}

// MemorySize
function MemorySize(inputField) {
    var regex = /^[0-9][0-9]*$/;
    var inputValue = inputField.value;

    if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9]/g, "");
        document.getElementById("MemorySizeError").textContent =
            'Start 0-9 Only  0-9 are allowed.';
    } else {
        document.getElementById("MemorySizeError").textContent = "";
    }
}


// FORM VALIDATION
function validateForm() {
    var RepoName = document.getElementById("reponame");
    var Pat = document.getElementById("pat");
    var Region = document.getElementById("region");
    var Zone = document.getElementById("zone");
    var CloudFunname = document.getElementById("cloudFunname");
    var StoragebucketObj = document.getElementById("storagebucketObj");
    var RunTime1 = document.getElementById("runtime1");
    var RunTime2 = document.getElementById("runtime2");
    var bucketurl = document.getElementById("bucketUrl");
    var Entrypoint = document.getElementById("entryPoint");
    var Memorysize = document.getElementById("memorySize");


    repository(RepoName);
    PersonalAccessToken(Pat);
    region(Region);
    zone(Zone);
    CloudFunName(CloudFunname);
    StorageBucketObj(StoragebucketObj);
    Runtime1(RunTime1);
    Runtime2(RunTime2);
    BucketUrl(bucketurl);
    EntryPoint(Entrypoint);
    MemorySize(Memorysize);



    var RepoNameError = document.getElementById("reponameError").textContent;
    var PatError = document.getElementById("patError").textContent;
    var RegionError = document.getElementById("regionError").textContent;
    var ZoneError = document.getElementById("zoneError").textContent;
    var CloudFunNameError = document.getElementById("CloudFunNameError").textContent;
    var StoragebucketObjError = document.getElementById("StoragebucketObjError").textContent;
    var Runtime1Error = document.getElementById("Runtime1Error").textContent;
    var BucketUrlError = document.getElementById("BucketUrlError").textContent;
    var EntryPointError = document.getElementById("EntryPointError").textContent;
    var MemorySizeError = document.getElementById("MemorySizeError").textContent;


    if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || CloudFunNameError.trim() !== "" || StoragebucketObjError.trim() !== "" || Runtime1Error.trim() !== "" || BucketUrlError.trim() !== "" || EntryPointError.trim() !== "" || MemorySizeError.trim() !== "") {
        return false;
    }
    return true;
}