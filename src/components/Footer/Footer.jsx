import css from './Footer.module.scss';

import InstagramIcon from '@mui/icons-material/Instagram'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    
    
    return(
       <footer>
        <div className={`${css.wrapper}`}>
            {/* LOGO + 图标 */}
            <section className={`${css.top}`}>
                <a href="#" title='Logo'>
                    <img src="src/assets/images/Logos/logo.png" alt="logo" className={`${css.logo}`} />
                </a>
                <span className={`${css.socialLinks}`}>
                    <a href="#">
                        <InstagramIcon className={`${css.icon}`} color='primary'/>
                    </a>
                    <a href="#">
                        <FacebookIcon className={`${css.icon}`} color='primary'/>
                    </a>
                    <a href="#">
                        <LinkedInIcon className={`${css.icon}`} color='primary'/>
                    </a>
                    <a href="#">
                        <TwitterIcon className={`${css.icon}`} color='primary'/>
                    </a>
                </span>
            </section>
            {/* 文字超链接 */}
            <section className={`${css.columns}`}>
                <section>
                    <ul>
                        <h3>Solutions</h3>
                        <li>Solution 1</li>
                        <li>Solution 2</li>
                        <li>Solution 3</li>
                        <li>Solution 4</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <h3>Service</h3>
                        <li>
                            <a href="">ReactJS</a>
                        </li>
                        <li>
                            <a href="">Vue</a>
                        </li>
                        <li>
                            <a href="">Python</a>
                        </li>
                        <li>
                            <a href="">Rails</a>
                        </li>
                    </ul>
                </section>
            </section>

            <section className={`${css.bottom}`}>
                <small>@ Ryan Study Ltd. <span>2023</span>, All rights reserved</small>
                <span className={`${css.bottomLinks}`}>
                    <a href="">Terms and Conditions</a>
                    <a href="">Privacy Policy</a>
                </span>
            </section>
            
        </div>
       </footer>
    )
};

export default Footer;