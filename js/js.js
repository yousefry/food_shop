function $$(elm) {
    if (elm.substr(0, 1) == ".") {
        return document.getElementsByClassName(elm.split(".")[1]);
    } else if (elm.substr(0, 1) == "#") {
        return document.getElementById(elm.split("#")[1]);
    } else {
        return "undif class/id";
    }

}

$$('.details')[0].style.overflowY = "scroll";
$$('.details ')[0].style.height = screen.height - 150 + "px";

function overFlowBody() {
    document.body.classList.toggle("tog_overflow_body");
    $$('.overlay')[0].classList.toggle("show-overlay");
}

let cartUser = $$('.cartUser')[0];
let cart = $$('.cart')[0];
let closeSlider = document.querySelectorAll(".closeSlider");
if ($$('.cartUser').length > 0) {
    cartUser.addEventListener('click', () => {
        cart.classList.add("show-cart");
        overFlowBody();
    })
}
closeSlider.forEach(item => {
    item.addEventListener('click', ev => {
        ev.target.parentElement.parentElement.classList.remove("show-cart");
        ev.target.parentElement.parentElement.classList.remove("show-menu");
        overFlowBody();
    })
})


let menuMobile = $$('.menuMobile')[0];
let sliderMenuMobile = $$('.sliderMenuMobile')[0];
menuMobile.addEventListener('click', () => {
    sliderMenuMobile.classList.add("show-menu");
    overFlowBody();
})
let plus = document.querySelectorAll(".plu-count-food");
let minus = document.querySelectorAll(".minu-count-food");

plus.forEach(item => {
    item.addEventListener('click', evt => {
        let val = Number(evt.target.nextElementSibling.innerHTML);
        val++;
        evt.target.nextElementSibling.innerHTML = val.toString();
    })
})
minus.forEach(item => {
    item.addEventListener('click', evt => {
        let val = Number(evt.target.previousElementSibling.innerHTML);
        if (val != 0) {
            val--;
            evt.target.previousElementSibling.innerHTML = val.toString();
        }
    })
})
//     end  Cart Plus And Minus

//     Start  Modals
let btnModal = document.querySelectorAll(".btnModal");
let contentModal = document.querySelectorAll(".yrModal");
let closeModal = document.querySelectorAll(".closeModal");
btnModal.forEach(item => {
    item.addEventListener('click', evt => {
        contentModal.forEach(itemContent => {
            if (itemContent.dataset.modalContent == "modal-" + item.dataset.modal) {
                itemContent.style.display = "block";
                overFlowBody();
            }
        })
    })
})
closeModal.forEach(item => {
    item.addEventListener('click', evt => {
        item.parentElement.style.display = "none"
        overFlowBody();
    })
});
//     End  Modals

let enterMobileInput = document.querySelectorAll(".field-input.login");
enterMobileInput.forEach(item => {
    item.addEventListener('keyup', evt => {
        if (evt.target.value != "") {
            evt.target.classList.add("hasValue");
        } else {
            evt.target.classList.remove("hasValue");
        }
    })
});

//              Start Sticky Menu
document.addEventListener("scroll", function (ev) {
    if (window.pageYOffset > $$('.nav')[0].scrollHeight * 2) {
        $$('.nav')[0].style.position = "fixed";
        $$('.nav')[0].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        if ($$('.cart-user').length > 0)
            $$('.cart-user')[0].style.top = 70 + "px";
    } else {
        $$('.nav')[0].style.position = "absolute";
        $$('.nav')[0].style.backgroundColor = "inherit";
        if ($$('.cart-user').length > 0)
            $$('.cart-user')[0].style.top = 0 + "px";
    }
})

//              End Sticky Menu


//              Start DropDown Menu
let btnDropDown = document.querySelectorAll(".btn-dropDown");
btnDropDown.forEach(item => {
    item.addEventListener("click", evt => {
        if ((evt.target.nextElementSibling.className).indexOf("show") > -1) {
            evt.target.nextElementSibling.classList.remove('show');
        } else {
            closeDropDown(btnDropDown);
            evt.target.nextElementSibling.classList.add('show');
        }
        evt.target.children[0].classList.toggle("rotate180Deg");
    })
})

function closeDropDown(element) {
    element.forEach(elm => {
        elm.children[1].classList.remove("show");
        elm.children[0].children[0].classList.remove("rotate180Deg");
    })
}

//              End DropDown Menu

let deleteItemDefaultMenu = document.querySelectorAll(".option i.fa-trash");
deleteItemDefaultMenu.forEach(item => {
    item.addEventListener('click', evt => {
        evt.target.parentElement.parentElement.remove();
    })
})

let deleteItemListFood = document.querySelectorAll(".listFood .item .fa-trash-o");
deleteItemListFood.forEach(item => {
    item.addEventListener('click', evt => {
        evt.target.parentElement.remove();
    })
})


