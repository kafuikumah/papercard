function Block() {
  return (
    <div className="block">
      <div className="block-container">
        <div className="block-frame">
          <div className="block-text">
            <h3> Developer Tools and Resources </h3>
            <p>
              These tools and resources have been recommended by many developers
              ccross the world
            </p>
          </div>
          <a
            href="#"
            className="block-link text-sm font-semibold leading-6 text-gray-900"
          >
            Check them out <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Block;
