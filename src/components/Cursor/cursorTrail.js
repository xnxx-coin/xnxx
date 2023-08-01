import React from "react";

/* Mouse trail adapted from a jQuery Codepen
 by Bryan C 
 https://codepen.io/bryjch/pen/QEoXwA 
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

class CursorTrail extends React.Component {
  state = {
    cHeight: 0,
    cWidth: 0
  };

  canvas = React.createRef();

  componentDidMount = () => {
    // Set height and width on load because if set in state body isn't defined yet.
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth
    });

    window.addEventListener(
      "resize",
      () => {
        this.setState({
          cHeight: document.body.clientHeight,
          cWidth: document.body.clientWidth
        });
      },
      false
    );
    

    // If the device supports cursors, start animation.
    if (matchMedia("(pointer:fine)").matches) {
      this.startAnimation();
    }
  };

  adjustCanvasDimensions = () => {
    this.setState({
      cHeight: window.innerHeight,  // updated here
      cWidth: window.innerWidth    // updated here
    });
  };

  startAnimation = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");

    const points = [];

    const addPoint = (x, y) => {
        const point = new Point(x + 14, y - 16); // Offset position by 2px to the left and 10px down
        points.push(point);
    };

    document.addEventListener(
        "mousemove",
        ({ clientX, clientY }) => {
            addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
        },
        false
    );
    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const duration = 2 * (0.7 * (1 * 1000)) / 60; // Last 80% of a frame per point

      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        let lastPoint;

        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1];
        } else lastPoint = point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          // If the point dies, remove it.
          points.shift();
        } else {
          // Otherwise animate it:

          // As the lifetime goes on, lifePercent goes from 0 to 1.
          const lifePercent = point.lifetime / duration;
          const spreadRate = 7 * (1 - lifePercent);
          
          ctx.lineJoin = "round";
          ctx.lineWidth = spreadRate;
          
          // Set the stroke style to a constant dark blue color.
          ctx.strokeStyle = `	#add8e6`;
          
          ctx.beginPath();
          
          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(point.x, point.y);
          
          ctx.stroke();
          ctx.closePath();
        }
      }
      requestAnimationFrame(animatePoints);
    };

    animatePoints();
  };

  render = () => {
    const canvasStyle = {
      position: 'fixed',
      zIndex: 9999, // Make sure this value is higher than the z-index of other elements
      pointerEvents: 'none' // Ensure clicks pass through to elements below
    };
    const { cHeight, cWidth } = this.state;
    return <canvas ref={this.canvas} width={cWidth} height={cHeight} style={canvasStyle} />;
  };
}

export default CursorTrail;