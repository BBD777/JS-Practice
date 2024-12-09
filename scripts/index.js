function subscribe(){
  const buttonElement = document.querySelector('.js-subscribe-button');
  if (buttonElement.innerText === 'Subscribe'){
    buttonElement.innerHTML='Subscribed';
    buttonElement.classList.add('is-subscribe');
  } else {
    buttonElement.innerHTML ='Subscribe';
    buttonElement.classList.remove('is-subscribe');
  }
}
function handleCostkeyDown(){
  console.log('typed');
  if (event.key ==='Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
 
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) ;
  if (cost < 40){
    cost = cost + 10;
    console.log(cost);
  }
  document.querySelector('.js-total-cost').innerHTML = `£${cost}`;
}