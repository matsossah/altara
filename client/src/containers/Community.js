import React from "react";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const Community = () => {
  return (
    <div>
      <NavigationMenu />
      <div className="container pt-6">
        <div className="tile is-ancestor my-6 py-6">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical ">
                <article className="tile is-child ">
                  <figure className="image is-4by3">
                    <img
                      className="tile is-child"
                      alt=" tile 1"
                      src="https://bulma.io/images/placeholders/640x480.png"
                    ></img>
                  </figure>
                </article>
                <article className="tile is-child notification bg-purple">
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt=" tile 2"
                    ></img>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title">Middle tile</p>
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt=" tile 3"
                    ></img>
                  </figure>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    alt=" tile 4"
                  ></img>
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification bg-purple">
              <div className="content">
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    alt=" tile 5"
                  ></img>
                </figure>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
