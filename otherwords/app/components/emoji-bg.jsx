"use client";

function Background ({ children }) {
  return (
    <div className="h-screen w-screen relative">
      <video
        src="/emoji-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          pointerEvents: "none" 
        }}
        onClick={(e) => e.preventDefault()}
      />
      <div style={{position: "absolute", width: "100%", height: "100%"}}>
        {children}
      </div>
    </div>
  );
}

export default Background;
