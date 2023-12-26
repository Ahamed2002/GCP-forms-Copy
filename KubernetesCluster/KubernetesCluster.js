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

    // ClusterName
    function  ClusterName(inputField) {
      var regex = /^[a-z][a-z0-9\-]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("ClusterNameError").textContent =
          'Start a-z Only a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("ClusterNameError").textContent = "";
      }
    }
    
    // NetworkID
    function  NetworkID(inputField) {
      var regex = /^[a-z][a-z0-9\-]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9\-]/g, "");
        document.getElementById("NetworkIDError").textContent =
          'Start a-z Only a-z, 0-9, "-" are allowed.';
      } else {
        document.getElementById("NetworkIDError").textContent = "";
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

    // SubnetId

    function SubnetId(inputField) {
      var regex = /^[a-z][a-z0-9]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^a-z0-9]/g, "");
        document.getElementById("SubnetIdError").textContent =
          'Start a-z Only a-z,0-9 are allowed.';
      } else {
        document.getElementById("SubnetIdError").textContent = "";
      }
    }

    // PrivateConfig
    function  PrivateConfig(inputField) {
      var regex = /^[0-9][0-9\./]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9\./]/g, "");
        document.getElementById("PrivateConfigError").textContent =
          'Start 0-9 Only 0-9 "./" are allowed.';
      } else {
        document.getElementById("PrivateConfigError").textContent = "";
      }
    }

    // NetworkConfig
    function  NetworkConfig(inputField) {
      var regex = /^[0-9][0-9\./]*$/;
      var inputValue = inputField.value;

      if (!regex.test(inputValue)) {
        inputField.value = inputValue.replace(/[^0-9\./]/g, "");
        document.getElementById("NetworkConfigError").textContent =
          'Start 0-9 Only 0-9 , "./" are allowed.';
      } else {
        document.getElementById("NetworkConfigError").textContent = "";
      }
    }

    // NodeCount
    function  NodeCount(inputField) {
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


    // FORM VALIDATION
    function validateForm() {
      var RepoName = document.getElementById("reponame");
      var Pat = document.getElementById("pat");
      var Region = document.getElementById("region");
      var Zone = document.getElementById("zone");
      var Clustername = document.getElementById("clusterName");
      var Networkid = document.getElementById("NetworkId");
      var SubnetID = document.getElementById("subnetId");
      var Privateconfig = document.getElementById("privateConfig");
      var networkConfig = document.getElementById("Networkconfig");
      var nodeCount = document.getElementById("Nodecount");
      var machineType = document.getElementById("Machinetype");
      var EmaiL = document.getElementById("email");


      repository(RepoName);
      PersonalAccessToken(Pat);
      region(Region);
      zone(Zone);
      ClusterName(Clustername);
      NetworkID(Networkid);
      SubnetId(SubnetID);
      PrivateConfig(Privateconfig);
      NetworkConfig(networkConfig);
      NodeCount(nodeCount);
      MachineType(machineType);
      Email(EmaiL);



      var RepoNameError = document.getElementById("reponameError").textContent;
      var PatError = document.getElementById("patError").textContent;
      var RegionError = document.getElementById("regionError").textContent;
      var ZoneError = document.getElementById("zoneError").textContent;
      var clusterNameError = document.getElementById("ClusterNameError").textContent;
      var networkIDError = document.getElementById("NetworkIDError").textContent;
      var subnetIdError = document.getElementById("SubnetIdError").textContent; 
      var privateConfigError = document.getElementById("PrivateConfigError").textContent;
      var networkConfigError = document.getElementById("NetworkConfigError").textContent;
      var nodeCountError = document.getElementById("NodeCountError").textContent;
      var machineTypeError = document.getElementById("MachineTypeError").textContent;
      var emailError = document.getElementById("EmailError").textContent;



      if (RepoNameError.trim() !== "" || PatError.trim() !== "" || RegionError.trim() !== "" || ZoneError.trim() !== "" || clusterNameError.trim() !== "" || networkIDError.trim() !== "" || subnetIdError.trim() !== ""  || privateConfigError.trim() !== ""|| networkConfigError.trim() !== "" || nodeCountError.trim() !== "" || machineTypeError.trim() !== "" || emailError.trim() !== "") {
        return false;
      }
      return true;
    }