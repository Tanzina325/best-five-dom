
    function getElementValueById(ElementId){
      const player = document.getElementById(ElementId);
          const playerValue = player.innerText ;
          const parentNode = document.getElementById('select-five');
          const li =document.createElement('li');
          li.innerText = playerValue ;
          return   parentNode.appendChild(li);}
          
          
    document.getElementById('btn-dusan').addEventListener('click',function() {     
  const player1 = getElementValueById('player-dusan');
  const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-dusan').disabled =false )}
else{document.getElementById('btn-dusan').disabled=true;
}})
  document.getElementById('btn-jamie').addEventListener('click',function() {     
   const player2 = getElementValueById('player-jamie');
   const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-jamie').disabled =false )}
else{document.getElementById('btn-jamie').disabled=true;
}
})
   document.getElementById('btn-karim').addEventListener('click',function() {     
      const player3 = getElementValueById('player-karim'); 
      const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-karim').disabled =false )}
else{document.getElementById('btn-karim').disabled=true;
}
})
      document.getElementById('btn-kyllian').addEventListener('click',function() {     
         const player4 = getElementValueById('player-kyllian'); 
         const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-kyllian').disabled =false )}
else{document.getElementById('btn-kyllian').disabled=true;
}})
         document.getElementById('btn-luis').addEventListener('click',function() {     
            const player5 = getElementValueById('player-luis'); 
            const parentNode = document.getElementById('select-five');
  if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-luis').disabled =false )}
else{document.getElementById('btn-luis').disabled=true;
}
})
            document.getElementById('btn-depay').addEventListener('click',function() {     
               const player6 = getElementValueById('player-depay');
               const parentNode = document.getElementById('select-five');
               if(parentNode.childNodes.length>5){(parentNode.removeChild(parentNode.lastElementChild)) && (document.getElementById('btn-depay').disabled =false )}
               else{document.getElementById('btn-depay').disabled=true;
               }
})

       function playerTotal() {
        const parentNode = document.querySelectorAll('li');
    
        const parentNodeLengthString = parentNode.length;
        const parentNodeLength = parseFloat(parentNodeLengthString);
        return parentNodeLength ;}
       function setElementValueById(elementId , newValue){
        const element = document.getElementById(elementId) ;
    
        element.innerText = newValue ;}
        
       document.getElementById('btn-calculate').addEventListener('click',function() {
        const parentNodeLengths = playerTotal()
         const perPlayerCost = document.getElementById('player-input')
         const playerCostString = perPlayerCost.value ;
      const playerCostNumber = parseFloat(playerCostString);
      
         const playerCost = playerCostNumber * parentNodeLengths
      const expense = document.getElementById('expenses');
      setElementValueById('expenses' , playerCost)
   })
   document.getElementById('btn-total').addEventListener('click',function() {
    const managerCost = document.getElementById('manager-input')
         const managerCostString = managerCost.value ;
      const managerCostNumber = parseFloat(managerCostString);
      
      const coachCost = document.getElementById('coach-input')
      const coachCostString = coachCost.value ;
   const coachCostNumber = parseFloat(coachCostString);
   
    const expense = document.getElementById('expenses');
    const expenseValueString = expense.innerText;
    const expenseValue = parseFloat(expenseValueString);
    const totalCost = managerCostNumber + coachCostNumber + expenseValue;
    document.getElementById('total-expenses');
      setElementValueById('total-expenses' , totalCost)})
       
