import React from "react";
import "./Services.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
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
                <FaPaintBrush className="icon" />
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
                <BsCodeSquare className="icon" />
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
                <TfiWrite className="icon" />
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
