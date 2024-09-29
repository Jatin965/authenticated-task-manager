export default function layoutOne(Component) {
  function LayoutOne(props) {
    return (
      <div className="layout">
        <div className="content">
          <div className="page">
            <div className="bg_circle-wrapper">
              <div className="circle circle-one" />
              <div className="circle circle-two" />
              <div className="circle circle-three" />
            </div>
            <div className="page-content">
              <Component {...props} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return LayoutOne;
}
