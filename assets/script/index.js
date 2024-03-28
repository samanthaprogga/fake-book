// Function to post status updates
function postStatus() {
  const status = document.querySelector('.status-box').value.trim();
  const imgFile = document.getElementById('fileInput').files[0];

  if (status === "" && !imgFile) {
      alert("Please enter some text or choose a picture before posting.");
      return;
  }

  const postContainer = document.createElement('div');
  postContainer.classList.add('status-container');

  // Create header for the post
  const header = document.createElement('div');
  header.classList.add('post-header');
  
  // Add profile picture
  const profilePicture = document.createElement('div');
  profilePicture.classList.add('profile-picture');
  profilePicture.innerHTML = '<i class="fas fa-user-circle"></i>'; // Placeholder for profile picture
  header.appendChild(profilePicture);

  // Add user's full name
  const userName = document.createElement('div');
  userName.classList.add('user-name');
  userName.textContent = 'Samantha Progga'; // Replace with user's full name
  header.appendChild(userName);

  // Add post date
  const postDate = document.createElement('div');
  postDate.classList.add('post-date');
  postDate.textContent = new Date().toLocaleDateString(); // Current date as post date
  header.appendChild(postDate);

  // Append header to post container
  postContainer.appendChild(header);

  // Add status text to post container if available
  if (status !== "") {
      const statusElement = document.createElement('p');
      statusElement.textContent = status;
      postContainer.appendChild(statusElement);
  }

  // Add uploaded image to post container if available
  if (imgFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
          const imgElement = document.createElement('img');
          imgElement.src = event.target.result;
          imgElement.alt = "Uploaded Picture";
          imgElement.style.maxWidth = "100%";
          postContainer.appendChild(imgElement);
      };
      reader.readAsDataURL(imgFile);
  }

  // Append post container to the main document body
  document.body.appendChild(postContainer);
}

// Function to display user information in the modal
function displayUserInfoModal() {
  const modal = document.getElementById('modal');
  const userInfoForm = document.getElementById('userInfoForm');

  // Clear previous content
  userInfoForm.innerHTML = '';

  // Create and append profile information to the modal
  const profileInfo = document.createElement('div');
  profileInfo.innerHTML = `
      <h2>Profile</h2>
      <div><strong>Name:</strong> Samantha Progga</div>
      <div><strong>Username:</strong> samani933d</div>
      <div><strong>Email:</strong> samanthaprogga@gmail.com</div>
      <div><strong>Pages:</strong> Hub Centra, coding zone, Dynasty Hub</div>
      <div><strong>Groups:</strong> Seventeen, xb1</div>
      <div><strong>Monetization:</strong> Eligible</div>
  `;
  userInfoForm.appendChild(profileInfo);

  // Show the modal
  modal.style.display = 'block';
}

// Attach event listener to the "My Profile" button
document.getElementById('myProfileBtn').addEventListener('click', displayUserInfoModal);

// Attach event listener to the "Post" button
document.querySelector('.status-container button').addEventListener('click', postStatus);
