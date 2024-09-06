import React from "react";

function FeaturesPage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[800px] py-5">
        <h1 className="text-secondary text-3xl font-bold leading-tight px-4 text-left pb-3 pt-6">Features and Constraints</h1>
        <p className="text-secondary text-base pb-3 pt-1 px-4">Here you can see the list of features descriptions and constraints.</p>
        {/* Add features and constraints list here */}
      </div>
    </div>
  );
}

export default FeaturesPage;