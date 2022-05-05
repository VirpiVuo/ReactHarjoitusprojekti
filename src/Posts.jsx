import './App.css';
import React, {useState, useEffect} from 'react';

//useEffect- hook tulee ajetuksi aina kerran silloin kun komponentti latautuu


const Posts = () => {
 
//komponentin tilan määritys
const [posts, setPosts] = useState([])
//aluksi määritellään tila tyhjäksi taulukoksi []
// http-pyynnöllä haetaan data ja setPosts-komennolla asetetaan data posts-tilaan

const [showPosts, setShowPosts] = useState(false)

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") 
    // hakee datan mutta ei vielä tee sille mitään
    .then(res => res.json())
    //aliasoidaan haettu data jollekin nimelle (res) ja sen jälkeen muutetaan res.json -komennolla tullut
    //json-data javascript-dataksi
    .then(oliot => setPosts(oliot))
    //aliasoidaan javascript-data jollekin nimelle (oliot) ja tuodaan ne aiemmin määriteltyyn posts- tilaan
}
,[]
)
//kaksi parametria jotka erotellaan pilkulla
//ensimmäinen parametri on nuolifunktio joka ei saa mitään parametria mutta tekee fetch-komennon 
//(hakee dataa ilman kirjastoa) aaltosulkeiden sisällä
//jälkimmäinen tyhjä taulukko (voisi olla erilaisia stateja lueteltuna pilkkuerotuksella)

// console.log(posts) <- tällä voisi tarkistaa että saa datan näkymään consolessa staten kautta

  return (
    <>

    <h2 id="otsikot" onClick={() => setShowPosts(!showPosts)}>Posts from typicode<br></br>(Click to show or hide posts)</h2>

    {
      showPosts && posts && posts.map(p => 
        <div className='posts' key={p.id}>
        <h5>Post number {p.id}</h5><h3>{p.title}</h3><p>{p.body}</p>
        </div>
        )
      //jos posts stateen on ehtinyt tulla jotain tietoa eli ei ole undifined niin mapataan postaukset
      //map-funktiolla loopataan läpi taulukollinen olioita
      //suluissa aliasoidaan yksittäinen posts-olio jollekin nimelle ja sitten määritetään mitä kullekin tehdään
      
    }
     
    </>
  );
}

export default Posts;