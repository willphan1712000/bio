import React from 'react'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div className="card-container" style={cardContainerStyle} >
      <div className="card" ref={ref} style={cardStyle}>
        <div className="card-face front" style={frontFaceStyle}></div>
        <div className="card-face back" style={backFaceStyle}></div>
      </div>
    </div>
  )
})

const cardContainerStyle: React.CSSProperties = {
  maxWidth: '300px',
  maxHeight: '500px',
  width: '50vw',
  height: '83.33vw',
  minWidth: '200px',
  minHeight: '333.33px',
  perspective: '1500px',
  position: 'sticky',
  top: '20%',
};

const cardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  animation: 'rotate 10s infinite linear',
};

const cardFaceStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '20px',
  boxShadow: '0 30px 50px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
};

const frontFaceStyle: React.CSSProperties = {
  ...cardFaceStyle,
  backgroundImage: "url('/controllers/client/img/instagram_front.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const backFaceStyle: React.CSSProperties = {
  ...cardFaceStyle,
  backgroundImage: "url('/controllers/client/img/instagram_back.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transform: 'rotateY(180deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '1.2em',
};

export default Card