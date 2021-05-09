


const Video = ({data}) => {

    



    return (
        <div className="card" style={{width: '18rem'}}>
            <video src={data.url} controls />
            <div className="card-body">
                <h5 className="card-title">{ data.title }</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Video;