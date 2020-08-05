    const dogContainer = document.querySelector('#dog-image-container');
    const dogBreedList = document.querySelector('#dog-breeds');
    let allBreeds = [];

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(data => {
            data.message.forEach(dogUrl => {
                createNewImg(dogUrl)
             })
        }); 
    
    function createNewImg(dogUrl){
       
        let img = document.createElement('img')
        img.src = dogUrl
        dogContainer.appendChild(img)   
  }

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(breedData => {
    for (const breed in breedData.message){
        // for(let i < 0; i < breed.length;);
        if (breedData.message[breed].length > 0){
         breedData.message[breed].forEach(subBreed =>{
             allBreeds.push(`${subBreed} ${breed}`)
            })
            }  
            else{ 
                allBreeds.push(breed)
            }}

            createLi(allBreeds)
       })
 
       function createLi (allBreeds){
           allBreeds.forEach( dog => {
               let newli = document.createElement('li')
                newli.innerText = dog
                dogBreedList.append(newli)
                
                newli.addEventListener('mouseover', function(){
                    newli.style.color = 'blue'
                })
                })
       }

       const dropdown = document.querySelector("#breed-dropdown")

       dropdown.addEventListener('change', function(evt){

        let letter = evt.target.value
        let result = allBreeds.filter(breed => breed[0] === letter);
            dogBreedList.innerText = ""
            createLi(result)
       })