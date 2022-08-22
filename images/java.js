// document.getElementById('btn-dusan').addEventListener('click',function() {
//     const playerDusan = document.getElementById('player-dusan');
//     const playerDusanValue = playerDusan.innerText ;
//     const parentNode = document.getElementById('select-five');
//     const li =document.createElement('li');
//     li.innerText = 'tania' ;
//     parentNode.appendChild(li);

//  })
//  const parentNode = document.getElementById('select-five');
//     const li =document.createElement('li');
//     li.innerText = 'tania' ;
//     parentNode.appendChild(li);
    function getInputValueById(InputId){
      const player = document.getElementById(InputId);
          const playerValue = player.innerText ;
          const parentNode = document.getElementById('select-five');
          const li =document.createElement('li');
          li.innerText = playerValue ;
       return   parentNode.appendChild(li);
         
  }
  
      
  document.getElementById('btn-dusan').addEventListener('click',function() {     
  const player1 = getInputValueById('player-dusan'); 
  const x =document.getElementById('btn-dusan');
  x.disabled = true ;})
