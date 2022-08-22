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
          return   parentNode.appendChild(li);}
         //  function getElementById(){const parentNode = document.getElementById('select-five');
         //  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-dusan').disabled =false );
         //  return}};
         //  function getElementValueById(){const parentNode = document.getElementById('select-five');
         //  parentNode.removeChild(parentNode.lastElementChild);return};
          
    document.getElementById('btn-dusan').addEventListener('click',function() {     
  const player1 = getInputValueById('player-dusan');
  const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-dusan').disabled =false )}
else{document.getElementById('btn-dusan').disabled=true;
}

})
  document.getElementById('btn-jamie').addEventListener('click',function() {     
   const player1 = getInputValueById('player-jamie');
   const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-jamie').disabled =false )}
else{document.getElementById('btn-jamie').disabled=true;
}
})
   document.getElementById('btn-karim').addEventListener('click',function() {     
      const player1 = getInputValueById('player-karim'); 
      const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-karim').disabled =false )}
else{document.getElementById('btn-karim').disabled=true;
}
})
      document.getElementById('btn-kyllian').addEventListener('click',function() {     
         const player1 = getInputValueById('player-kyllian'); 
         const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-kyllian').disabled =false )}
else{document.getElementById('btn-kyllian').disabled=true;
}

         })
         document.getElementById('btn-luis').addEventListener('click',function() {     
            const player1 = getInputValueById('player-luis'); 
            const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-luis').disabled =false )}
else{document.getElementById('btn-luis').disabled=true;
}
})
            document.getElementById('btn-depay').addEventListener('click',function() {     
               const player1 = getInputValueById('player-depay'); 
               const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild))
    && (document.getElementById('btn-depay').disabled =false )}
else{(document.getElementById('btn-depay').disabled=true) 
}
})
               // const remove = getElementValueById;