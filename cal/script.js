const inputBill = document.getElementById('bill');
const tipBtns = document.getElementsByClassName('btn');
const inputCustomTip = document.getElementById('custom');
const inputPeopleCount = document.getElementById('people');
const tipAmountPerPerson = document.getElementById('tip-amount');
const totalAmountPerPerson = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset');
let content3 = 0;
for (let btn of tipBtns) {      //for of  
   btn.addEventListener('click', function () {
    content3 = Number.parseInt(btn.textContent);
    for(let i=0;i<=tipBtns.length-1;i++)
    {
      tipBtns[i].style.background='hsl(183, 100%, 15%)';
    }
    btn.style.background='hsl(172, 67%, 45%)';

  });
}

inputPeopleCount.addEventListener('input', function () {  
  if (+inputPeopleCount.value === 0) {
    tipAmountPerPerson.textContent = `$0.00`;
    totalAmountPerPerson.textContent = `$0.00`;

    resetBtn.setAttribute('disabled', true);
    resetBtn.style.background = 'hsl(183, 64%, 25%)';
  } else {

    if (inputCustomTip.value !== '') {
      content3 = +inputCustomTip.value;
    }

    const billAmount = +inputBill.value;
    const peopleCount = +inputPeopleCount.value;

    const tip = (billAmount * content3) / 100;
    const total = billAmount + tip;

    tipAmountPerPerson.textContent = `$${(tip / peopleCount).toFixed(2)}`;
    totalAmountPerPerson.textContent = `$${(total / peopleCount).toFixed(2)}`;

    resetBtn.removeAttribute('disabled');
    resetBtn.style.background = 'hsl(172, 67%, 45%)';
  }
});

resetBtn.addEventListener('click', function () {
  inputBill.value ='';
   inputCustomTip.value = '';
   inputPeopleCount.value = '';
  tipAmountPerPerson.textContent ='$0.00';
 totalAmountPerPerson.textContent = '$0.00';
  content3 = 0;
  resetBtn.setAttribute('disabled', true);
  resetBtn.style.background = 'hsl(183, 64%, 25%)';
  for(let i=0;i<=tipBtns.length-1;i++)
    {
      tipBtns[i].style.background='hsl(183, 100%, 15%)';
    }
});
let toggle_bar = document.querySelector(".nav-header");

let sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", function(){
    if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
    }
    else
    {
        toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
    }
   sidebar.classList.toggle("sidebaractive")
})