

//  Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice


// if i just give image path , parcel doesn't understand ur path (Its over soomewhere) parcel got confused , give full address (NEW URL (import meta .url))
import React from "react";
import ReactDOM from "react-dom/client";

const LGSLogo = new URL("./assets/LGS.jpg", import.meta.url);
const UserIcon = new URL("./assets/user.webp", import.meta.url);

import { FaSearch } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <div className="container">
      <div className="nav">
        <ul className="unOrder">
          <li className="list1">
            <img src={LGSLogo} alt="LGS Logo" width="80em" />
          </li>
          <li className="list2">
             <div className="search-container">
                   <input type="text" className="searchBox" placeholder="Search..."  />
                   <FaSearch className = "search-icon"></FaSearch>
             </div>
            
          </li>
          <li className="list3">
            <img src={UserIcon} alt="User Icon" width="50em" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
