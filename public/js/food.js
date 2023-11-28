// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

window.onload = () => {
    if(sessionStorage.name){
        location.href = '/';
    }
}

// form validation
const category = document.querySelector('.foodCategory');
const name = document.querySelector('.FoodName');
const qty = document.querySelector('.Quantity');
const qty_type = document.querySelector('.QuantityType');
const zip = document.querySelector('.Zipcode');
const phone = document.querySelector('.PhoneNumber');
const comment = document.querySelector('.Message') || null;
const submitBtn = document.querySelector('.submit-btn');


    submitBtn.addEventListener('click', () => {
        console.log ("I am here")
        fetch('http://127.0.0.1:3000/post-food',{
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                category: category.value,
                name: name.value,
                qty: qty.value,
                qty_type: qty_type.value,
                zip: zip.value,
                phone: phone.value,
                comments: comment.value
            })
        })
        .then(res => res.json())
        })

const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}