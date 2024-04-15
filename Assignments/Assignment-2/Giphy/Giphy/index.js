const container = document.querySelector('.gifs');
let searchbox=document.getElementById('searchbox');

const apiKey = 'sn5SiZ85xMWAYLdOZ3M9kp4Cqfn8raPA';
const endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=50`;

function tranding(){
fetch(endpoint)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    data.data.forEach(gif => {
      let img = document.createElement('img');
      img.id='images';
      img.src = gif.images.original.url;
      img.alt = gif.title;
      container.appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error fetching GIFs:', error);
  });
}

tranding();

document.addEventListener('keydown',(e)=>{
  let keypressed=e.key;
  if(keypressed=="Enter"){
    let find=searchbox.value;
    if(find){
      console.log(find);
      const url=`http://api.giphy.com/v1/gifs/search?q=${find}&api_key=${apiKey}&limit=50`;
      try{
      fetch(url)
      .then(response=>response.json())
      .then(document.getElementById('result_type').innerHTML="Your Search",container.innerHTML="")
      .then(data=>{
        data.data.forEach(gif => {
          let img = document.createElement('img');
          img.id='images';
          img.src = gif.images.original.url;
          img.alt = gif.title;
          container.appendChild(img);
      })
    })
    document.getElementById('result_type').innerHTML="Your Search"
  }catch(e){
    alert('error while searching',find);
    console.log(e);
  }
  }
  else{
    console.log("Please search something");
  }
}
})
