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

    // InstanceName
    function  InstanceName(inputField) {
      var regex = /^[a-z][a-z0-9\-]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("InstanceNameError").textContent =
          'Start a-z Only a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("InstanceNameError").textContent = "";
      }
    }


    // MachineType
    function MachineType(selectElement) {
      var selectedValue = selectElement.value;
      // var categoryError = document.getElementById('category_error');

      if (selectedValue === "") {
        document.getElementById("MachineTypeError").textContent =
          "Please select a Runtime.";
      } else {
        document.getElementById("MachineTypeError").textContent = "";
      }
    }

    //DiskImageName1
    function DiskImageName1(inputField) {
      var inputValue = inputField.value;

      if (inputValue === "") {
        // If empty, display an error message
        document.getElementById("DiskImageNameError").textContent =
          'Field cannot be empty.';
      } else {
        document.getElementById("DiskImageNameError").textContent = "";
      }
    }

    // DiskImageName2

    function DiskImageName2(inputField) {
      var regex = /^[0-9][0-9]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9]/g, "");
        document.getElementById("DiskImageNameError").textContent =
          'Start 0-9 Only 0-9 are allowed.';
      } else {
        document.getElementById("DiskImageNameError").textContent = "";
      }
    }

    // StartupScript File Upload

    // Email
    function  Email(inputField) {
      var regex = /^[a-z][a-z\@]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z\@]/g, "");
        document.getElementById("EmailError").textContent =
          'Start a-z Only a-z "@" are allowed.';
      } else {
        document.getElementById("EmailError").textContent = "";
      }
    }

    // Ports
    function  Ports(inputField) {
      var regex = /^[0-9][0-9]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9]/g, "");
        document.getElementById("PortsError").textContent =
          'Start 0-9 Only 0-9 are allowed.';
      } else {
        document.getElementById("PortsError").textContent = "";
      }
    }

    // HTTPSsource
    function  HTTPSsource(inputField) {
      var regex = /^[0-9][0-9\./]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9\./]/g, "");
        document.getElementById("HTTPSsourceError").textContent =
          'Start 0-9 Only 0-9 "./" are allowed.';
      } else {
        document.getElementById("HTTPSsourceError").textContent = "";
      }
    }

    // SSHsource
    function  SSHsource(inputField) {
      var regex = /^[0-9][0-9\./]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9\./]/g, "");
        document.getElementById("SSHsourceError").textContent =
          'Start 0-9 Only 0-9 "./" are allowed.';
      } else {
        document.getElementById("SSHsourceError").textContent = "";
      }
    }


    // FORM VALIDATION
    function validateForm() {
      var RepoName = document.getElementById("reponame");
      var Pat = document.getElementById("pat");
      var Region = document.getElementById("region");
      var Zone = document.getElementById("zone");
      var Instancename = document.getElementById("instanceName");
      var Machinetype = document.getElementById("machineType");
      var DiskImagename1 = document.getElementById("diskImageName1");
      var DiskImagename2 = document.getElementById("diskImageName2");
      var EmaiL = document.getElementById("email");
      var PortS = document.getElementById("ports");
      var htTPSsource = document.getElementById("hTTPSsource");
      var sshsource = document.getElementById("sSHsource");
      var Startupscript = document.getElementById('startupscript').value;


      repository(RepoName);
      PersonalAccessToken(Pat);
      region(Region);
      zone(Zone);
      InstanceName(Instancename);
      MachineType(Machinetype);
      DiskImageName1(DiskImagename1);
      DiskImageName2(DiskImagename2);
      Email(EmaiL);
      Ports(PortS);
      HTTPSsource(htTPSsource);
      SSHsource(sshsource);
      
      if (Startupscript.trim() === "") {
        document.getElementById('StartupscriptError').innerText = "Please fill the box.";
        document.getElementById('StartupscriptHint').style.display = 'block';
        document.getElementById('StartupscriptHint').setAttribute('data-visible', 'true');
      }


      var RepoNameError = document.getElementById("reponameError").textContent;
      var PatError = document.getElementById("patError").textContent;
      var RegionError = document.getElementById("regionError").textContent;
      var ZoneError = document.getElementById("zoneError").textContent;
      var instanceNameError = document.getElementById("InstanceNameError").textContent;
      var machineTypeError = document.getElementById("MachineTypeError").textContent;
      var DiskImageNameError = document.getElementById("DiskImageNameError").textContent; 
      var emailError = document.getElementById("EmailError").textContent;
      var portsError = document.getElementById("PortsError").textContent;
      var hTTPSsourceError = document.getElementById("HTTPSsourceError").textContent;
      var sSHsourceError = document.getElementById("SSHsourceError").textContent;



      if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || instanceNameError.trim() !== "" || machineTypeError.trim() !== "" || DiskImageNameError.trim() !== ""  || startupScriptError.trim() !== ""|| emailError.trim() !== "" || portsError.trim() !== "" || hTTPSsourceError.trim() !== "" || sSHsourceError.trim() !== "" || Startupscript.trim() === "") {
        return false;
      }
      return true;
    }