import React from "react";
import "./CreateProfile.css";

const CreateProfile = ({username, fullName, email, createProfile, inputChanged}) => {
    return <div className="profile-form">
        <div>
            <input type="text" onChange={inputChanged} name="profile.username"
                   value={username} placeholder="Username"/>
        </div>
        <div>
            <input type="text" onChange={inputChanged} name="profile.fullName"
                   value={fullName} placeholder="Full Name"/>
        </div>
        <div>
            <input type="text" onChange={inputChanged} name="profile.email"
                   value={email} placeholder="Email Address"/>
        </div>
        <div className="gender">
            Gender:
            <input type="radio" value="m" name="male"/>Male
            <input type="radio" value="f" name="female"/>Female
            <input type="radio" value="o" name="other"/>Other
        </div>
        <button onClick={createProfile}>Let me in!</button>
    </div>;
};

export default CreateProfile;