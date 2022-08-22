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
  document.getElementById('btn-jamie').addEventListener('click',function() {     
   const player1 = getInputValueById('player-jamie'); 
   const x =document.getElementById('btn-jamie');
   x.disabled = true ;})
   document.getElementById('btn-karim').addEventListener('click',function() {     
      const player1 = getInputValueById('player-karim'); 
      const x =document.getElementById('btn-karim');
      x.disabled = true ;})
      document.getElementById('btn-kyllian').addEventListener('click',function() {     
         const player1 = getInputValueById('player-kyllian'); 
         const x =document.getElementById('btn-kyllian');
         x.disabled = true ;})
         document.getElementById('btn-luis').addEventListener('click',function() {     
            const player1 = getInputValueById('player-luis'); 
            const x =document.getElementById('btn-luis');
            x.disabled = true ;})
            document.getElementById('btn-depay').addEventListener('click',function() {     
               const player1 = getInputValueById('player-depay'); 
               const x =document.getElementById('btn-depay');
               x.disabled = true ;})