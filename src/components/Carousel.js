import "./Carousel.css";
const Carousel = (props) => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        hover
      >
        <ol className="carousel-indicators flex-column">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGdpcmx8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  d-sm-block">
              <h5 className="h5name">
                I'm <br />a Designer
              </h5>
              <p>
                100% free portfolio template <br />
              </p>
              <button className="btn buttonpp">
                Download CV 
              </button>
            </div>
          </div>

          <div className="carousel-item" data-interval="4000">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
              className="d-block  w-100"
              alt="..."
            />
            <div className="carousel-caption  d-sm-block">
              <h5 className="h5name">
                Hi! <br />
                I'm Sukriti
              </h5>
              <p>
                100% free portfolio template <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;