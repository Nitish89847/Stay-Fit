import Link from "next/link";



export default function Home() {
  const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url('/C:/Users/girin/Stay-Fit/frontend/my-app/public/pexels-tsquared-lab-312588937-32830367.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    
    <main style={sectionStyle} className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      
      <h1 className="text-5xl font-bold mb-4">
        STAY FIT
      </h1>

      <p className="text-lg text-zinc-300">
        Welcome to my fitness app
      </p>

      <Link href="/login" className="mt-6 inline-block bg-green-500 px-6 py-3 rounded-lg">
        Join Now
      </Link>
    </main>
  );
}
