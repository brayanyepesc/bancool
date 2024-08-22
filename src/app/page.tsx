export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <div className="w-full pt-24 flex flex-col justify-center items-center space-y-4 max-w-2xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-6xl font-bold">Bbank</h2>
        <p className="text-xl font-bold text-gray-500">Welcome to the best digital bank</p>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cumque exercitationem officiis in ratione ullam labore et odio ducimus sit dignissimos? Omnis iste voluptatum quod ipsum molestiae enim illo dolor.</p>
        <button className="py-2 px-10 rounded-md text-white bg-gradient-to-tr from-indigo-500 to-pink-500">Join us!</button>
      </div>
    </main>
  );
}
