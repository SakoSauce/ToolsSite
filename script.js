window.onload = function () {
    let open = document.querySelector("#openSidebar");
    let close = document.querySelector("#closeSidebar");
    let sidebar = document.querySelector(".sidebar");
    let cartButton = document.querySelector("#cartButton");
    let cart = document.querySelector(".cart");
    open.onclick = function () {
        sidebar.classList.toggle("sidebar-active");
    };
    close.onclick = function () {
        sidebar.classList.toggle("sidebar-active");
    };
    cartButton.onclick = function () {
        cart.classList.toggle("cart-active");
    };
};
