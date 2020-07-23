import React, { useState, useEffect } from 'react'

// import Reviews from "./Reviews"

const FlavorShow = (props) => {
    const [flavor, setFlavor] = useState(props)

    // debugger

     // hardcoded for this branch, needs to be updated once we have real props
    
    useEffect(() => {
      fetch("/api/v1/flavors")
        .then((response) => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw error;
          }
        })
        .then((response) => response.json())
        .then((body) => {
          body.map((flavor)=> {
              if (flavor.id == 1) {  // Will be updated to work dynamically
                setFlavor(flavor);
              }
          })
          
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`));
    }, []);

    return (
        <>
          <div>
            I'm a flavor show page.
            <h1>{flavor.name}</h1>
            <img src={flavor.image_url} alt="flavor picture" />
            <h4>{flavor.description}</h4>
          </div>
        </>
    )
}

export default FlavorShow
