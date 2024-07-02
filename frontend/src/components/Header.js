// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Blog Articles</h1>
//       <nav>
//         <ul>
//           <li><a href="#welcome">Welcome</a></li>
//           <li><a href="#info">About</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React JS</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
