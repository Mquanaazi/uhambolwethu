<template>
    <section class="admin-section">
      <!-- Background Image Container -->
      <div class="background-container">
        <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
      </div>
  
      <!-- Main Content Container -->
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
                  <button @click="openEditUserModal(user)" class="btn btn-primary btn-sm">Edit</button>
                  <button @click="deleteUser(user.userID)" class="btn btn-danger btn-sm">Delete</button>
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

      <!-- Modal for Adding New User -->
      <div v-if="showUserModal" class="modal-overlay">
        <div class="modal-content">
          <h2>Add New User</h2>
          <form @submit.prevent="submitUser">
            <div class="form-group">
              <label for="UserFirstName">First Name</label>
              <input v-model="newUser.firstName" type="text" id="UserFirstName" required>
            </div>
            <div class="form-group">
              <label for="UserLastName">Last Name</label>
              <input v-model="newUser.lastName" type="text" id="UserLastName" required>
            </div>
            <div class="form-group">
              <label for="UserEmail">Email</label>
              <input v-model="newUser.emailAdd" type="email" id="UserEmail" required>
            </div>
            <div class="form-group">
              <label for="UserPassword">Password</label>
              <input v-model="newUser.password" type="password" id="UserPassword" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button @click="closeUserModal" type="button" class="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </div>

      <!-- Modal for Editing User -->
      <div v-if="showEditUserModal" class="modal-overlay">
        <div class="modal-content">
          <h2>Edit User</h2>
          <form @submit.prevent="updateUser">
            <div class="form-group">
              <label for="editUserFirstName">First Name</label>
              <input v-model="userToEdit.firstName" type="text" id="editUserFirstName" required>
            </div>
            <div class="form-group">
              <label for="editUserLastName">Last Name</label>
              <input v-model="userToEdit.lastName" type="text" id="editUserLastName" required>
            </div>
            <div class="form-group">
              <label for="editUserEmail">Email</label>
              <input v-model="userToEdit.emailAdd" type="email" id="editUserEmail" required>
            </div>
            <div class="form-group">
              <label for="editUserPassword">Password</label>
              <input v-model="userToEdit.password" type="password" id="editUserPassword" required>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            <button @click="closeEditUserModal" type="button" class="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { toast } from "vue3-toastify";

export default {
  setup() {
    const store = useStore();
    const users = computed(() => store.state.users);

    const showUserModal = ref(false);
    const showEditUserModal = ref(false);

    const newUser = reactive({
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    const userToEdit = reactive({
      userID: '',
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    onMounted(async () => {
      await store.dispatch('getUsers');
    });

    const openUserModal = () => {
      showUserModal.value = true;
    };

    const closeUserModal = () => {
      showUserModal.value = false;
      resetUserForm();
    };

    const openEditUserModal = (user) => {
      Object.assign(userToEdit, user);
      showEditUserModal.value = true;
    };

    const closeEditUserModal = () => {
      showEditUserModal.value = false;
      resetUserForm();
    };

    const submitUser = async () => {
        try {
        await store.dispatch('createUser', newUser);
        toast.success("User added successfully");
        closeUserModal();
      } catch (error) {
        toast.error("Error adding user");
      }
    };

    const updateUser = async () => {
      try {
        await store.dispatch('updateUser', userToEdit);
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

    const resetUserForm = () => {
      Object.assign(newUser, {
        firstName: '',
        lastName: '',
        emailAdd: '',
        password: ''
      });
      Object.assign(userToEdit, {
        userID: '',
        firstName: '',
        lastName: '',
        emailAdd: '',
        password: ''
      });
    };

    return {
      users,
      showUserModal,
      showEditUserModal,
      newUser,
      userToEdit,
      openUserModal,
      closeUserModal,
      openEditUserModal,
      closeEditUserModal,
      submitUser,
      updateUser,
      deleteUser,
      resetUserForm
    };
  }
}
</script>

<style>
.admin-section {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: white;
}

.admin-title {
  margin-bottom: 20px;
}

.admin-subtitle {
  margin-bottom: 10px;
}

.table th, .table td {
  text-align: center;
}

.action-buttons {
  text-align: center;
  margin-top: 10px;
}

.btn1 {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn1:hover {
  background-color: #0056b3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 80%;
  max-width: 600px;
}

.modal-content h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input[type="text"], .form-group input[type="email"], .form-group input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.form-group button[type="submit"]:hover {
  background-color: #0056b3;
}

.form-group button[type="button"] {
  background-color: #ccc;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.form-group button[type="button"]:hover {
  background-color: #aaa;
}
</style>