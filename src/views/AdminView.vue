<template>
  <section class="admin-dashboard">
    <div class="container">
      <!-- User Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-title">User Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Email</th>
              <!-- <th>Password</th> -->
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <!-- <td>{{ user.userPass }}</td> -->
              <td>
                <img :src="user.image_url" alt="User Image" class="user-image" />
              </td>
              <td>
                <button @click="openEditUserModal(user)" class="btn btn-primary btn-sm">
                  Edit
                </button>
                <button @click="deleteUser(user.userID)" class="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="$router.push('/auth')" class="btn1">
            Add New User
          </button>
        </div>
      </div>

      <!-- Hotel Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-title">Hotel Management</h2>
        <table class="table table-striped">
  <thead>
    <tr>
      <th>Hotel ID</th>
      <th>Hotel Name</th>
      <th>Location</th>
      <th>Rating</th>
      <th>Price per Night</th>
      <th>Rooms Available</th>
      <th>Check-In Time</th>
      <th>Check-Out Time</th>
      <th>Amenities</th>
      <th>Contact Number</th>
      <th>Image</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="hotel in hotels" :key="hotel.hotel_id">
      <td>{{ hotel.hotel_id }}</td>
      <td>{{ hotel.hotel_name }}</td>
      <td>{{ hotel.location }}</td>
      <td>{{ hotel.rating }}</td>
      <td>${{ hotel.price_per_night}}</td>
      <td>{{ hotel.rooms_available }}</td>
      <td>{{ hotel.check_in_time }}</td>
      <td>{{ hotel.check_out_time }}</td>
      <td>{{ hotel.amenities }}</td>
      <td>{{ hotel.contact_number }}</td>
      <td>
        <img :src="hotel.image_url" alt="Hotel Image" class="hotel-image" />
      </td>
      <td>
        <button @click="openEditHotelModal(hotel)" class="btn btn-primary btn-sm">
          Edit
        </button>
        <button @click="deleteHotel(hotel.hotel_id)" class="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

        <div class="action-buttons">
          <button @click="openHotelModal()" class="btn1">
            Add New Hotel
          </button>
        </div>
      </div>

      <!-- Flight Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-title">Flight Management</h2>
        <table class="table table-striped">
  <thead>
    <tr>
      <th>Flight ID</th>
      <th>Airline</th>
      <th>Flight Number</th>
      <th>Departure City</th>
      <th>Arrival City</th>
      <th>Departure Time</th>
      <th>Arrival Time</th>
      <th>Duration</th>
      <th>Price</th>
      <th>Seat Class</th>
      <th>Image</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="flight in flights" :key="flight.flight_id">
      <td>{{ flight.flight_id }}</td>
      <td>{{ flight.airline }}</td>
      <td>{{ flight.flight_number }}</td>
      <td>{{ flight.departure_city }}</td>
      <td>{{ flight.arrival_city }}</td>
      <td>{{ new Date(flight.departure_time).toLocaleString() }}</td>
      <td>{{ new Date(flight.arrival_time).toLocaleString() }}</td>
      <td>{{ flight.duration }}</td>
      <td>${{ flight.price}}</td>
      <td>{{ flight.seat_class }}</td>
      <td>
        <img :src="flight.image_url" alt="Flight Image" class="flight-image" />
      </td>
      <td>
        <button @click="openEditFlightModal(flight)" class="btn btn-primary btn-sm">
          Edit
        </button>
        <button @click="deleteFlight(flight.flight_id)" class="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

        <div class="action-buttons">
          <button @click="openFlightModal" class="btn1">
            Add New Flight
          </button>
        </div>
      </div>

      <!-- Car Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-title">Car Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price per Day</th>
              <th>Fuel Type</th>
              <th>Transmission</th>
              <th>Seats</th>
              <th>Location</th>
              <th>Availability</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="car in cars" :key="car.car_id">
              <td>{{ car.car_id }}</td>
              <td>{{ car.car_make }}</td>
              <td>{{ car.car_model }}</td>
              <td>{{ car.year }}</td>
              <td>${{ car.rental_price_per_day }}</td>
              <td>{{ car.fuel_type }}</td>
              <td>{{ car.transmission }}</td>
              <td>{{ car.seats }}</td>
              <td>{{ car.location }}</td>
              <td>{{ car.availability ? 'Available' : 'Not Available' }}</td>
              <td>
                <img :src="car.image_url" alt="Car Image" class="car-image" />
              </td>
              <td>
                <button @click="openEditCarModal(car)" class="btn btn-primary btn-sm">
                  Edit
                </button>
                <button @click="deleteCar(car.car_id)" class="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openCarModal" class="btn1">
            Add New Car
          </button>
        </div>
      </div>

      <!-- Modals -->
      <!-- User Modal -->
     
<div v-if="showUserModal" class="modal">
  <div class="modal-content">
    <span @click="closeUserModal" class="close">&times;</span>
    <h2>{{ userForm.userID ? 'Edit User' : 'Add New User' }}</h2>
    <form @submit.prevent="submitUserForm">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" v-model="userForm.firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="userForm.lastName" required>
      </div>
      <div class="form-group">
        <label for="userAge">Age:</label>
        <input type="number" v-model="userForm.userAge" required>
      </div>
      <div class="form-group">
        <label for="Gender">Gender:</label>
        <select v-model="userForm.Gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="userRole">Role:</label>
        <input type="text" v-model="userForm.userRole" required>
      </div>
      <div class="form-group">
        <label for="emailAdd">Email:</label>
        <input type="email" v-model="userForm.emailAdd" required>
      </div>
      <div class="form-group">
        <label for="userPass">Password:</label>
        <input type="password" v-model="userForm.userPass" required>
      </div>
      <div class="form-group">
        <label for="image_url">Image URL:</label>
        <input type="text" v-model="userForm.image_url">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</div>


      <!-- Hotel Modal -->
<div v-if="showHotelModal" class="modal">
  <div class="modal-content">
    <span @click="closeHotelModal" class="close">&times;</span>
    <h2>{{ hotelForm.hotel_id ? 'Edit Hotel' : 'Add New Hotel' }}</h2>
    <form @submit.prevent="submitHotelForm">
      <div class="form-group">
        <label for="hotelName">Hotel Name:</label>
        <input type="text" v-model="hotelForm.hotel_name" required>
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" v-model="hotelForm.location" required>
      </div>
      <div class="form-group">
        <label for="rating">Rating:</label>
        <input type="number" step="0.01" v-model="hotelForm.rating" min="0" max="5" required>
      </div>
      <div class="form-group">
        <label for="price_per_night">Price per Night:</label>
        <input type="number" step="0.01" v-model="hotelForm.price_per_night" required>
      </div>
      <div class="form-group">
        <label for="rooms_available">Rooms Available:</label>
        <input type="number" v-model="hotelForm.rooms_available" required>
      </div>
      <div class="form-group">
        <label for="check_in_time">Check-In Time:</label>
        <input type="time" v-model="hotelForm.check_in_time" required>
      </div>
      <div class="form-group">
        <label for="check_out_time">Check-Out Time:</label>
        <input type="time" v-model="hotelForm.check_out_time" required>
      </div>
      <div class="form-group">
        <label for="amenities">Amenities:</label>
        <textarea v-model="hotelForm.amenities"></textarea>
      </div>
      <div class="form-group">
        <label for="contact_number">Contact Number:</label>
        <input type="text" v-model="hotelForm.contact_number">
      </div>
      <div class="form-group">
        <label for="image_url">Image URL:</label>
        <input type="text" v-model="hotelForm.image_url">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</div>


      <!-- Flight Modal -->
     
<div v-if="showFlightModal" class="modal">
  <div class="modal-content">
    <span @click="closeFlightModal" class="close">&times;</span>
    <h2>{{ flightForm.flight_id ? 'Edit Flight' : 'Add New Flight' }}</h2>
    <form @submit.prevent="submitFlightForm">
      <div class="form-group">
        <label for="airline">Airline:</label>
        <input type="text" v-model="flightForm.airline" required>
      </div>
      <div class="form-group">
        <label for="flight_number">Flight Number:</label>
        <input type="text" v-model="flightForm.flight_number" required>
      </div>
      <div class="form-group">
        <label for="departure_city">Departure City:</label>
        <input type="text" v-model="flightForm.departure_city" required>
      </div>
      <div class="form-group">
        <label for="arrival_city">Arrival City:</label>
        <input type="text" v-model="flightForm.arrival_city" required>
      </div>
      <div class="form-group">
        <label for="departure_time">Departure Time:</label>
        <input type="datetime-local" v-model="flightForm.departure_time" required>
      </div>
      <div class="form-group">
        <label for="arrival_time">Arrival Time:</label>
        <input type="datetime-local" v-model="flightForm.arrival_time" required>
      </div>
      <div class="form-group">
        <label for="duration">Duration:</label>
        <input type="text" v-model="flightForm.duration" required>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" step="0.01" v-model="flightForm.price" required>
      </div>
      <div class="form-group">
        <label for="seat_class">Seat Class:</label>
        <input type="text" v-model="flightForm.seat_class" required>
      </div>
      <div class="form-group">
        <label for="image_url">Image URL:</label>
        <input type="text" v-model="flightForm.image_url">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</div>


      <!-- Car Modal -->
      
<div v-if="showCarModal" class="modal">
  <div class="modal-content">
    <span @click="closeCarModal" class="close">&times;</span>
    <h2>{{ carForm.car_id ? 'Edit Car' : 'Add New Car' }}</h2>
    <form @submit.prevent="submitCarForm">
      <div class="form-group">
        <label for="car_make">Make:</label>
        <input type="text" v-model="carForm.car_make" required>
      </div>
      <div class="form-group">
        <label for="car_model">Model:</label>
        <input type="text" v-model="carForm.car_model" required>
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" v-model="carForm.year" required>
      </div>
      <div class="form-group">
        <label for="rental_price_per_day">Price per Day:</label>
        <input type="number" step="0.01" v-model="carForm.rental_price_per_day" required>
      </div>
      <div class="form-group">
        <label for="fuel_type">Fuel Type:</label>
        <input type="text" v-model="carForm.fuel_type" required>
      </div>
      <div class="form-group">
        <label for="transmission">Transmission:</label>
        <input type="text" v-model="carForm.transmission" required>
      </div>
      <div class="form-group">
        <label for="seats">Seats:</label>
        <input type="number" v-model="carForm.seats" required>
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" v-model="carForm.location" required>
      </div>
      <div class="form-group">
        <label for="availability">Availability:</label>
        <select v-model="carForm.availability" required>
          <option :value="true">Available</option>
          <option :value="false">Not Available</option>
        </select>
      </div>
      <div class="form-group">
        <label for="image_url">Image URL:</label>
        <input type="text" v-model="carForm.image_url">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</div>

    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      showUserModal: false,
      showHotelModal: false,
      showFlightModal: false,
      showCarModal: false,
      userForm: {},
      hotelForm: {},
      flightForm: {},
      carForm: {},
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    hotels() {
      return this.$store.state.hotels;
    },
    flights() {
      return this.$store.state.flights;
    },
    cars() {
      return this.$store.state.cars;
    }
  },
  methods: {
    async fetchData() {
      try {
        await this.$store.dispatch('getUsers');
        await this.$store.dispatch('fetchHotels');
        await this.$store.dispatch('fetchFlights');
        await this.$store.dispatch('getCarsDb');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    openUserModal() {
      this.userForm = {};
      this.showUserModal = true;
    },
    closeUserModal() {
      this.showUserModal = false;
    },
    async submitUserForm() {
      try {
        if (this.userForm.userID) {
          await this.$store.dispatch('updateUser', this.userForm);
        } else {
          await this.$store.dispatch('addUser', this.userForm);
        }
        this.closeUserModal();
      } catch (error) {
        console.error('Error submitting user form:', error);
      }
    },
    openEditUserModal(user) {
      this.userForm = { ...user };
      this.showUserModal = true;
    },
    async deleteUser(userID) {
      try {
        await this.$store.dispatch('deleteUser', userID);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },

    openHotelModal() {
      this.hotelForm = {};
      this.showHotelModal = true;
    },
    closeHotelModal() {
      this.showHotelModal = false;
    },
    async submitHotelForm() {
      try {
        if (this.hotelForm.hotel_id) {
          await this.$store.dispatch('updateHotel', this.hotelForm);
        } else {
          await this.$store.dispatch('createHotel', this.hotelForm);
        }
        this.closeHotelModal();
      } catch (error) {
        console.error('Error submitting hotel form:', error);
      }
    },
    openEditHotelModal(hotel) {
      this.hotelForm = { ...hotel };
      this.showHotelModal = true;
    },
    async deleteHotel(hotel_id) {
      try {
        await this.$store.dispatch('deleteHotel', hotel_id);
      } catch (error) {
        console.error('Error deleting hotel:', error);
      }
    },

    openFlightModal() {
      this.flightForm = {};
      this.showFlightModal = true;
    },
    closeFlightModal() {
      this.showFlightModal = false;
    },
    async submitFlightForm() {
      try {
        if (this.flightForm.flight_id) {
          await this.$store.dispatch('updateFlight', this.flightForm);
        } else {
          await this.$store.dispatch('createFlight', this.flightForm);
        }
        this.closeFlightModal();
      } catch (error) {
        console.error('Error submitting flight form:', error);
      }
    },
    openEditFlightModal(flight) {
      this.flightForm = { ...flight };
      this.showFlightModal = true;
    },
    async deleteFlight(flight_id) {
      try {
        await this.$store.dispatch('deleteFlight', flight_id);
      } catch (error) {
        console.error('Error deleting flight:', error);
      }
    },

    openCarModal() {
      this.carForm = {};
      this.showCarModal = true;
    },
    closeCarModal() {
      this.showCarModal = false;
    },
    async submitCarForm() {
      try {
        if (this.carForm.car_id) {
          await this.$store.dispatch('updateCar', this.carForm);
        } else {
          await this.$store.dispatch('createCar', this.carForm);
        }
        this.closeCarModal();
      } catch (error) {
        console.error('Error submitting car form:', error);
      }
    },
    openEditCarModal(car) {
      this.carForm = { ...car };
      this.showCarModal = true;
    },
    async deleteCar(car_id) {
      try {
        await this.$store.dispatch('deleteCar', car_id);
      } catch (error) {
        console.error('Error deleting car:', error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>



<style scoped>
.admin-section {
  margin-bottom: 20px;
}

.admin-title {
  margin: 0;
}

.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table img {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
}

.btn1 {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.btn1:hover {
  background-color: #0056b3;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .table img {
    max-width: 80px;
    max-height: 80px;
  }

  .modal-content {
    width: 95%;
  }

  .btn-primary, .btn1 {
    padding: 6px 12px;
  }
}

@media (max-width: 480px) {
  .table img {
    max-width: 60px;
    max-height: 60px;
  }

  .modal-content {
    width: 100%;
  }
}
</style>