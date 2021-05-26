// Code your solutions in this file
function writeCards(array, eventName){ 
    let messages = []
    for (let i= 0; i < array.length; i++){
        messages.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }