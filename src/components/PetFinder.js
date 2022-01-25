import Loading from "./petfinder/Loading";
import AnimalInfo from "./petfinder/AnimalInfo";
import SearchBar from "./petfinder/SearchBar";
import SearchResult from "./petfinder/SearchResult";

function PetFinder() {
    return (
        <>
            <SearchBar />
            <SearchResult />
            <AnimalInfo />
            <Loading />
        </>
    );
}

export default PetFinder;