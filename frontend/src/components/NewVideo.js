import { useState } from "react";
import axios from "../axios";





const NewVideo = ({data}) => {

    const [title, setTitle] = useState('');
    const [media, setMedia] = useState();


    const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('title', title);
        formData.append('url', media);  
        formData.append('catetory', '1') 

        axios.post('video/', formData).then(res => {
            console.log(res);
        })


        console.log(media)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Video Title</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="file" className="form-label">File</label>
                <input 
                    type="file" 
                    file={media}
                    className="form-control" 
                    onChange={e => setMedia(e.target.files[0])}
                    id="file" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewVideo;