import React from 'react';

function Sidebar({ topAnime }) {
  return (
    <aside>
      <nav>
        <h3>Anime</h3>
        {topAnime.map((anime) => (
          <a href={anime.url} target='blank'>
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
