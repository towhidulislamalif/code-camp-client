import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    fetch('https://b610-lerning-platform-server-side-iota.vercel.app/career')
      .then((response) => response.json())
      .then((json) => setSidebar(json));
  }, []);

  return (
    <div className="col-span-12 sm:col-span-3">
      {sidebar.map((nav) => {
        const { id, path } = nav;
        return (
          <div key={id} className="text-center sm:text-left mb-14 ">
            <Link
              to={`/topic/${id}`}
              className="text-sm font-bold tracking-wider uppercase text-gray-400"
            >
              {path}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
