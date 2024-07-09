import React from 'react';
const CustomSidebar = () => {
    return (<ul>
      <li>
        <a className="sc-dmqHEX sc-eZYOHW hcRTCv fermcI adminjs_Box">
          <span className="sc-dmqHEX kTAUKl icon-box">
            <span className="sc-kFuwaP liozjr adminjs_Icon" color="inherit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                <rect x="1" y="3" width="22" height="5"></rect>
                <line x1="10" y1="12" x2="14" y2="12"></line>
              </svg>
            </span>
          </span>
          <span className="sc-dmqHEX kTAUKl arrow-box">
            <span className="sc-kFuwaP liozjr adminjs_Icon" color="inherit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </span>
        </a>
        <ul>
          <li>
            <a href="/admin/resources/coupons" className="sc-dmqHEX sc-eZYOHW hcRTCv fermcI adminjs_Box">
              <div className="sc-iCmkLe hdeNhd" style={{ whiteSpace: 'normal' }}>Coupons</div>
            </a>
          </li>
          <li>
            <a href="/admin/resources/SubscriptionPlatforms" className="sc-dmqHEX sc-eZYOHW hcRTCv fermcI adminjs_Box">
              <div className="sc-iCmkLe hdeNhd" style={{ whiteSpace: 'normal' }}>Subscription Platforms</div>
            </a>
          </li>
          <li>
            <a href="/admin/resources/advertisements" className="sc-dmqHEX sc-eZYOHW hcRTCv fermcI adminjs_Box">
              <div className="sc-iCmkLe hdeNhd" style={{ whiteSpace: 'normal' }}>Advertisements</div>
            </a>
          </li>
          <li>
            <a href="/admin/resources/brands" className="sc-dmqHEX sc-eZYOHW hcRTCv hJUERu adminjs_Box">
              <div className="sc-iCmkLe hdeNhd" style={{ whiteSpace: 'normal' }}>Brands</div>
            </a>
          </li>
        </ul>
      </li>
    </ul>);
};
export default CustomSidebar;
