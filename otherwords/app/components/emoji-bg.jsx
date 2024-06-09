function Background ({ children }) {
  return (
    <div className="h-screen w-screen relative">
      <video
        src="/emoji-bg.mp4"
        autoPlay
        loop
        muted
        style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
      />
      <div style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", zIndex: "1"}}></div>
      <div style={{position: "absolute"}}>
        {children}
      </div>
    </div>
  );
}
  
  export default Background;