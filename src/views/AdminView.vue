<template>
  <section class="admin-section">
    <div class="container">
      <div class="admin-header content-box">
        <h1 class="admin-title">Admin Dashboard</h1>
      </div>

      <!-- User Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-subtitle">User Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <button @click="openEditUserModal(user)" class="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                <button @click="deleteUser(user.userID)" class="btn btn-danger btn-sm">
                  <i class="fa fa-trash" aria-hidden="false"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openUserModal" class="btn1">
            <i class="fas fa-plus"></i> Add New User
          </button>
        </div>
      </div>

      <!-- Hotel Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-subtitle">Hotel Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hotel in hotels" :key="hotel.hotel_id">
              <td>{{ hotel.hotel_id }}</td>
              <td>{{ hotel.hotel_name }}</td>
              <td>{{ hotel.location }}</td>
              <td>{{ hotel.price_per_night }}</td>
              <td>
                <button @click="openEditHotelModal(hotel)" class="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                <button @click="deleteHotel(hotel.hotel_id)" class="btn btn-danger btn-sm">
                  <i class="fa fa-trash" aria-hidden="false"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openHotelModal" class="btn1">
            <i class="fas fa-plus"></i> Add New Hotel
          </button>
        </div>
      </div>

      <!-- Flight Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-subtitle">Flight Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Airline</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="flight in flights" :key="flight.flight_id">
              <td>{{ flight.flight_id }}</td>
              <td>{{ flight.airline }}</td>
              <td>{{ flight.location }}</td>
              <td>{{ flight.price }}</td>
              <td>
                <button @click="openEditFlightModal(flight)" class="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                <button @click="deleteFlight(flight.flight_id)" class="btn btn-danger btn-sm">
                  <i class="fa fa-trash" aria-hidden="false"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openFlightModal" class="btn1">
            <i class="fas fa-plus"></i> Add New Flight
          </button>
        </div>
      </div>

      <!-- Car Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-subtitle">Car Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="car in cars" :key="car.car_id">
              <td>{{ car.car_id }}</td>
              <td>{{ car.brand }}</td>
              <td>{{ car.model }}</td>
              <td>{{ car.price_per_day }}</td>
              <td>
                <button @click="openEditCarModal(car)" class="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                <button @click="deleteCar(car.car_id)" class="btn btn-danger btn-sm">
                  <i class="fa fa-trash" aria-hidden="false"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openCarModal" class="btn1">
            <i class="fas fa-plus"></i> Add New Car
          </button>
        </div>
      </div>
    </div>
 </section>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      users: [],
      hotels: [],
      flights: [],
      cars: []
    }
  },
  methods: {
    deleteUser(userID) {
      // delete user logic here
    },
    deleteHotel(hotelID) {
      // delete hotel logic here
    },
    deleteFlight(flightID) {
      // delete flight logic here
    },
    deleteCar(carID) {
      // delete car logic here
    },
    openUserModal() {
      // open user modal logic here
    },
    openHotelModal() {
      // open hotel modal logic here
    },
    openFlightModal() {
      // open flight modal logic here
    },
    openCarModal() {
      // open car modal logic here
    },
    openEditUserModal(user) {
      // open edit user modal logic here
    },
    openEditHotelModal(hotel) {
      // open edit hotel modal logic here
    },
    openEditFlightModal(flight) {
      // open edit flight modal logic here
    },
    openEditCarModal(car) {
      // open edit car modal logic here
    }
  }
}
</script>

<style scoped>
.admin-section {
  margin-bottom: 20px;
}

.action-buttons {
  margin-top: 20px;
}

.btn1 {
  background-color: #4CAF50;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn1:hover {
  background-color: #3e8e41;
}
</style>