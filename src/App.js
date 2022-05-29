import './App.css';
import { useState } from 'react';

function App() {
  var axios = require('axios');

  const [filePreview, setfilePreview] = useState(null);
  const [file, setfile] = useState(null)

  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Status, setStatus] = useState("")

  const handlePicture = (e) => {
    if (e.target.files[0]) {
      setfile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setfilePreview(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }


  const postToApi = () => {
    var FormData = require('form-data');
    // var fs = require('file-system');
    var data = new FormData();
    data.append('name', Name);
    data.append('category', Category);
    data.append('price', Price);
    data.append('status', Status);
    data.append('image', file);

    var config = {
      method: 'post',
      url: 'https://rent-car-appx.herokuapp.com/admin/car',
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="App">
      <h1>Input file</h1>
      <input type="file" onChange={(e) => { handlePicture(e) }} />
      <img alt='' width={200} height={200} src={filePreview} />

      <h1>Input Name</h1>
      <input  type={"text"} onChange={(e) => {setName(e.target.value)}}/>

      <h1>Input Category</h1>
      <input  type={"text"} onChange={(e) => {setCategory(e.target.value)}}/>

      <h1>Input Price</h1>
      <input  type={"text"} onChange={(e) => {setPrice(e.target.value)}}/>

      <h1>Input Status</h1>
      <input  type={"text"} onChange={(e) => {setStatus(e.target.value)}}/>

      <button onClick={() => {postToApi()}}>Upload</button>
    </div>
  );
}

export default App;
