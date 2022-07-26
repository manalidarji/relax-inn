import { useState, useEffect } from "react";
import BestSellerItem from './BestSellerItem';

const BestSellerLists = (props) => {
    // using state for all best seller properties lists
	let [bestSellerProps, setBestSellerProps] = useState([]);
    
	// get all properties
	useEffect( () => {
        // let bestSellers = [];
        let maxNoOfBestSellerProps = 4;
		const bestsellerPropsApiURL = `${process.env.REACT_APP_API_URI}/properties/bestseller?limit=${maxNoOfBestSellerProps}`;

		fetch(bestsellerPropsApiURL)
		.then( resp => resp.json())
		.then( data => setBestSellerProps(data))
		.catch( error => console.log(error));
	}, []);

    return(
		<div className='container divider'>
			<h5 className="section-title">Our Best Seller</h5>

            <div className="best-sellers-wrap">
                {bestSellerProps.map(singleProperty => (
                    <BestSellerItem                         
                        key={singleProperty.id} 
                        id={singleProperty.id} 
                        singleProp={singleProperty}
                    />
                ))}
            </div>

        </div>
    )
}

export default BestSellerLists;