import { Search } from "lucide-react";

function NavigationSearch() {
  return (
    <div className="search-wrapper">
      <div className="search-holder">
        <div className="input-wrapper">
          <div className="search-bar">
            <span class="search-icon">
              {" "}
              <Search color="rgb(189, 189, 189)" size={20} strokeWidth={1} />
            </span>
            <input
              className=" search-input"
              type="text"
              name="search"
              aria-label="Search"
              placeholder="Search Papercard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationSearch;
