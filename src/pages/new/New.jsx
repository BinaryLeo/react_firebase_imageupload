import React from 'react';
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({title, inputs}) => {

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt=""/>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>

                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            {inputs.map((input) => ( // for each input in inputs array render input component with props
                                    <div className="formInput"
                                         key={input.id}> {/* key is used to identify each input component - from formSource*/}
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder}/>
                                    </div>
                                )
                            )}
                            <button className="btn">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default New;