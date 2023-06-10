function StatusToggler() {
  const TileStatus = true;

  const upcomingStatus = (
    <div className="tile-tag">
      <div>
        <label className="tag-label">UPCOMING</label>
      </div>
    </div>
  );
  const newStatus = (
    <div className="tile-tag">
      <div>
        <label className="tag-label">NEW</label>
      </div>
    </div>
  );

  return <div>{TileStatus ? upcomingStatus : newStatus}</div>;
}

export default StatusToggler;
