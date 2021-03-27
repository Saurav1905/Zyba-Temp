function showNewBookingModal() {
  console.log("nav-on");
  document.querySelector("#new-booking-modal").style.display = "flex";
  if (document.querySelector("#new-booking-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }
  var container = document.querySelector("#new-booking-modal");
  container.querySelectorAll(".actual-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.style.display = "none";
      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";
      document.querySelector("html").style.overflowY = "scroll";
    });
  });
  // document.addEventListener("mouseup", function (e) {
  //   var container = document.querySelector("#new-booking-modal");
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });

  // for history modal

  // document.querySelector("#history-modal").style.display = "flex";
  // if (document.querySelector("#history-modal").style.display === "flex") {
  //   document.querySelector(".non-floating").style.filter =
  //     "brightness(50%) contrast(50%)";
  //   document.querySelector(".non-floating").style.backgroundColor =
  //     "rgba(32, 32, 32, 0.48)";

  //   document.querySelector("html").style.overflowY = "hidden";
  // }

  // document.addEventListener("mouseup", function (e) {
  //   var container = document.querySelector("#history-modal");
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });
}

function showBookingHistoryModal() {
  document.querySelector("#history-modal").style.display = "flex";
  if (document.querySelector("#history-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }
  var chooseTimeContainer = document.querySelector("#choose-prof-modal");
  chooseTimeContainer.style.display = "none";
  var container = document.querySelector("#history-modal");
  container.querySelectorAll(".actual-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.style.display = "none";

      // document.querySelector(".non-floating").style.filter = "none";
      // document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      // document.querySelector("html").style.overflowY = "scroll";
    });
  });

  // document.addEventListener("mouseup", function (e) {
  //   var container = document.querySelector("#history-modal");
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });
}

function showBookingModal() {
  console.log("nav-on");
  document.querySelector("#show-booking-modal-container").style.display =
    "flex";
  if (
    document.querySelector("#show-booking-modal-container").style.display ===
    "flex"
  ) {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }
  document
    .querySelectorAll(".customer-history-btn")[0]
    .addEventListener("click", showBookingHistoryModal);

  var container = document.querySelector("#show-booking-modal");
  var historyContainer = document.querySelector("#history-modal");
  var timeContainer = document.querySelector("#choose-prof-modal");

  container.querySelectorAll(".actual-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector("#show-booking-modal-container").style.display =
        "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    });
  });
  // document.addEventListener("mouseup", function (e) {
  //   var container = document.querySelector("#show-booking-modal");
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });
}

function chooseProfModal() {
  console.log("nav-on");
  document.querySelector("#choose-prof-modal").style.display = "flex";
  if (document.querySelector("#choose-prof-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  var container = document.querySelector("#choose-prof-modal");
  var historyContainer = document.querySelector("#history-modal");

  historyContainer.style.display = "none";

  container.querySelectorAll(".actual-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.style.display = "none";
    });
  });
}

function showAddEmpModal() {
  console.log("nav-on");
  document.querySelector("#add-emp-modal").style.display = "flex";
  if (document.querySelector("#add-emp-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  var container = document.querySelector("#add-emp-modal");
  container.querySelectorAll(".actual-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    });
  });
  // document.addEventListener("mouseup", function (e) {
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });
}

function showEditEmpModal() {
  console.log("nav-on");
  document.querySelector("#edit-emp-modal").style.display = "flex";
  if (document.querySelector("#edit-emp-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  var container = document.querySelector("#edit-emp-modal");
  container.querySelectorAll(".actual-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    });
  });
  // document.addEventListener("mouseup", function (e) {
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });
}

function showDelEmpModal() {
  var container1 = document.querySelector("#edit-emp-modal");
  container1.style.display = "none";
  console.log("nav-on");
  document.querySelector("#del-emp-modal").style.display = "flex";
  if (document.querySelector("#del-emp-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#del-emp-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}
