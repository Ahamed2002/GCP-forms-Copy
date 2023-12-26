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

    // Spanner Name
    function  SpannerName(inputField) {
      var regex = /^[a-z][a-z0-9\-]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("SpannerNameError").textContent =
          'Start a-z Only a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("SpannerNameError").textContent = "";
      }
    }

    // Spanner DB Name
    function  SpannerDBname(inputField) {
        var regex = /^[a-z][a-zA-Z0-9]*$/;
        var inputValue = inputField.value;
  
        if (!regex.test(inputValue)) {
          inputField.value = inputValue.replace(/[^a-zA-Z0-9]/g, "");
          document.getElementById("SpannerDBnameError").textContent =
            'Start a-z Only a-z,A-Z, 0-9 are allowed.';
        } else {
          document.getElementById("SpannerDBnameError").textContent = "";
        }
      }


    // Config
    function Config(selectElement) {
      var selectedValue = selectElement.value;
      // var categoryError = document.getElementById('category_error');

      if (selectedValue === "") {
        document.getElementById("ConfigError").textContent =
          "Please select a Runtime.";
      } else {
        document.getElementById("ConfigError").textContent = "";
      }
    }

    // DBdialect
    function DBdialect(selectElement) {
        var selectedValue = selectElement.value;
        // var categoryError = document.getElementById('category_error');
  
        if (selectedValue === "") {
          document.getElementById("DBdialectError").textContent =
            "Please select a Runtime.";
        } else {
          document.getElementById("DBdialectError").textContent = "";
        }
      }

    // Num Code
    function  Numcode(inputField) {
        var regex = /^[0-9][0-9]*$/;
        var inputValue = inputField.value;
  
        if (!regex.test(inputValue)) {
          inputField.value = inputValue.replace(/[^0-9]/g, "");
          document.getElementById("NumcodeError").textContent =
            'Start 0-9 Only  0-9 are allowed.';
        } else {
          document.getElementById("NumcodeError").textContent = "";
        }
      }



    // FORM VALIDATION
    function validateForm() {
      var RepoName = document.getElementById("reponame");
      var Pat = document.getElementById("pat");
      var Region = document.getElementById("region");
      var Zone = document.getElementById("zone");
      var Spannername = document.getElementById("spannerName");
      var spannerDBName = document.getElementById("spannerDBname");
      var ConFig = document.getElementById("config");
      var dbdialect = document.getElementById("DBDialect");
      var NumCode = document.getElementById("numcode");


      repository(RepoName);
      PersonalAccessToken(Pat);
      region(Region);
      zone(Zone);
      SpannerName(Spannername);
      SpannerDBname(spannerDBName);
      Config(ConFig);
      DBdialect(dbdialect);
      Numcode(NumCode);



      var RepoNameError = document.getElementById("reponameError").textContent;
      var PatError = document.getElementById("patError").textContent;
      var RegionError = document.getElementById("regionError").textContent;
      var ZoneError = document.getElementById("zoneError").textContent;
      var spannerNameError = document.getElementById("SpannerNameError").textContent;
      var spannerDBnameError = document.getElementById("SpannerDBnameError").textContent;
      var configError = document.getElementById("ConfigError").textContent;
      var dBdialectError = document.getElementById("DBdialectError").textContent;
      var numcodeError = document.getElementById("NumcodeError").textContent;
      var Delection = document.querySelector('input[name="status"]:checked');

      if (!Delection) {
        document.getElementById('DelectionError').innerText = "Please fill the box.";
        document.getElementById('DelectionHint').style.display = 'block';
        document.getElementById('DelectionHint').setAttribute('data-visible', 'true');
      }


      if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || spannerNameError.trim() !== "" || spannerDBnameError.trim() !== "" || configError.trim() !== "" || dBdialectError.trim() !== "" || numcodeError.trim() !== "" || !Delection) {
        return false;
      }
      return true;
    }