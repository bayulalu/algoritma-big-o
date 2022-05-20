const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'gandi', 'gana', 'hack', 'helooo', 'emo', 'nemo'];

const large = new Array(100).fill('nemo')

function findNemo(array){
  let t0 = performance.now();
  
  for(let i = 0; i < array.length; i++){  
    if(array[i] == 'nemo'){
      console.log('Found Nemo');
    }
  }

  let t1 = performance.now();

  console.log('call to find Nemo took ' + (t1-t0) + ' miliseconds');
}
// console.log(large)
findNemo(large);