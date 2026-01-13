function SaveToLocalOnClickStorage() {
  // Get input elements (use .value for input fields, not .textContent)
  let nameInput = document.getElementById("name").value.trim();
  let emailInput = document.getElementById("email").value.trim();
  let faxColorSelect = document.getElementById("fax-color").value.trim();

  if (!nameInput) {
    alert("Please enter a name");
    return;
  }

  if (!emailInput) {
    alert("Please enter an email");
    return;
  }

  if (!faxColorSelect) {
    alert("Please select a fax color");
    return;
  }

  localStorage.setItem("Name", nameInput);
  localStorage.setItem("Email", emailInput);
  localStorage.setItem("FaxColor", faxColorSelect);

  let footerResult = document.getElementById("FooterResult");
  if (footerResult) {
    footerResult.textContent = `Saved: ${nameInput} (${emailInput}) - ${faxColorSelect}`;
  }
}

function LoadFromLocalStorage() {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let faxColorSelect = document.getElementById("fax-color");

  if (localStorage.getItem("Name")) {
    nameInput.value = localStorage.getItem("Name");
  } else {
    nameInput.value = "Not Found";
  }

  if (localStorage.getItem("Email")) {
    emailInput.value = localStorage.getItem("Email");
  } else {
    emailInput.value = "Not Found";
  }

  if (localStorage.getItem("FaxColor")) {
    faxColorSelect.value = localStorage.getItem("FaxColor");
  } else {
    faxColorSelect.innerHTML = `<option value="" disabled selected>
                        --Please choose an option--
                      </option>
                      <option value="black">Black</option>
                      <option value="color">Color</option>
                      <option value="grayscale">Grayscale</option>
                      <option value="auto">Auto-detect</option>`;
  }
}

// Function to delete data from local storage
function DeleteFromLocalStorage() {
  localStorage.removeItem("Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("FaxColor");

  // Clear the name field
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let FaxColor = document.getElementById("fax-color");

  nameInput != null ? (nameInput.value = "") : (nameInput.value = "not found");
  emailInput != null
    ? (emailInput.value = "")
    : (emailInput.value = "not found");
  FaxColor != null
    ? (FaxColor.value = "")
    : (FaxColor.value = "--Please choose an option--");

  let footerResult = document.getElementById("FooterResult");
  if (footerResult) {
    footerResult.textContent = `Deleted Was Successfully `;
  }
}

// Function to clear all local storage
function ClearLocalStorage() {
  if (confirm("Are you sure you want to clear ALL local storage data?")) {
    localStorage.clear();

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let faxColorSelect = document.getElementById("fax-color");

    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (faxColorSelect) faxColorSelect.value = "";
    let footerResult = document.getElementById("FooterResult");
    if (footerResult) {
      footerResult.textContent = `Clear Was Successfully `;
    }
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Set up button event listeners
  let saveBtn = document.getElementById("saveBtn");
  let loadBtn = document.getElementById("loadBtn");
  let deleteBtn = document.getElementById("deleteBtn");
  let clearBtn = document.getElementById("clearBtn");

  if (saveBtn) {
    saveBtn.addEventListener("click", SaveToLocalOnClickStorage);
  }

  if (loadBtn) {
    loadBtn.addEventListener("click", LoadFromLocalStorage);
  }

  if (deleteBtn) {
    deleteBtn.addEventListener("click", DeleteFromLocalStorage);
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", ClearLocalStorage);
  }
});
