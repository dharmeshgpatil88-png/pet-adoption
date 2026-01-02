const CatSnacks = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 lg:px-20 py-10">
      <h1 className="text-4xl font-bold mb-6">
        Top 5 Healthy Snacks for Cats 😺✨
      </h1>

      <p className="text-gray-300 leading-relaxed text-lg mb-4">
        Cats love treats! But choosing healthy snacks helps in long-term wellness...
      </p>

      <ol className="list-decimal ml-6 text-gray-400 space-y-2">
        <li>Cooked Chicken</li>
        <li>Salmon (boneless)</li>
        <li>Catnip treats</li>
        <li>Plain cooked eggs</li>
        <li>Vet-approved dental treats</li>
      </ol>

      <p className="mt-6 text-gray-300">
        Choosing high-protein snacks keeps your cat active and happy 😻
      </p>
    </div>
  );
};

export default CatSnacks;
