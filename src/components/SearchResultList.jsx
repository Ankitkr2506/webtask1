import react from "react";
import "./SearchResultList.css"
export const SearchResultList = ({results}) => {
    return (
         <div classname="results-List">
        {
            results.map((result, id) => {
               return <SearchResult result={result} key={id}/> ;
            })
        }
    </div>
    );
};