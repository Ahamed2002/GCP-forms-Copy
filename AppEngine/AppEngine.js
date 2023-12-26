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

    // SERVICE NAME
    function validateProductName(inputField) {
      var regex = /^[A-Za-z][A-Za-z0-9\-]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^A-Za-z0-9\-]/g, "");
        document.getElementById("servicenameError").textContent =
          'Start A-Z,a-z Only  A-Z, a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("servicenameError").textContent = "";
      }
    }


    // RUNTIME
    function runtime(selectElement) {
      var selectedValue = selectElement.value;
      // var categoryError = document.getElementById('category_error');

      if (selectedValue === "") {
        document.getElementById("runtimeError").textContent =
          "Please select a Runtime.";
      } else {
        document.getElementById("runtimeError").textContent = "";
      }
    }

    function fmshell(inputField) {
      var regex = /^[A-Za-z][A-Za-z0-9\-.]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^A-Za-z0-9\-.]/g, "");
        document.getElementById("shellError").textContent =
          'Start A-Z,a-z Only A-Z, a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("shellError").textContent = "";
      }
    }

    //REPOSITORY NAME
    function bucketurl(inputField) {
      var inputValue = inputField.value;

      if (inputValue === "") {
        // If empty, display an error message
        document.getElementById("bucketError").textContent =
          'Field cannot be empty.';
      } else {
        document.getElementById("bucketError").textContent = "";
      }
    }


    // FORM VALIDATION
    function validateForm() {
      var RepoName = document.getElementById("reponame");
      var Pat = document.getElementById("pat");
      var Region = document.getElementById("region");
      var Zone = document.getElementById("zone");
      var ServiceName = document.getElementById("servicename");
      var Runtime = document.getElementById("runtime");
      var Shell = document.getElementById("shell");
      var Bucket = document.getElementById("bucket");


      repository(RepoName);
      PersonalAccessToken(Pat);
      region(Region);
      zone(Zone);
      validateProductName(ServiceName);
      runtime(Runtime);
      fmshell(Shell);
      bucketurl(Bucket);



      var RepoNameError = document.getElementById("reponameError").textContent;
      var PatError = document.getElementById("patError").textContent;
      var RegionError = document.getElementById("regionError").textContent;
      var ZoneError = document.getElementById("zoneError").textContent;
      var ServiceNameError = document.getElementById("servicenameError").textContent;
      var RuntimeError = document.getElementById("runtimeError").textContent;
      var ShellError = document.getElementById("shellError").textContent;
      var BucketError = document.getElementById("bucketError").textContent;


      if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || ServiceNameError.trim() !== "" || RuntimeError.trim() !== "" || ShellError.trim() !== "" || BucketError.trim() !== "") {
        return false;
      }
      return true;
    }
