import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard2 from '../components/feature-card2'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Kisan Bucket</title>
        <meta property="og:title" content="Kisan Bucket" />
      </Helmet>
      <header className={styles['Header']}>
        <img
          alt="logo"
          src="https://i.ibb.co/3sW8wMC/Screenshot-2021-12-18-at-10-38-40-PM.png"
          className={styles['image']}
        />
        <div className={styles['Nav']}>
          <NavigationLinks rootClassName="rootClassName"></NavigationLinks>
        </div>
        <div
          className={` ${styles['MenuBurger']} ${projectStyles['teleport-menu-burger']} `}
        >
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div className={projectStyles['teleport-menu-mobile']}>
          <div className={styles['Nav1']}>
            <div className={styles['Container01']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image1']}
              />
              <div className={projectStyles['teleport-menu-close']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName1"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon04']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon06']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon08']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['Hero']}>
        <div className={styles['container02']}>
          <h1 className={styles['text']}>
            Farm fresh vegetable at your doorstep
          </h1>
          <span className={styles['text01']}>
            Your favourite pantry staples and fresh produce, delivered to your
            door.
          </span>
          <div className={styles['BtnGroup']}>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              Get Started
            </button>
            <button
              className={` ${styles['button1']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.ibb.co/4dPpjGQ/online-grocery-buy.png"
          className={styles['image2']}
        />
      </div>
      <div className={styles['Banner']}>
        <h1 className={styles['text02']}>Our Mission</h1>
        <span className={styles['text03']}>
          <span></span>
          <span>
            Weâre a small team of passionate with big ambitions to make a true
            impact. We believe food is the most powerful force for change. For
            our families and our environment, so every day we are working
            towards a more sustainable way we are connecting direct farmers to
            their consumers in India.
          </span>
          <br></br>
          <span>â</span>
          <br></br>
          <span>
            We make socially conscious decisions in everything we do, as
            everything we do today will affect all of our tomorrow. So, every
            product on Kisan Bucket has been get quality check by us and aligns
            with our everyday mission to create a better tomorrow.
          </span>
        </span>
        <button className={` ${styles['button2']} ${projectStyles['button']} `}>
          Read More
        </button>
      </div>
      <div className={styles['Features']}>
        <h1 className={styles['text08']}>Our features</h1>
        <div className={styles['container03']}>
          <FeatureCard2
            title="Always Fresh"
            description="We don't prefer to hold old stock, our products are freshly procedured and served to you."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Direct Farm Connect"
            description="Our grocery vegetables stores are directly partner with the farmers"
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="Time &amp; Delivery"
            description="We insure all the orders are packed and delivered as promised"
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="Quality Standards"
            description="Natural products are kept in the best condition to retain the quality"
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <div className={styles['Steps']}>
        <h1 className={styles['text09']}>
          <span>Our Approach</span>
        </h1>
        <div className={styles['container04']}>
          <div className={styles['container05']}>
            <div className={styles['Step']}>
              <div className={styles['container06']}>
                <h1 className={styles['text11']}>
                  <span>1</span>
                </h1>
              </div>
              <h1 className={styles['text13']}>Order from Kisan Bucket App</h1>
              <span className={styles['text14']}>
                <span>
                  Add food and vegetables in cart and create order through Kisan
                  Bucket app
                </span>
              </span>
            </div>
            <div className={styles['Step1']}>
              <div className={styles['container07']}>
                <h1 className={styles['text16']}>
                  <span>2</span>
                </h1>
              </div>
              <h1 className={styles['text18']}>
                <span>Our store will prepare order</span>
              </h1>
              <span className={styles['text20']}>
                <span></span>
                <span></span>
                <span>
                  Our regional store will pick freshest items for you and
                  consolidate your order
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className={styles['container08']}>
            <div className={styles['Step2']}>
              <div className={styles['container09']}>
                <h1 className={styles['text25']}>
                  <span>3</span>
                </h1>
              </div>
              <h1 className={styles['text27']}>
                <span>Delivery on Same day</span>
              </h1>
              <span className={styles['text29']}>
                <span></span>
                <span></span>
                <span>
                  Our Delivery partner will deliver your order on same day or
                  scheduled time slot
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Hero1']}>
        <img
          alt="image"
          src="https://i.ibb.co/vq79Wgh/food-delivery.png"
          className={styles['image3']}
        />
        <div className={styles['container10']}>
          <h1 className={styles['text34']}>
            Enjoy hassle free online grocery shopping experience
          </h1>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container11']}>
          <div className={styles['Logo']}>
            <span className={styles['text35']}></span>
          </div>
          <div className={styles['LinksContainer']}>
            <div className={styles['Container12']}>
              <div className={styles['ProductContainer']}>
                <span className={styles['text36']}>Product</span>
                <span className={styles['text37']}>Features</span>
                <span className={styles['text38']}>Releases</span>
              </div>
              <div className={styles['CompanyContainer']}>
                <span className={styles['text39']}>Company</span>
                <span className={styles['text40']}>About</span>
                <span className={styles['text41']}>Careers</span>
                <span className={styles['text42']}>Contact</span>
                <span className={styles['text43']}>Blog</span>
              </div>
            </div>
            <div className={styles['container13']}>
              <div className={styles['Contact']}>
                <span className={styles['text44']}>Contact Us</span>
                <span className={styles['text45']}>
                  support@kisanbucket.com
                </span>
                <span className={styles['text46']}>
                  <span>Kisan Bucket Online Grocery</span>
                  <br></br>
                  <span>Private Limited</span>
                  <br></br>
                  <span>Nashik, Maharashtra,</span>
                  <br></br>
                  <span>india</span>
                </span>
              </div>
              <div className={styles['Socials']}>
                <span className={styles['text54']}>Follow Us</span>
                <div className={styles['IconGroup1']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={styles['icon10']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon12']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className={styles['icon14']}
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['Separator']}></div>
        <span className={styles['text55']}>
          <span>Â© 2021 Kisan Bucket, All Rights Reserved.</span>
          <span className={styles['text57']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Home
