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

    // Name
    function  Name(inputField) {
      var regex = /^[a-z][a-z0-9\-]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("NameError").textContent =
          'Start a-z Only a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("NameError").textContent = "";
      }
    }


    // NodeTypeId
    function NodeTypeId(selectElement) {
      var selectedValue = selectElement.value;
      // var categoryError = document.getElementById('category_error');

      if (selectedValue === "") {
        document.getElementById("NodeTypeIdError").textContent =
          "Please select a Runtime.";
      } else {
        document.getElementById("NodeTypeIdError").textContent = "";
      }
    }

    // NodeCount
    function NodeCount(inputField) {
      var regex = /^[0-9][0-9]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9]/g, "");
        document.getElementById("NodeCountError").textContent =
          'Start 0-9 Only 0-9 are allowed.';
      } else {
        document.getElementById("NodeCountError").textContent = "";
      }
    }

    // ManagementCidr
    function  ManagementCidr(inputField) {
        var regex = /^[0-9][0-9\./]*$/;
        var inputValue = inputField.value;
  
        if (!regex.test(inputValue)) {
          inputField.value = inputValue.replace(/[^0-9\./]/g, "");
          document.getElementById("ManagementCidrError").textContent =
            'Start 0-9 Only 0-9 "./" are allowed.';
        } else {
          document.getElementById("ManagementCidrError").textContent = "";
        }
      }

    


    // FORM VALIDATION
    function validateForm() {
      var RepoName = document.getElementById("reponame");
      var Pat = document.getElementById("pat");
      var Region = document.getElementById("region");
      var Zone = document.getElementById("zone");
      var NamE = document.getElementById("name");
      var NodeTypeID = document.getElementById("nodeTypeId");
      var nodeCount = document.getElementById("Nodecount");
      var Managementcidr = document.getElementById("managementCidr");


      repository(RepoName);
      PersonalAccessToken(Pat);
      region(Region);
      zone(Zone);
      Name(NamE);
      NodeTypeId(NodeTypeID);
      NodeCount(nodeCount);
      ManagementCidr(Managementcidr);



      var RepoNameError = document.getElementById("reponameError").textContent;
      var PatError = document.getElementById("patError").textContent;
      var RegionError = document.getElementById("regionError").textContent;
      var ZoneError = document.getElementById("zoneError").textContent;
      var nameError = document.getElementById("NameError").textContent;
      var nodeTypeIdError = document.getElementById("NodeTypeIdError").textContent;
      var nodeCountError = document.getElementById("NodeCountError").textContent;
      var managementCidrError = document.getElementById("ManagementCidrError").textContent;


      if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || nameError.trim() !== "" || nodeTypeIdError.trim() !== "" || nodeCountError.trim() !== "" || managementCidrError.trim() !== "") {
        return false;
      }
      return true;
    }