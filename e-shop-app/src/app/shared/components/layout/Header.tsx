

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="section-header">
          <div className="header-inner">
            <a href="index.html" className="header-brand">
              <h1 className="brand">
                <div className="image-logo">
                  <svg width={139} height={35} viewBox="0 0 139 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.5596 11.7212H67.3232V14.625H73.9658V17H67.3232V20.5161H74.8936V22.9746H64.5308V9.2998H74.5596V11.7212ZM76.1089 16.4248H81.4341V18.9297H76.1089V16.4248ZM85.5161 18.7534C85.6027 19.3781 85.7728 19.8451 86.0264 20.1543C86.4902 20.7171 87.285 20.9985 88.4106 20.9985C89.0848 20.9985 89.6322 20.9243 90.0527 20.7759C90.8506 20.4914 91.2495 19.9626 91.2495 19.1895C91.2495 18.738 91.0516 18.3885 90.6558 18.1411C90.2599 17.8999 89.6383 17.6865 88.791 17.501L87.3438 17.1763C85.9212 16.8547 84.9378 16.5052 84.3936 16.1279C83.472 15.4971 83.0112 14.5106 83.0112 13.1685C83.0112 11.9438 83.4565 10.9264 84.3472 10.1162C85.2378 9.30599 86.5459 8.90088 88.2715 8.90088C89.7126 8.90088 90.9403 9.28434 91.9546 10.0513C92.9751 10.812 93.5101 11.9191 93.5596 13.3726H90.8135C90.764 12.55 90.4053 11.9655 89.7373 11.6191C89.292 11.3903 88.7384 11.2759 88.0767 11.2759C87.3407 11.2759 86.7531 11.4243 86.314 11.7212C85.8748 12.0181 85.6553 12.4325 85.6553 12.9644C85.6553 13.453 85.8717 13.8179 86.3047 14.0591C86.583 14.2199 87.1768 14.4085 88.0859 14.625L90.4424 15.1909C91.4753 15.4383 92.2546 15.7692 92.7803 16.1836C93.5967 16.8268 94.0049 17.7576 94.0049 18.9761C94.0049 20.2254 93.5256 21.2645 92.5669 22.0933C91.6144 22.9159 90.2661 23.3271 88.522 23.3271C86.7407 23.3271 85.3398 22.922 84.3193 22.1118C83.2988 21.2954 82.7886 20.1759 82.7886 18.7534H85.5161ZM101.482 12.6025C102.107 12.6025 102.673 12.7108 103.18 12.9272C103.694 13.1437 104.114 13.4746 104.442 13.9199C104.72 14.2972 104.89 14.6868 104.952 15.0889C105.014 15.4847 105.045 16.1341 105.045 17.0371V22.9746H102.345V16.8237C102.345 16.2795 102.252 15.8403 102.067 15.5063C101.826 15.0363 101.368 14.8013 100.694 14.8013C99.995 14.8013 99.4631 15.0363 99.0981 15.5063C98.7394 15.9702 98.5601 16.6351 98.5601 17.501V22.9746H95.9253V9.34619H98.5601V14.1797C98.9435 13.5921 99.3857 13.1839 99.8867 12.9551C100.394 12.7201 100.926 12.6025 101.482 12.6025ZM112.059 21.1099C112.832 21.1099 113.425 20.8346 113.84 20.2842C114.254 19.7337 114.461 18.9513 114.461 17.937C114.461 16.9227 114.254 16.1434 113.84 15.5991C113.425 15.0487 112.832 14.7734 112.059 14.7734C111.285 14.7734 110.689 15.0487 110.268 15.5991C109.854 16.1434 109.646 16.9227 109.646 17.937C109.646 18.9513 109.854 19.7337 110.268 20.2842C110.689 20.8346 111.285 21.1099 112.059 21.1099ZM117.235 17.937C117.235 19.4214 116.809 20.6924 115.955 21.75C115.102 22.8014 113.806 23.3271 112.068 23.3271C110.33 23.3271 109.034 22.8014 108.181 21.75C107.327 20.6924 106.9 19.4214 106.9 17.937C106.9 16.4774 107.327 15.2126 108.181 14.1426C109.034 13.0726 110.33 12.5376 112.068 12.5376C113.806 12.5376 115.102 13.0726 115.955 14.1426C116.809 15.2126 117.235 16.4774 117.235 17.937ZM126.104 17.9185C126.104 17.1392 125.925 16.4495 125.566 15.8496C125.214 15.2497 124.639 14.9497 123.841 14.9497C122.882 14.9497 122.223 15.4043 121.865 16.3135C121.679 16.7959 121.586 17.4082 121.586 18.1504C121.586 19.3255 121.899 20.1512 122.523 20.6274C122.895 20.9058 123.334 21.0449 123.841 21.0449C124.577 21.0449 125.137 20.7604 125.52 20.1914C125.91 19.6224 126.104 18.8647 126.104 17.9185ZM124.602 12.6396C125.783 12.6396 126.782 13.0757 127.598 13.9478C128.421 14.8198 128.832 16.1001 128.832 17.7886C128.832 19.5698 128.43 20.9274 127.626 21.8613C126.828 22.7952 125.798 23.2622 124.537 23.2622C123.733 23.2622 123.065 23.0612 122.533 22.6592C122.242 22.4365 121.958 22.1118 121.679 21.6851V26.9546H119.063V12.8623H121.596V14.356C121.88 13.9168 122.183 13.5705 122.505 13.3169C123.092 12.8654 123.791 12.6396 124.602 12.6396Z" fill="white" />
                    <path d="M19.4211 34.8203C19.1691 34.8293 18.9208 34.751 18.711 34.5963C18.5013 34.4417 18.3405 34.2184 18.2511 33.9578L15.3171 25.4457H2.421C2.10292 25.4457 1.78796 25.3764 1.49411 25.2418C1.20027 25.1072 0.933288 24.9099 0.708454 24.6612C0.48362 24.4124 0.305335 24.1172 0.183774 23.7923C0.0622137 23.4673 -0.000235823 23.1191 6.69174e-07 22.7675V2.67818C-0.000119585 2.32577 0.0627081 1.97682 0.184873 1.65131C0.307038 1.3258 0.48615 1.03014 0.711915 0.781322C0.937679 0.5325 1.20565 0.335383 1.50049 0.201308C1.79532 0.0672322 2.11121 -0.00116368 2.43001 1.4978e-05H19.3887C19.6186 4.3594e-06 19.8438 0.072296 20.0379 0.208473C20.232 0.34465 20.387 0.539099 20.4849 0.769056L24.1479 9.37464H38.7747C39.0928 9.37464 39.4077 9.44393 39.7016 9.57854C39.9954 9.71316 40.2624 9.91045 40.4873 10.1592C40.7121 10.4079 40.8904 10.7031 41.0119 11.0281C41.1335 11.353 41.1959 11.7012 41.1957 12.0528V32.1411C41.1958 32.4936 41.133 32.8425 41.0108 33.168C40.8887 33.4936 40.7096 33.7892 40.4838 34.038C40.258 34.2868 39.9901 34.4839 39.6952 34.618C39.4004 34.7521 39.0845 34.8205 38.7657 34.8193L19.4211 34.8203ZM18.6156 2.67818H2.43001C2.43001 2.67818 2.43001 9.37464 2.43001 22.7665H27.1746L18.6156 2.67818ZM25.2846 12.0528L30.1734 23.5356C30.2854 23.7988 30.3168 24.0951 30.2629 24.3798C30.2089 24.6644 30.0727 24.922 29.8746 25.1134L22.6089 32.1411H38.7657C38.7657 32.1411 38.7657 25.4447 38.7657 12.0528H25.2846ZM19.8972 31.205L25.8525 25.4447H17.91L19.8972 31.205Z" fill="white" />
                  </svg>
                </div>
              </h1>
            </a>
            <nav className="header-nav">
              <ul className="menu sub-menu-list">
                <li className="sub-menu-item">
                  <a className="sub-menu-link text-primary" href="#">Men</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link text-primary" href="#">Women</a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link text-primary" href="#">Kids</a>
                </li>
              </ul>
            </nav>
            <ul className="menu action-list">
              <li className="action-item">
                <a className="action-link" href="">
                  <i className="fa fa-search" />
                </a>
              </li>
              <li className="action-item">
                <a className="action-link" href="./cart.html">
                  <i className="fa fa-shopping-cart" />
                  <span className="total-cart" />
                </a>
              </li>
              <li className="action-item">
                <a className="action-link" href="#">
                  <i className="fa fa-user-o" />
                </a>
              </li>
            </ul>
            <div className="action-hamburger">
              <ul className="menu action-list">
                <li className="action-item">
                  <a className="action-link" href="#">
                    <img src="./images/mobile-images/cart.png" alt="" />
                  </a>
                </li>
                <li className="action-item">
                  <a className="action-link" href="#">
                    <img src="./images/mobile-images/account.png" alt="" />
                  </a>
                </li>
                <li className="action-item">
                  <a className="action-link" href="#">
                    <img src="./images/mobile-images/menu-ham.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;
