
let plandetailscart=[]
let planDetail = '';
let planDetail1='';
let planDetail2='';
let planDetail3='';

document.getElementById("Vieworderdetails1").addEventListener('click',submitplan1);
document.getElementById("Vieworderdetails2").addEventListener('click',submitplan2);
document.getElementById("Vieworderdetails3").addEventListener('click',submitplan3);
document.getElementById("addToCartButton1").addEventListener('click',addtocart1);
document.getElementById("addToCartButton2").addEventListener('click',addtocart2);
document.getElementById("addToCartButton3").addEventListener('click',addtocart3);
document.getElementById("openCart").addEventListener('click', openCart);

function formatNumber(number, locale = 'en-US') {
    return new Intl.NumberFormat(locale).format(number);
}

function submitplan1(){
    let servicetype1=document.getElementsByClassName("modalBusAutoc")[0];
    
    let servicetypea=servicetype1.textContent


    if (servicetypea==="Business Process Automation"){ 
        let selectedplan=document.querySelector('input[name="plan"]:checked').value;
        let qty=document.getElementById("quantityBusAuto").value;
        let prices = {
        'Basic Plan': 100,
        'Standard Plan': 250,
        'Premium Plan': 500}
        let totalprice=formatNumber(prices[selectedplan]*qty);

        document.getElementById("price1").innerHTML=`<span class="highlight">${totalprice}$</span>`
    
        planDetail = `Your <span class="highlight">${selectedplan}</span> plan for <span class="highlight">${prices[selectedplan]}$</span> a month for a total period of <span class="highlight">${qty}</span> months is ready to be added to cart`;
        document.getElementById("plan1").innerHTML = planDetail;
        planDetail1 = `- Your ${selectedplan} for ${servicetypea} ,${prices[selectedplan]}$/month for a total period of ${qty}months`;

    }
    else{
        alert('invalid error') 
       }
}

function submitplan2(){
    let servicetype2=document.getElementsByClassName("modaldigitransc")[0];
    let servicetypeb=servicetype2.textContent

    if(servicetypeb==="Digital Transformation"){
        let selectedplan=document.querySelector('input[name="plan"]:checked').value;
        let qty=document.getElementById("quantityDigiTrans").value;
        let prices = {
            'Basic Plan': 200,
            'Standard Plan': 400,
            'Premium Plan': 800}
        let totalprice=formatNumber(prices[selectedplan]*qty);

        document.getElementById("price2").innerHTML=`<span class="highlight">${totalprice}$</span>`
    
        planDetail = `Your <span class="highlight">${selectedplan}</span> plan for <span class="highlight">${prices[selectedplan]}$</span> a month for a total period of <span class="highlight">${qty}</span> months is ready to be added to cart`;
        document.getElementById("plan2").innerHTML = planDetail;
        planDetail2 = `- Your ${selectedplan} for ${servicetypeb} ,${prices[selectedplan]}$/month for a total period of ${qty} months`;
    }
    else{
        alert('invalid error') 
       }
}

function submitplan3(){
    let servicetype3=document.getElementsByClassName("modalCustc")[0];
    
    let servicetypec=servicetype3.textContent


    if(servicetypec==="Custom Software Development"){
        let selectedplan=document.querySelector('input[name="plan"]:checked').value;
        let qty=document.getElementById("quantityCSD").value;
        let prices = {
            'Basic Plan': 300,
            'Standard Plan': 600,
            'Premium Plan': 1200}
        let totalprice=formatNumber(prices[selectedplan]*qty);

        document.getElementById("price3").innerHTML=`<span class="highlight">${totalprice}$</span>`
    
        planDetail = `Your <span class="highlight">${selectedplan}</span> plan for <span class="highlight">${prices[selectedplan]}$</span> a month for a total period of <span class="highlight">${qty}</span> months is ready to be added to cart`;
        document.getElementById("plan3").innerHTML = planDetail;
        planDetail3 = `- Your ${selectedplan} for ${servicetypec} ,${prices[selectedplan]}$/month for a total period of ${qty} months`;
    }
    else{
        alert('invalid error') 
       }
}


function addtocart1() {
    plandetailscart.push(planDetail1);
    updateCartModal();
    alert('Added to cart')
}

function addtocart2() {
    plandetailscart.push(planDetail2);
    updateCartModal();
    alert('Added to cart')
}


function addtocart3() {
    plandetailscart.push(planDetail3);
    updateCartModal();
    alert('Added to cart')
}


function updateCartModal() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = '';


    plandetailscart.forEach(item => {
        // Create a new <p> element for each cart item
        const listItem = document.createElement('li');
        listItem.innerHTML = item;

        // Append the new element to the cartItems container
        cartItems.appendChild(listItem);
    });

    
}


function openCart() {
    document.getElementById("cartModal").style.display = "block";
}

// Close the modal when clicking on <span> (x)
document.querySelector(".close").onclick = function() {
    document.getElementById("cartModal").style.display = "none";
}

// Close the modal when clicking anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === document.getElementById("cartModal")) {
        document.getElementById("cartModal").style.display = "none";
    }
}