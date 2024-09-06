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
          <button @click="$router.push('/auth')" class="btn1">
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
import { computed, reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { toast } from "vue3-toastify";

export default {
  setup() {
    const store = useStore();
    const hotels = computed(() => store.state.hotels);
    const flights = computed(() => store.state.flights);
    const cars = computed(() => store.state.cars);
    const users = computed(() => store.state.users);

    const showHotelModal = ref(false);
    const showFlightModal = ref(false);
    const showCarModal = ref(false);
    const showEditHotelModal = ref(false);
    const showEditFlightModal = ref(false);
    const showEditCarModal = ref(false);
    const showUserModal = ref(false);
    const showEditUserModal = ref(false);

    const newHotel = reactive({
      hotel_name: '',
      location: '',
      rating: '',
      price_per_night: '',
      rooms_available: '',
      check_in_time: '',
      check_out_time: '',
      amenities: '',
      contact_number: '',
      image_url: ''
    });
    const newFlight = reactive({
      airline: '',
      flight_number: '',
      departure_city: '',
      arrival_city: '',
      departure_time: '',
      arrival_time: '',
      duration: '',
      price: '',
      seat_class: '',
      image_url: ''
    });
    const newCar = reactive({
      car_make: '',
      car_model: '',
      year: '',
      rental_price_per_day: '',
      fuel_type: '',
      transmission: '',
      seats: '',
      location: '',
      availability: '',
      image_url: ''
    });
    const editHotel = reactive({
      hotel_name: '',
      location: '',
      rating: '',
      price_per_night: '',
      rooms_available: '',
      check_in_time: '',
      check_out_time: '',
      amenities: '',
      contact_number: '',
      image_url: ''
    });
    const editFlight = reactive({
      airline: '',
      flight_number: '',
      departure_city: '',
      arrival_city: '',
      departure_time: '',
      arrival_time: '',
      duration: '',
      price: '',
      seat_class: '',
      image_url: ''
    });
    const editCar = reactive({
      car_make: '',
      car_model: '',
      year: '',
      rental_price_per_day: '',
      fuel_type: '',
      transmission: '',
      seats: '',
      location: '',
      availability: '',
      image_url: ''
    });

   

    const editUser = reactive({
      userID: '',
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    const newUser = reactive({
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    onMounted(async () => {
      await store.dispatch('getHotels');
      await store.dispatch('getFlights');
      await store.dispatch('getCars');
      await store.dispatch('getUsers');
    });

    const openHotelModal = () => {
      showHotelModal.value = true;
    };
    const openFlightModal = () => {
      showFlightModal.value = true;
    };
    const openCarModal = () => {
      showCarModal.value = true;
    };

    const closeHotelModal = () => {
      showHotelModal.value = false;
      resetHotelForm();
    };
    const closeFlightModal = () => {
      showFlightModal.value = false;
      resetFlightForm();
    };
    const closeCarModal = () => {
      showCarModal.value = false;
      resetCarForm();
    };

    const openEditHotelModal = (Hotel) => {
      Object.assign(editHotel, Hotel);
      showEditHotelModal.value = true;
    };
    const openEditFlightModal = (Flight) => {
      Object.assign(editFlight, Flight);
      showEditFlightModal.value = true;
    };
    const openEditCarModal = (Car) => {
      Object.assign(editCar, Car);
      showEditCarModal.value = true;
    };

    const closeEditHotelModal = () => {
      showEditHotelModal.value = false;
      resetHotelForm();
    };
    const closeEditFlightModal = () => {
      showEditFlightModal.value = false;
      resetFlightForm();
    };
    const closeEditCarModal = () => {
      showEditCarModal.value = false;
      resetCarForm();
    };

    const openUserModal = () => {
      showUserModal.value = true;
    };

    const closeUserModal = () => {
      showUserModal.value = false;
      resetUserForm();
    };

    const openEditUserModal = (user) => {
      Object.assign(editUser, user);
      showEditUserModal.value = true;
    };

    const closeEditUserModal = () => {
      showEditUserModal.value = false;
      resetUserForm();
    };

    const submitHotel = async () => {
      try {
        await store.dispatch('createHotel', newHotel);
        toast.success("Hotel added successfully");
        closeHotelModal();
      } catch (error) {
        toast.error("Error adding Hotel");
      }
    };
    const submitFlight = async () => {
      try {
        await store.dispatch('createFlight', newFlight);
        toast.success("Flight added successfully");
        closeFlightModal();
      } catch (error) {
        toast.error("Error adding Flight");
      }
    };
    const submitCar = async () => {
      try {
        await store.dispatch('createCar', newCar);
        toast.success("Car added successfully");
        closeCarModal();
      } catch (error) {
        toast.error("Error adding Car");
      }
    };
    const submitUser = async () => {
      try {
        await store.dispatch('createUser', newUser);
        toast.success("User added successfully");
        closeUserModal();
      } catch (error) {
        toast.error("Error adding User");
      }
    };


    const updateHotel = async () => {
      try {
        await store.dispatch('updateHotel', editHotel);
        toast.success("Hotel updated successfully");
        closeEditHotelModal();
      } catch (error) {
        toast.error("Error updating Hotel");
      }
    };
    const updateFlight = async () => {
      try {
        await store.dispatch('updateFlight', editFlight);
        toast.success("Flight updated successfully");
        closeEditFlightModal();
      } catch (error) {
        toast.error("Error updating Flight");
      }
    };
    const updateCar = async () => {
      try {
        await store.dispatch('updateCar', editCar);
        toast.success("Car updated successfully");
        closeEditCarModal();
      } catch (error) {
        toast.error("Error updating Car");
      }
    };

    const deleteHotel = async (HotelID) => {
      try {
        await store.dispatch('deleteHotel', HotelID);
        toast.success("Hotel deleted successfully");
      } catch (error) {
        toast.error("Error deleting Hotel");
      }
    };
    const deleteFlight = async (FlightID) => {
      try {
        await store.dispatch('deleteFlight', FlightID);
        toast.success("Flight deleted successfully");
      } catch (error) {
        toast.error("Error deleting Flight");
      }
    };
    const deleteCar = async (CarID) => {
      try {
        await store.dispatch('deleteCar', CarID);
        toast.success("Car deleted successfully");
      } catch (error) {
        toast.error("Error deleting Car");
      }
    };

    const updateUser = async () => {
      try {
        await store.dispatch('updateUser', editUser);
        toast.success("User updated successfully");
        closeEditUserModal();
      } catch (error) {
        toast.error("Error updating user");
      }
    };

    const deleteUser = async (userID) => {
      try {
        await store.dispatch('deleteUser', userID);
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Error deleting user");
      }
    };

    const resetHotelForm = () => {
      Object.assign(newHotel, {
      hotel_name: '',
      location: '',
      rating: '',
      price_per_night: '',
      rooms_available: '',
      check_in_time: '',
      check_out_time: '',
      amenities: '',
      contact_number: '',
      image_url: ''
      });
    };
    const resetFlightForm = () => {
      Object.assign(newFlight, {
      airline: '',
      flight_number: '',
      departure_city: '',
      arrival_city: '',
      departure_time: '',
      arrival_time: '',
      duration: '',
      price: '',
      seat_class: '',
      image_url: ''
      });
    };
    const resetCarForm = () => {
      Object.assign(newCar, {
      car_make: '',
      car_model: '',
      year: '',
      rental_price_per_day: '',
      fuel_type: '',
      transmission: '',
      seats: '',
      location: '',
      availability: '',
      image_url: ''
      });
    };

    const resetUserForm = () => {
      Object.assign(newUser, {
        firstName: '',
        lastName: '',
        emailAdd: '',
        password: ''
      });
      Object.assign(editUser, {
        userID: '',
        firstName: '',
        lastName: '',
        emailAdd: '',
        password: ''
      });
    };

    return {
      hotels,
      flights,
      cars,
      users,
      showHotelModal,
      showFlightModal,
      showCarModal,
      showEditHotelModal,
      showEditFlightModal,
      showEditCarModal,
      showUserModal,
      showEditUserModal,
      newHotel,
      newFlight,
      newCar,
      editHotel,
      editFlight,
      editCar,
      editUser,
      // 
      openHotelModal,
      closeHotelModal,
      openFlightModal,
      closeFlightModal,
      openCarModal,
      closeCarModal,
      
      // 
      openEditHotelModal,
      closeEditHotelModal,
      openEditFlightModal,
      closeEditFlightModal,
      openEditCarModal,
      closeEditCarModal,
      // 
      openUserModal,
      closeUserModal,
     
      // 
      submitHotel,
      updateHotel,
      deleteHotel,
      
      // 
      submitFlight,
      updateFlight,
      deleteFlight,
     
      // 
      submitCar,
      updateCar,
      deleteCar,
     
      // 
      updateUser,
      deleteUser,
      submitUser,
      

    };
  }
};
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