
    function getElementValueById(ElementId){
      const player = document.getElementById(ElementId);
          const playerValue = player.innerText ;
          const parentNode = document.getElementById('select-five')
          const li =document.createElement('li');
          li.innerText = playerValue ;
 return  parentNode.appendChild(li); }
          
          
    document.getElementById('btn-dusan').addEventListener('click',function() {     
      const parentNodes = document.querySelectorAll('li');
    const parentNodesLength = parentNodes.length;;
        if(parentNodesLength<5){const player = getElementValueById('player-dusan')}
        else
        {alert('cannot take more than five player')}
     
document.getElementById('btn-dusan').disabled=true;
})
  document.getElementById('btn-jamie').addEventListener('click',function() {     
   const parentNodes = document.querySelectorAll('li');
    const parentNodesLength = parentNodes.length;;
        if(parentNodesLength<5){const player = getElementValueById('player-jamie')}
        else
        {alert('cannot take more than five player')}

document.getElementById('btn-jamie').disabled=true;
})
   document.getElementById('btn-karim').addEventListener('click',function() { 
      const parentNodes = document.querySelectorAll('li');
    const parentNodesLength = parentNodes.length;;
        if(parentNodesLength<5){const player = getElementValueById('player-karim')}
        else
        {alert('cannot take more than five player')}    
      
document.getElementById('btn-karim').disabled=true;
})
      document.getElementById('btn-kyllian').addEventListener('click',function() { 
         const parentNodes = document.querySelectorAll('li');
    const parentNodesLength= parentNodes.length;;
        if(parentNodesLength<5){const player = getElementValueById('player-kyllian')}
        else
        {alert('cannot take more than five player')}    
        
document.getElementById('btn-kyllian').disabled=true;
})
         document.getElementById('btn-luis').addEventListener('click',function() { 
            const parentNodes = document.querySelectorAll('li');
    const parentNodesLength = parentNodes.length;;
        if(parentNodesLength<5){const player = getElementValueById('player-luis')}
        else
        {alert('cannot take more than five player')}    
            
document.getElementById('btn-luis').disabled=true;
})
            document.getElementById('btn-depay').addEventListener('click',function() { 
               const parentNodes = document.querySelectorAll('li');
    const parentNodesLength = parentNodes.length;;
        if(parentNodesLength<5){const player = getElementValueById('player-depay')}
        else
        {alert('cannot take more than five player')}    
               
               document.getElementById('btn-depay').disabled=true;
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
       
