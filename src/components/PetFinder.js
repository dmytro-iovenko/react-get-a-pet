import Loading from "./petfinder/Loading";
import PetInfo from "./petfinder/PetInfo";
import SearchBar from "./petfinder/SearchBar";
import SearchResult from "./petfinder/SearchResult";

function PetFinder() {
    return (
        <>
            <SearchBar />
            <SearchResult />
            <PetInfo />
            <Loading />
        </>
    );
}

export default PetFinder;