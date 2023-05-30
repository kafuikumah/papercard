function Tile(props) {
  return (
    <div className="mx-auto max-w-2xl py-20">
      <div className="tile mb-10">
        <div className="tile-emoji tile-icon">
          <label>{props.emoji}</label>
        </div>

        <div className="tile-title">
          <h2>{props.title}</h2>
        </div>

        <div className="tile-tag">
          <div>
            <label className="tag-label">{props.tag}</label>
          </div>
        </div>

        <div className="tile-paragraph">
          <div>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
