import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Card, { CardRef } from './Card';

gsap.registerPlugin(ScrollTrigger)

function AppScrollTrigger() {
  const cardRef = useRef<CardRef>(null)

  useEffect(() => {
    if(!cardRef.current) return

    const card = cardRef.current.card
    const one = cardRef.current.one
    const two = cardRef.current.two
    const three = cardRef.current.three

    gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 20%",
        end: "bottom 40%",
        scrub: true,
        markers: false,
      }
    }).fromTo(card, { rotationY: 0 }, { rotationY: 360 })

    gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 20%",
        end: "bottom 60%",
        scrub: true,
        markers: false,
      }
    }).fromTo(one, { opacity: 0 }, { opacity: 1 }).to(one, { opacity: 0 })

    gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 10%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
      }
    }).fromTo(two, { opacity: 0 }, { opacity: 1 }).to(two, { opacity: 0 })

    gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 0%",
        end: "bottom 40%",
        scrub: true,
        markers: false,
      }
    }).fromTo(three, { opacity: 0 }, { opacity: 1 }).to(three, { opacity: 0 })
  }, [])

  return (
    <div className="App" style={styles.container}>
      <header className="App-header" style={styles.appHeader}>
        <div style={styles.spacer}>
          <Card ref={cardRef}/>
        </div>
      </header>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  spacer: {
    height: "120vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative"
  },
  appHeader: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
    perspective: "1500px",
    backfaceVisibility: "hidden",
    position: "relative",
    padding: "50px"
  }
}

export default AppScrollTrigger;