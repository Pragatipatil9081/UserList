import React, { useState } from "react";
import { FcEditImage } from "react-icons/fc";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  const profileDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [gen, setGen] = useState("");
  const [img, setImg] = useState(profileDefault);
  const [term, setTerm] = useState(false);
  

  const handleSubmit = (e) => {
    const ary=JSON.parse(localStorage.getItem("All")||"[]")
    const all={
      name:name,
      email:email,
      password:pswd,
      gender:gen,
      Image:img,
      TC:term
    }
    ary.push(all)
    localStorage.setItem("All",JSON.stringify(ary))
    e.preventDefault();
    if (name === "") {
      toast.error("Name required");
    } else if (email === "") {
      toast.error("Email required");
    } else if (pswd === "") {
      toast.error("Password required");
      } else if (gen === "") {
        toast.error("Gender required");
    } else{
      toast.success("Successfully Register")
    }
  }
return (
  <>
    <Header />
    <div className="container content mt-4">
      <h5>
        <FcEditImage /> Add New User
      </h5>
      <div className="row border p-4">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={pswd}
              onChange={(e) => setPswd(e.target.value)}
            />
          </div>
          {/* radios button input ================== */}
          <div className="d-flex flex-row">
            Gender - &nbsp;
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
            &nbsp;
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                type="radio"
                name="Gender"
                value="Male"
                id="flexRadioDefault1"
                defaultChecked={gen === "Male"}
                onClick={(e) => setGen(e.target.value)}
              />
            </div>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
            &nbsp;
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                type="radio"
                name="Gender"
                value="Female"
                id="flexRadioDefault2"
                defaultChecked={gen === "Female"}
                onClick={(e) => setGen(e.target.value)}
              />
            </div>
          </div>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I Acept Terms And Conditions
            </label>
          </div>
          <button
            type="submit"
            className="form__submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {/* col-md-6 ends */}
        <div className="col-md-4 ">
          <div className="profile_section">
            <p>Select Profile Picture :</p>
            <img
              src={
                // localStorage.getItem("img")
                //   ? localStorage.getItem("img")
                //   : profileDefault
                profileDefault
              }
              alt="profile_pic"
              className="img-thumbnail"
              height={250}
              width={250}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="file"
              onChange={(e) => setImg(e.target.value)}
              />
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default HomePage;
