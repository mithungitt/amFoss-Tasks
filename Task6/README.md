# OpenDocs
 This repository serves as an example for Task-07. The repository used for this example is the [Weather App](https://github.com/siddhartha-12/Weather-App/tree/main). An application that makes use of languages such as Python, HTML, HCL and such.
# Weather App

## Overview

The Weather App is a simple and intuitive application designed to provide real-time weather information for any location. It fetches weather data from a reliable weather API and presents it in an easy-to-read format. This application helps users quickly get the current weather conditions, temperature, humidity, and other relevant details for their chosen cities.

## Features

- Fetch current weather conditions for any city
- Display temperature, humidity, and weather description
- Easy-to-use interface with clear weather information
- Responsive design for various devices


## Setup Instructions

Follow these steps to set up the Weather App on your local machine:

### 1. **Clone the Repository**

   Open your terminal and clone the repository using the following command:

   ```bash
   git clone https://github.com/siddhartha-12/Weather-App.git
   ```

### 2. **Navigate to the Project Directory**

   Change your current directory to the cloned repository folder:

   ```bash
   cd Weather-App
   ```

### 3. **Set Up the Development Environment**

   If you're using Vagrant to create a virtual environment, follow these steps:

   - Make sure you have [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/) installed.

   - Navigate to the `ansible/` directory:

     ```bash
     cd ansible
     ```

   - Run Vagrant to create and provision the virtual environment:

     ```bash
     vagrant up
     ```

   This command will set up your virtual machine based on the configurations in the `Vagrantfile` and use Ansible to provision the environment as specified in the Ansible playbooks (`applicationSetup-Vagrant.yml` and `applicationSetup.yml`).

### 4. **Install Dependencies**

   After the virtual machine is up or if you're running locally, navigate to the \`flask/\` directory and install the Python dependencies listed in \`requirements.txt\`:

   ```bash
   cd ../flask
   pip install -r requirements.txt
   ```

### 5. **Set Up Environment Variables**

   Configure your Flask application by creating a `.flaskenv` file in the `flask/` directory, and add any necessary environment variables, like the Flask app name and environment. For example:

   ```bash
   FLASK_APP=application.py
   FLASK_ENV=development
   ```

### 6. **Database Setup**

   Set up the SQLite database for the application by running the `db_setup.py` script:

   ```bash
   python db_setup.py
   ```

   This will create the `weather.db` file and initialize the database schema.

### 7. **Run the Flask Application**

   Once the environment and database are set up, run the Flask application:

   ```bash
   flask run
   ```

   The app will start running, and you can access it by navigating to `http://localhost:5000` in your web browser.

### 8. **Infrastructure Setup (Optional)**

   If you're deploying the app using Terraform to provision infrastructure (such as EC2 instances on AWS), follow these steps:

   - Navigate to the `terraform-vpc/` directory:

     ```bash
     cd ../terraform-vpc
     ```

   - Run the Terraform script to set up infrastructure:

     ```bash
     ./run.sh
     ```

   - Follow any additional Terraform prompts to complete the provisioning.

### 9. **Using the Application**

   After the setup is complete, you can enter city names in the search bar of the web interface to retrieve real-time weather information.



## Usages

To use the Weather App:

 - Open your web browser and navigate to `http://localhost:3000`.
 - Enter the name of the city you want to check the weather for in the search bar.
 - Press Enter or click the search button to view the current weather information for that city.
 - We can update queries on weather to find desired location and status from anywhere around the world

## Contribution Guidelines

Contributions to the Weather App project are welcome! To contribute:

1. **Fork the Repository**

   Click the `Fork` button at the top-right corner of the repository page to create a personal copy of the project.

2. **Clone Your Fork**

   Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Weather-App.git
   ```

3. **Create a New Branch**

   Create a new branch for your changes:

   ```bash
   git checkout -b feature-branch
   ```

4. **Make Changes**

   Implement your changes or additions to the codebase.

5. **Commit Your Changes**

   Commit your changes with a descriptive message:

   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

6. **Push to Your Fork**

   Push your changes to your forked repository:

   ```bash
   git push origin feature-branch
   ```

7. **Submit a Pull Request**

   Go to the original repository and submit a pull request from your forked repository. Provide a clear description of the changes and the purpose of the pull request.

8.  **Reporting Issues**

    Please report any issues or bugs using the GitHub Issues tab.

## Tech Stack

**Client:** HTML, Python, HCL

**Server:** Node, Flask, Vagrant