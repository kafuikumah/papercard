function Block(props) {
  return (
    <div className="block mt-10">
      <div className="block-container">
        <div className="block-frame">
          <div className="block-text">
            <h3> {props.heading} </h3>
            <p>{props.paragraph}</p>
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
