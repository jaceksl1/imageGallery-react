import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Footer from "./components/footer";
import Navigation from "./components/navigation";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <body className="bg-gradient-to-r from-indigo-200 to-indigo-500">
      <Navigation />

      <div className="text-center container mx-auto">
        <h1 className="text-white font-bold text-black-500 text-2xl py-5 text-center">
          Find perfect background
        </h1>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-42">Loading...</h1>
        ) : (
          <div className="mx-auto grid grid-cols-1 gap-4 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </body>
  );
}

export default App;
