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

    // SourecBucketName
    function  SourecBucketName(inputField) {
      var regex = /^[a-z][a-z0-9\_]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\_]/g, "");
        document.getElementById("SourecBucketNameError").textContent =
          'Start a-z Only  A-Z, a-z, 0-9, "_" are allowed.';
      } else {
        document.getElementById("SourecBucketNameError").textContent = "";
      }
    }

    // DestinationName
    function  DestinationName(inputField) {
        var regex = /^[a-z][a-z0-9\_]*$/;
        var inputValue = inputField.value;
  
        if (!regex.test(inputValue)) {
          inputField.value = inputValue.replace(/[^a-z0-9\_]/g, "");
          document.getElementById("DestinationNameError").textContent =
            'Start a-z Only  A-Z, a-z, 0-9, "_" are allowed.';
        } else {
          document.getElementById("DestinationNameError").textContent = "";
        }
      }



    // FORM VALIDATION
    function validateForm() {
      var RepoName = document.getElementById("reponame");
      var Pat = document.getElementById("pat");
      var Region = document.getElementById("region");
      var Zone = document.getElementById("zone");
      var SourecBucketname = document.getElementById("sourecBucketName");
      var Destinationname = document.getElementById("destinationName");
      var SourceObject = document.querySelector('input[name="source"]:checked');
      var Sink = document.querySelector('input[name="sink"]:checked');
      var Monthdate = document.getElementById('MonthDate').value;
    


      repository(RepoName);
      PersonalAccessToken(Pat);
      region(Region);
      zone(Zone);
      SourecBucketName(SourecBucketname);
      DestinationName(Destinationname);
    // Source Object Name
    if (!SourceObject) {
      document.getElementById('SourceObjectError').innerText = "Please fill the box.";
      document.getElementById('SourceObjectHint').style.display = 'block';
      document.getElementById('SourceObjectHint').setAttribute('data-visible', 'true');
    }
    // Sink Object Delete
    if (!Sink) {
      document.getElementById('SinkError').innerText = "Please fill the box.";
      document.getElementById('SinkHint').style.display = 'block';
      document.getElementById('SinkHint').setAttribute('data-visible', 'true');
    }
    // Month/Date/Year
    if (Monthdate.trim() === "") {
      document.getElementById('dateError').innerText = "Please select a date.";
      document.getElementById('dateHint').style.display = 'block';
      document.getElementById('dateHint').setAttribute('data-visible', 'true');
  }



      var RepoNameError = document.getElementById("reponameError").textContent;
      var PatError = document.getElementById("patError").textContent;
      var RegionError = document.getElementById("regionError").textContent;
      var ZoneError = document.getElementById("zoneError").textContent;
      var sourecBucketNameError = document.getElementById("SourecBucketNameError").textContent;
      var destinationNameError = document.getElementById("DestinationNameError").textContent;


      if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || sourecBucketNameError.trim() !== "" || destinationNameError.trim() !== "" || Monthdate.trim() === "") {
        return false;
      }
      return true;
    }