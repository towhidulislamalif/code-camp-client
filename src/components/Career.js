import React from 'react';

import Sidebar from './Sidebar';
import Topics from './Topics';

function Career() {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container max-w-6xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          {/* sidebar */}
          <Sidebar />
          {/* topics */}
          <Topics />
        </div>
      </div>
    </section>
  );
}

export default Career;
