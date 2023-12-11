// import React from 'react';
// import { Link } from '@remix-run/react';
// import * as styles from './styles.css';
// import Logo from './Logo/logo.png';

// const LandingPage: React.FC = () => {
//   return (
//     <div className={styles.landingPage}>
//       <div className={styles.navbar}>
//         <div className={styles.navigationContainer}>
//           <img className={styles.logo} src={Logo} alt='Logo' />
//           <div className={styles.navLinks}>
//             <div>Docs</div>
//             <div>Components</div>
//             <div>Feedback</div>
//           </div>
//           <div className={styles.searchContainer}>
//             <input type="text" placeholder="Search.." className={styles.searchInput} />
//           </div>
//         </div>
//       </div>
//       <div className={styles.contentContainer}>
//         <div className={styles.contentH1}>
//           <h1>Elevate your project development</h1>
//           <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             with&nbsp;<span style={{ color: '#308BDE' }}>Easy to use</span>
//           </h1>
//         </div>
//         <p className={styles.contentPara}>
//           Don't waste any more time struggling with UI coding. Try out our library and
//         </p>
//         <p className={styles.contentPara}>
//           experience the power of fast, effective development for yourself.
//         </p>
//         <div className={styles.exploreButton}>
//           <button className={styles.exploreButtonInner}>Explore</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import HomePage from './Components/HomePage';
import { Button } from '@hover-design/react';

const LandingPage: React.FC = () => {
  return (
    <>
     <HomePage />
    </>
  );
}
export default LandingPage;







