import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../components/usercontext/UserContext';
import "./header.scss";

function Header() {
  const defaultUser = { firstName: "Default", lastName: "User", userType: "Guest", imageUrl: "" };
  const { addUser } = useUserContext();

  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState(defaultUser.firstName);
  const [lastName, setLastName] = useState(defaultUser.lastName);
  const [userType, setUserType] = useState(defaultUser.userType);
  const [imageUrl, setImageUrl] = useState(defaultUser.imageUrl);
  const [loadingImage, setLoadingImage] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedUserType = localStorage.getItem('userType');
    const storedImageUrl = localStorage.getItem('imageUrl');
    const storedEmail = localStorage.getItem('email');

    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);
    if (storedUserType) setUserType(storedUserType);
    if (storedImageUrl) setImageUrl(storedImageUrl);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFirstName = event.target.fname.value;
    const newLastName = event.target.lname.value;
    const newEmail = event.target.email.value;
    const newImage = event.target.image.files[0];

    let newUserType = "Guest";
    const adminEmails = ["kvaghasiya705@gmail.com", "pr.vaghasiyakrish@gmail.com"];

    if (adminEmails.includes(newEmail)) {
      newUserType = "Admin";
    } else if (newFirstName && newLastName) {
      newUserType = "User";
    }

    if (newFirstName && newLastName) {
      const newUserData = { firstName: newFirstName, lastName: newLastName, userType: newUserType, email: newEmail, imageUrl: imageUrl };

      addUser(newUserData);

      setFirstName(newFirstName);
      setLastName(newLastName);
      setUserType(newUserType);
      setEmail(newEmail);

      localStorage.setItem('firstName', newFirstName);
      localStorage.setItem('lastName', newLastName);
      localStorage.setItem('userType', newUserType);
      localStorage.setItem('email', newEmail);

      if (newImage) {
        setLoadingImage(true);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result);
          localStorage.setItem('imageUrl', reader.result);
          setLoadingImage(false);
        };
        reader.readAsDataURL(newImage);
      } else {
        setLoadingImage(false);
      }

      setShowForm(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleRemoveImage = () => {
    setImageUrl('');
    localStorage.removeItem('imageUrl');
  };

  const getInitial = (first) => {
    return first.charAt(0).toUpperCase();
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>/
        <Link to="/editorpage">Editorpage</Link>
        {userType === "Admin" && <Link to="/adminpanel">Admin Panel</Link>}
      </nav>
      <div>
        <div className='user-details'>
          <div className='user'>
            <div className='user-icon'>
              {imageUrl ? (
                <img
                  src={loadingImage ? 'default-image-url.png' : imageUrl}
                  alt="User Icon"
                  className="user-icon-image"
                />
              ) : (
                <div className="user-icon-text">
                  <span>{getInitial(firstName)}</span>
                </div>
              )}
            </div>
            <div className='user-name'>
              <p>{`${firstName} ${lastName}`}</p>
            </div>
          </div>
          <div className='user-type'>
            <p>{userType}</p>
          </div>
        </div>
        <div className='login-logout-button'>
          <button onClick={() => setShowForm(true)}>Edit</button>
          <button onClick={() => setShowForm(true)}>Change Account</button>
          {imageUrl && <button onClick={handleRemoveImage}>Remove Image</button>}
        </div>
      </div>

      {showForm && (
        <div className='form-main'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" name="fname" defaultValue={firstName} />
            </div>
            <div>
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" name="lname" defaultValue={lastName} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" defaultValue={email} required />
            </div>
            <div>
              <label htmlFor="image">Upload Image:</label>
              <input type="file" id="image" name="image" accept="image/*" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
