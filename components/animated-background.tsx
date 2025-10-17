"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large floating circle - top right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-40 blur-2xl animate-float"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
          animationDelay: "0s",
          animationDuration: "20s",
        }}
      />

      {/* Medium floating circle - left middle */}
      <div
        className="absolute top-1/3 -left-24 w-64 h-64 rounded-full opacity-35 blur-xl animate-float-slow"
        style={{
          background: "linear-gradient(225deg, #4facfe 0%, #00f2fe 25%, #43e97b 50%, #38f9d7 75%, #667eea 100%)",
          animationDelay: "5s",
          animationDuration: "25s",
        }}
      />

      {/* Small floating circle - bottom right */}
      <div
        className="absolute bottom-32 right-1/4 w-48 h-48 rounded-full opacity-40 blur-xl animate-float"
        style={{
          background: "linear-gradient(315deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #43e97b 100%)",
          animationDelay: "10s",
          animationDuration: "18s",
        }}
      />

      {/* Tiny accent circle - top left */}
      <div
        className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full opacity-30 blur-lg animate-float-slow"
        style={{
          background: "linear-gradient(45deg, #764ba2 0%, #667eea 25%, #f093fb 50%, #4facfe 100%)",
          animationDelay: "15s",
          animationDuration: "22s",
        }}
      />
    </div>
  )
}
