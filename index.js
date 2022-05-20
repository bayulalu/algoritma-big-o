const nemo = ['nemo', 'koko'];

function findNemo(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] == 'nemo'){
      console.log('Found Nemo');
    }
  }
}

findNemo(nemo);