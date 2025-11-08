import './OptionsBar.css'

function Tablet(props) {
    return(
        <div className="tablet">
            <h3>{props.name}</h3>
        </div>
        
    )
}
function Bar() {
  return (
    <div className="BarContainer">
      <ul>
        <li><Tablet name="Trending"/></li>
        <li><Tablet type='dropdown'name="Price"/></li>
        <li><Tablet name="Trending"/></li>
      </ul>
    </div>
  );
}
export default Bar
