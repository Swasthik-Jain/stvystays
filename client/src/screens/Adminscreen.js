import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Swal from "sweetalert2";
const { TabPane } = Tabs;

function Adminscreen() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
    //   window.location.href = "/home";
    }
  }, []);

  return (
    <div className="mx-3 ml-3 bs container mx-auto">
      <h1 className="text-center">
        <b>Admin Panel</b>
      </h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Bookings />
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <Addroom />
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
        <TabPane tab="Places" key="5">
          <Places/>
        </TabPane>
        <TabPane tab="Add Places" key="6">
          <AddPlace/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Adminscreen;

export function Bookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("/api/bookings/getallbookings")
        ).data;
        setbookings(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Bookings</h1>
        {loading && <Loader />}

        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Room</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length &&
              bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromdate}</td>
                    <td>{booking.todate}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export function Places() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/tourist/getallplaces")).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);
  const handleDeletePlace = async (placeId) => {
    try {
      await axios.delete(`/api/tourist/deleteplace/${placeId}`);
      setrooms(rooms.filter((room) => room._id !== placeId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Places</h1>
        {loading && <Loader />}

        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Place ID</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {rooms.length &&
              rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>
                    <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }} onClick={() =>handleDeletePlace(room._id)}>
  Delete
</button>

                </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export function Rooms() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/rooms/getallrooms")).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);

  const handleDeleteRoom = async (roomId) => {
    try {
      await axios.delete(`/api/rooms/delete/${roomId}`);
      setrooms(rooms.filter((room) => room._id !== roomId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Rooms</h1>
        {loading && <Loader />}

        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Room ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent Per Day</th>
              <th>Max Count</th>
              <th>Phone Number</th>
              <th>DELETE</th>
            </tr>
          </thead>

          <tbody>
            {rooms.length &&
              rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>{room.rentperday}</td>
                    <td>{room.maxcount}</td>
                    <td>{room.phonenumber}</td>
                    <td>
                    <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => handleDeleteRoom(room._id)}>
  Delete
</button>

                </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export function Users() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/users/getallusers")).data;
        setusers(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);
  
  const handleDeleteUser = async (userId) => {
    console.log(userId)

    try {
      // Send a DELETE request to the server to delete the user from the database
      await axios.delete(`/api/users/delete/${userId}`);

      // Remove the deleted user from the list of users
      setusers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.log(error);
      seterror(error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Users</h1>
        {loading && <Loader />}

        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "YES" : "NO"}</td>
                    <td>
                    <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => handleDeleteUser(user._id)}>
  Delete
</button>

                </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}




export function Addroom() {

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [name, setname] = useState('')
  const [rentperday, setrentperday] = useState()
  const [maxcount, setmaxcount] = useState()
  const [description, setdescription] = useState()
  const [phonenumber, setphonenumber] = useState()
  const [type, settype] = useState()
  const [imageurl1, setimageurl1] = useState()
  const [imageurl2, setimageurl2] = useState()
  const [imageurl3, setimageurl3] = useState()

  async function addRoom(){
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls:[imageurl1 , imageurl2 , imageurl3]
    }

    try {
      setloading(true)
      const result = await (await axios.post('/api/rooms/addroom' , newroom)).data
      console.log(result);
      setloading(false)
      Swal.fire('Congrats' , 'Your New Room Added Successfully' , 'success').then(result => {
        window.location.href='/home'
      })
    } catch (error) {
      console.log(error);
      setloading(false)
      Swal.fire('Oops' , 'Something went wrong' , 'error')
    }
  }

  return (
    <div className="row">
        <div className="col-md-6">
        {loading && <Loader />}
          <input type="text" className="form-control mb-2" placeholder="Room Name"
          value={name} onChange={(e) => {setname(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Rent Per Day" 
          value={rentperday} onChange={(e) => {setrentperday(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Max Count" 
          value={maxcount} onChange={(e) => {setmaxcount(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Description" 
          value={description} onChange={(e) => {setdescription(e.target.value)}}/>
          <input type="text" className="form-control" placeholder="Phone Number" 
          value={phonenumber} onChange={(e) => {setphonenumber(e.target.value)}} />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control mb-2" placeholder="Type" 
          value={type} onChange={(e) => {settype(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Image URL 1" 
          value={imageurl1} onChange={(e) => {setimageurl1(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Image URL 2" 
          value={imageurl2} onChange={(e) => {setimageurl2(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Image URL 3" 
          value={imageurl3} onChange={(e) => {setimageurl3(e.target.value)}} />

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={addRoom}>Add Room</button>
          </div>
        </div>
    </div>
  )
}



export function AddPlace() {

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [name, setname] = useState('')
  const [rentperday, setrentperday] = useState(0)
  const [maxcount, setmaxcount] = useState(0)
  const [description, setdescription] = useState()
  const [phonenumber, setphonenumber] = useState(0)
  const [type, settype] = useState("None")
  const [imageurl1, setimageurl1] = useState()
  const [imageurl2, setimageurl2] = useState()
  const [imageurl3, setimageurl3] = useState()

  async function addPlace(){
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls:[imageurl1 , imageurl2 , imageurl3]
    }

    try {
      setloading(true)
      const result = await (await axios.post('/api/tourist/addplace' , newroom)).data
      console.log(result);
      setloading(false)
      Swal.fire('Congrats' , 'Your New Room Added Successfully' , 'success').then(result => {
        window.location.href='/home'
      })
    } catch (error) {
      console.log(error);
      setloading(false)
      Swal.fire('Oops' , 'Something went wrong' , 'error')
    }
  }

  return (
    <div className="row">
        <div className="col-md-6">
        {loading && <Loader />}
          <input type="text" className="form-control mb-2" placeholder="Place Name"
          value={name} onChange={(e) => {setname(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Description" 
          value={description} onChange={(e) => {setdescription(e.target.value)}}/>
        
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control mb-2" placeholder="Image URL 1" 
          value={imageurl1} onChange={(e) => {setimageurl1(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Image URL 2" 
          value={imageurl2} onChange={(e) => {setimageurl2(e.target.value)}} />
          <input type="text" className="form-control mb-2" placeholder="Image URL 3" 
          value={imageurl3} onChange={(e) => {setimageurl3(e.target.value)}} />

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={addPlace}>Add Room</button>
          </div>
        </div>
    </div>
  )
}
