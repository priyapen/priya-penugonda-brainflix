import React from 'react';
import uploadicon from '../../Assets/Icons/Icon-upload.svg';


const Upload = () => {
    return (
        <div>
            {/* <form action=""> */}
            <img src={uploadicon} alt="Upload button img" />
                <input type="file" id="myFile" name="filename">
                </input>
                {/* <input type="submit"> */}
            {/* </form> */}
        </div>
    );
}

export default Upload;
