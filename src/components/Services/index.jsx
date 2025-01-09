import React from "react";
import "./Services.css";
// import { FaPaintBrush } from "react-icons/fa";
// import { BsCodeSquare } from "react-icons/bs";
// import { TfiWrite } from "react-icons/tfi";
const Services = () => {
  return (
    <section id="services">
      <div className="section_wrapper services_wrapper">
        <div className="section_header center">
          <h2 className="primary_title">Services</h2>
          <p className="text_muted description">
            I transform your ideas , and consequently your desires, into a
            distinctive web project that both inspires you and capativates your
            customers.
          </p>
        </div>
        <div className="services_group">
          {/*  */}
          <article className="service">
            <div className="service_top">
              <div className="icon_container">
                {/* <FaPaintBrush className="icon" /> */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path>
                </svg>
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="services_middle">
              <p className="text_muted description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
                voluptatum similique veritatis minus animi. Vel officiis ut
                repellat minus tenetur alias exercitationem ipsum hic
                repellendus fugiat?
              </p>
            </div>
            <div className="services_bottom">
              <button className="btn_primary btn">Read More</button>
            </div>
          </article>
          {/* End */}
          {/*  */}
          <article
            className="service"
            style={{ "--color-primary": "var(--color-success)" }}
          >
            <div className="service_top">
              <div className="icon_container">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"></path>
                </svg>
              </div>
              <h3 className="title">Web Devlopment</h3>
            </div>
            <div className="services_middle">
              <p className="text_muted description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
                voluptatum similique veritatis minus animi. Vel officiis ut
                repellat minus tenetur alias exercitationem ipsum hic
                repellendus fugiat?
              </p>
            </div>
            <div className="services_bottom">
              <button className="btn_primary btn">Read More</button>
            </div>
          </article>
          {/* End */}

          {/*  */}
          <article
            className="service"
            style={{ "--color-primary": "blueviolet" }}
          >
            <div className="service_top">
              <div className="icon_container">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 17 17"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g></g>
                  <path d="M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"></path>
                </svg>
              </div>
              <h3 className="title">Content Creator</h3>
            </div>
            <div className="services_middle">
              <p className="text_muted description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
                voluptatum similique veritatis minus animi. Vel officiis ut
                repellat minus tenetur alias exercitationem ipsum hic
                repellendus fugiat?
              </p>
            </div>
            <div className="services_bottom">
              <button className="btn_primary btn">Read More</button>
            </div>
          </article>
          {/* End */}
        </div>
      </div>
    </section>
  );
};

export default Services;
