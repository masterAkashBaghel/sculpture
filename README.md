**Image Slider for Sculptures******

This is a React-based image slider project that showcases various sculptures along with their respective artists and descriptions. The slider allows users to view different sculptures and learn more about each piece of art.

Features
Image slider with navigation buttons to view the next and previous sculptures.
Information displayed for each sculpture includes the sculpture name, artist name, and a brief description.
Additional details can be shown or hidden by clicking on the "More Details" or "Less Details" button.
Smooth transition effects for changing sculptures and showing/hiding details.

#Installation and Usage
Clone the repository to your local machine using the following command:

bash
 
git clone https://github.com/masterAkashBaghel/sculpture

Navigate to the project directory:
bash
 
cd image-slider-sculptures
Install the required dependencies:

bash

npm install
Start the development server:
bash

npm start
The application will open in your default web browser at http://localhost:3000.
Project Structure
The project has the following structure:


image-slider-sculptures/
  ├── src/
  │   ├── components/
  │   │   ├── Nav.js
  │   │   ├── Resume.js
  │   │   └── data.js
  │   ├── App.js
  │   ├── App.css
  │   └── index.js
  ├── public/
  │   ├── index.html
  │   
  │       
  │       
  │      
  ├── package.json
  └── README.md
  

src/components/: Contains the main components used in the image slider.

App.js: Implements the image slider logic and navigation buttons.
  Displays each sculpture's information, including name, artist, description, and additional details.
data.js: Contains an array of sculpture objects with their details.
 

public/: Contains the index.html file and any static assets like images.

package.json: Lists the project dependencies and scripts.

Additional Notes


The sculpture data is provided in the data.js file as an array of objects. You can modify or expand the data to include more sculptures or additional information.

 

 

Enjoy exploring the world of sculptures through this image slider!
