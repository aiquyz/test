import { Range as ReactRange, getTrackBackground } from "react-range";

<<<<<<< HEAD
const STEP = 100;
const MIN = 0;
const MAX = 100000;
=======
const STEP = 0.1;
const MIN = 0;
const MAX = 100;
>>>>>>> 3dc796852617115159451466aadaa6bc7c6391fd

const Range = ({ values, onChange }) => {
  return (
    <ReactRange
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
<<<<<<< HEAD
            maxWidth: "212px",
=======
            width: "100%",
>>>>>>> 3dc796852617115159451466aadaa6bc7c6391fd
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#AFD0FF", "#0D6EFD", "#AFD0FF"],
                min: MIN,
                max: MAX,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        ></div>
      )}
    />
  );
};

export default Range;
