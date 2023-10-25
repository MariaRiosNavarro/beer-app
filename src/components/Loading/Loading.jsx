import "./Loading.scss";

const Loading = () => {
  return (
    <div className="bg-gray">
      <h1>Loading...</h1>
      <div className="animation-size">
        <div className="animation-wrapper">
          <div id="glass">
            <div id="beer"></div>
          </div>
          <div id="poignet"></div>
          <div id="mousse_1"></div>
          <div id="mousse_2"></div>
          <div id="mousse_3"></div>
          <div id="mousse_4"></div>
          <div id="mousse_5"></div>
          <div id="mousse_volante"></div>
          <div id="mousse_interieur"></div>
          <div id="mousse_interieur_2"></div>
          <div id="mousse_interieur_3"></div>
          <div id="mousse_interieur_4"></div>
          {/* <div id="text"> */}
          {/* <p>Based on <a id="dribbble" href="https://dribbble.com/shots/1975846-Beer-loader" target=_blank>Dribbble</a> by <a href="http://clement.saulnier.fr" id="hetic" target=_blank>CLEMENT</p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

// Loading.propTypes = {
//   property: PropTypes.string,
// };

export default Loading;

// <div>
//   <div className="animation">
//     <p>
//       L <span className="ani">🍺</span> O <span className="ani">🍺</span> A
//       <span className="ani">🍺</span> D <span className="ani">🍺</span> I
//       <span className="ani">🍺</span> N <span className="ani">🍺</span> G
//       <span className="ani">🍺</span> ...
//     </p>
//   </div>
//   <Link to="/">See More</Link>
// </div>
