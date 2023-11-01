import axios from 'axios';
import '../../index.css'
import { useEffect, useState } from 'react';

interface UniversityDetails {
  name: string;
  country: string;
  web_pages: string;
}

export function SearchBar() {
  const [country, setCountry] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState<string[]>([]);
  const [universitySuggestions, setUniversitySuggestions] = useState<string[]>(
    []
  );
  const [universityDetails, setUniversityDetails] =
    useState<UniversityDetails | null>(null);

    useEffect(() => {
      loadCountrySuggestions();
      loadUniversitySuggestions();
    }, []);

     const loadCountrySuggestions = async () => {
       const countrySuggestionsData = [
         "Brazil",
         "United States",
         "Canada",
         "India",
         "United Kingdom",
       ];
       setCountrySuggestions(countrySuggestionsData);
     };

     const loadUniversitySuggestions = async () => {
       const universitySuggestionsData = [
         "Harvard University",
         "Stanford University",
         "Massachusetts Institute of Technology",
         "University of Oxford",
         "Universidade de São Paulo",
         "University of British Columbia",
       ];
       setUniversitySuggestions(universitySuggestionsData);
     };


  const handleSearch = async function() {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?name=${universityName}&country=${country}`
      );
      const univesities: UniversityDetails[] = response.data;
      
      if (univesities.length > 0) {
        setUniversityDetails(univesities[0]);
      } else {
        setUniversityDetails(null);
      }

      console.log(univesities)
    } catch (error) {
      console.error("Request error!", error);
    }
  }

  console.log(universityDetails?.name)
  return (
    <section>
      <div className="flex items-center">
        <div className="flex space-x-1">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Country"
            list="country-suggestions"
          />
          <datalist id="country-suggestions">
            {countrySuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
          <input
            type="text"
            value={universityName}
            onChange={(e) => setUniversityName(e.target.value)}
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="University Name"
            list="university-suggestions"
          />
          <datalist id="university-suggestions">
            {universitySuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
          <button
            onClick={handleSearch}
            className="px-4 text-white bg-[#3f3cbb] rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        {universityDetails && (
          <div className="flex items-center flex-col bg-indigo-700 rounded p-5 text-white">
            <h2>University Details</h2>
            <p>Name: {universityDetails.name}</p>
            <p>Country: {universityDetails.country}</p>
            <a
              className="bg-white text-black font-bold py-2 px-4 rounded mt-2"
              href={universityDetails.web_pages}
            >
              Web site
            </a>
            {/* <img src={universityDetails.web_pages} alt="" /> */}
          </div>
        )}
      </div>
    </section>
  );
}