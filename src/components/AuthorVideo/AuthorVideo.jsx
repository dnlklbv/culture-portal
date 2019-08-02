import React, { Component } from 'react';
import './AuthorVideo.css';

class AuthorVideo extends Component {
  play(e) {
    e.preventDefault();
    const block = document.querySelector('.author-video-block');
    const frame = '<iframe width="640" height="360" src="https://www.youtube.com/embed/ysgSF8PCRAk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    block.innerHTML = frame;
  }

  render() {
    return (
      <div
        className="author-video-block"
        role="button"
        onClick={this.play}
        onKeyDown={this.onKeyDown}
        tabIndex={0}
      >
        <a href="https://www.youtube.com/watch?v=ysgSF8PCRAk">
          <picture>
            <img
              style={{ width: '100%' }}
              src="https://i.ytimg.com/vi_webp/ysgSF8PCRAk/sddefault.webp"
              alt="video"
            />
          </picture>
        </a>
        <button
          type="button"
          aria-label="Play video"
          className="author-video-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="youtube-icon"
          >
            <path className="youtube-icon" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />

          </svg>
        </button>
      </div>
    );
  }
}
export default AuthorVideo;
