import React from 'react'
import anime from "animejs";
import './TextAnimation.css'
function TextAnimation(props) {
    function createMarkup() {
      var textToAnimate = props.text;
      return {
        __html: textToAnimate.replace(/\S/g, "<span class='letter'>$&</span>"),
      };
    }
    const count = React.useState(0);
    const animationRef = React.useRef(null);
    React.useEffect(() => {
      animationRef.current = anime.timeline({
        easing: "easeOutExpo",
        duration: 750,
        loop: true,
      });
      animationRef.current
        .add({
          targets: ".ml6 .letter",
          translateY: ["1.1em", 0],
          translateZ: 1,
          delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
        })
        .add({
          targets: ".ml6",
          loop: true,
          opacity: 0,
          duration: 1000,
          delay: 750,
        });
    }, [count]);
    return (
      <h4 className="ml6">
        <span className="text-wrapper">
          <span className="letters" dangerouslySetInnerHTML={createMarkup()} />
        </span>
      </h4>
    );
}

export default TextAnimation
