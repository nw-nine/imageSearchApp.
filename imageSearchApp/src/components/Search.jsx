import React, {useState} from "react";
import Unsplash, {toJson} from "unsplash-js"

const unsplash = new Unsplash({
    accessKey: "qfDPiUNgmA5V1rFoJ3rZMe4RYVeIYpIgtBf1_av1beo"
})

function Search() {

    const [query, setQuery] = useState("")
    const [pics, setPics] = useState([])

    const searchP = async(event) => {
        event.preventDefault()
        //console.log("submitting request");
        unsplash.search
        .photos(query)
        .then(toJson)
        .then((json) => {
            console.log(json);
            console.log("@@", json.results);
            setPics(json.results)
            console.log(pics);
        })
    }

    return (
        <div>
            <form className="form" onSubmit={searchP}>
                <label
                 htmlFor="query"
                 className="label">
                 </label>
                 <input
                  type="text"
                  name="query"
                  className="input"
                  placeholder={`Try "sunset" or "France"`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {pics.map(pic => <div className="card" key={pic.id}>
                    <img
                    src={pic.urls.full}
                    alt={pic.alt_description} 
                    className="card-image"
                    width="50%"
                    height="50%">
                    </img>
                </div>)}
            </div>
        </div>
    )
}

export default Search