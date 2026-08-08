const Display = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">{data.name.charAt(0).toUpperCase()}</div>
        <div className="name">
          <h2>{data.name}</h2>
          <p className="subtext">{`@${data.username}`}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="contact-info">
          <p className="blue-text">{data.email}</p>
          <p>{data.phone}</p>
          <p className="blue-text">{data.website}</p>
        </div>

        <div className="address">
          <p>{`${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}</p>
        </div>
      </div>

      <div className="card-footer">
        <p>{data.company.name}</p>
        <p className="subtext">{data.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Display;
