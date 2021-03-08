const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});

// say hello function call
const button=document.querySelector('.call');
button.addEventListener('click',()=>{
 //get func reference
 const sayHello=firebase.functions().httpsCallable('sayHello');
 sayHello({name:'Hamza'}).then(result =>{
     console.log(result.data);
 });
});