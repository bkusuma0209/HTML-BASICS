function showMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "visible"
    menuContainer.style.opacity="1"
}
function hideMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "hidden"
    menuContainer.style.opacity="0"
}


var counter = 1;
setInterval(function () {
    document.getElementById('a' + counter).checked = true;
    document.getElementById('b' + counter).checked = true;
    document.getElementById('c' + counter).checked = true;
    document.getElementById('d' + counter).checked = true;
    document.getElementById('r' + counter).checked = true;
    document.getElementById('E' + counter).checked = true;
    document.getElementById('q' + counter).checked = true;
    document.getElementById('s' + counter).checked = true;
    
    counter++;
  
    if (counter > 5 ) {
        counter = 1;
    }
  
  
}, 2500);


var counter = 1;
setInterval(function () {
    document.getElementById('D' + counter).checked = true;
   counter++;
  
    if (counter > 2 ) {
        counter = 1;
    }
  
  
}, 1000);

var counter = 1;
setInterval(function () {
    document.getElementById('p' + counter).checked = true;
   counter++;
  
    if (counter > 3 ) {
        counter = 1;
    }
  
  
}, 1500);
const menDropdown = document.getElementById('menDropdown');
const menMenu = document.getElementById('menMenu');

menDropdown.addEventListener('mouseenter', () => {
  menMenu.style.display = 'flex';
});

// Hide menu on mouseleave
menDropdown.addEventListener('mouseleave', () => {
  menMenu.style.display = 'none';
});
// JavaScript to show/hide the WOMEN dropdown menu on mouseenter/mouseleave
const dropdown = document.getElementById("womenDropdown");
const menu = document.getElementById("womenMenu");

dropdown.addEventListener("mouseenter", () => {
  menu.style.display = "flex";
});

dropdown.addEventListener("mouseleave", () => {
  menu.style.display = "none";
});
const kidsDropdown = document.getElementById("kidsDropdown");
const kidsMenu = document.getElementById("kidsMenu");

kidsDropdown.addEventListener("mouseenter", () => {
  kidsMenu.style.display = "flex";
});
kidsDropdown.addEventListener("mouseleave", () => {
  kidsMenu.style.display = "none";
});
function setupDropdown(toggleId, menuId) {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);
  let timer;

  toggle.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    menu.style.display = "flex";
  });

  toggle.addEventListener("mouseleave", () => {
    timer = setTimeout(() => {
      menu.style.display = "none";
    }, 200);
  });

  menu.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    menu.style.display = "flex";
  });

  menu.addEventListener("mouseleave", () => {
    timer = setTimeout(() => {
      menu.style.display = "none";
    }, 200);
  });
}

// Call the function for BEAUTY menu
setupDropdown("beautyToggle", "beautyMenu");

// You can reuse this function for KIDS, WOMEN, etc.
setupDropdown("homeKitchenToggle", "homeKitchenMenu");