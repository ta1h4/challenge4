var url='https://api.quotable.io/random?minLength=100&maxLength=120';
function btn(){

    getir();
};


const getir=()=>{
    fetch(url)
        .then(gd=>{
            return gd.json();
        })
        .then(donen=(tt)=>{
            var metin=tt.content;
             document.getElementById("yazar").innerHTML=tt.author;
             document.getElementById("yazar2").innerHTML=tt.author;
             document.getElementById("contentyz").innerHTML=tt.content;
                çevir(metin);
                
          })
   
}



    btn();

    function kopyala(){
        var alan = document.getElementById("contentyz").innerHTML;
        var textAlani = document.createElement("TEXTAREA");
        textAlani.value = alan;
        document.body.appendChild(textAlani);
        textAlani.select();
        document.execCommand("copy");
        textAlani.style.display = "none";
        alert("Kopyalandı");
        }

  

    function çevir(aa){
        console.log(aa);
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '6761fa0cb2msh89506f58cf1398fp115a62jsnec87db76ed5a',
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            body: '{"q":"'+aa+'","source":"en","target":"tr"}'
        };
        
        fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(response =>{
                document.getElementById("contentyz2").innerHTML=response.data.translations.translatedText;

            }
            
            )
            .catch(err => console.error(err));
        }