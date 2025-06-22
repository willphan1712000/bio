import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger)

function AppScrollTrigger() {
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    gsap.fromTo(el, {
      rotationY: 0,
    }, {
      rotationY: 360,
      scrollTrigger: {
        trigger: el,
        start: "top 20%",
        end: "bottom 40%",
        scrub: true,
        markers: false,
      }
    })
  }, [])

  return (
    <div className="App" style={styles.container}>
      <header className="App-header">
        <div style={styles.spacer}>
          <Card ref={imgRef}/>
        </div>
      </header>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  spacer: {
    padding: "50px",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  img: {
    position: "sticky",
    top: "20%"
  },
  appHeader: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    perspective: "1500px",
    backfaceVisibility: "hidden",
  }
}

export default AppScrollTrigger;