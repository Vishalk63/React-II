import "./Box.css"

function BoxComponent(){
    return(
        <div id="boxparent">
            <div className="comp">
                <span><i class="fa-brands fa-react fa-spin"></i></span>
                <span> ReactJs</span>
            </div>

            <div className="comp">
                <span><i class="fa-brands fa-node-js fa-fade"></i></span>
                <span> NodeJs</span>
            </div>

            <div className="comp">
                <span><i class="fa-brands fa-js fa-beat"></i></span>
                <span> Javascript</span>
            </div>

            <div className="comp">
                <span><i class="fa-brands fa-react fa-spin"></i></span>
                <span> SQL</span>
            </div>

            <div className="comp">
                <span><i class="fa-brands fa-python fa-beat"></i></span>
                <span> Python</span>
            </div>

            <div className="comp">
                <span><i class="fa-brands fa-react fa-spin"></i></span>
                <span> ReactHooks</span>
            </div>

            <div className="comp">
                <span><i class="fa-brands fa-react fa-spin"></i></span>
                <span> ReactNative</span>
            </div>
        </div>
    )
}

export default BoxComponent;