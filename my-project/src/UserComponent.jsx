import "./UserComponent.css"
import BoxComponent from "./BoxComponent";
function UserComponent(){
    return(
        <>
        <div id="container">
            {/* -------------- */}
            <div id="child1">

                <div className="myname">
                    <h1>Albert Sebastian </h1>
                    <button>Follow</button>
                </div>

                <h2>Software Engineer</h2>

                <div id="boxes">
                    <BoxComponent/>
                </div>
            </div>
            {/* ------------ */}
            <div id="child2">
                <img src="https://img.freepik.com/premium-photo/close-up-cartoon-boy-with-glasses-hoodie-generative-ai_900396-55012.jpg?size=338&ext=jpg&ga=GA1.2.933601817.1697068800&semt=ais" alt="" />
            </div>
        </div>
        </>
    )
}

export default UserComponent;