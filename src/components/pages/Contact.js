const ContactPage = () => {
  return (
    <div className="col-md-10 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="Enter your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Company Information</h2>
            <p>
              Address: 123 Main Street
              <br />
              City: New York
              <br />
              Country: United States
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
