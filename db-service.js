 
const connection = require('./connection');

async function addSchool(data) {
    try {
      // Create a prepared statement for security
      const query = `INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
  
      // Execute the query with bound parameters
      const [results] = await connection.promise().query(query, [data.name, data.address, data.latitude, data.longitude]);
  
      if (results.affectedRows === 1) {
        return { status: 'success', message: 'School added successfully' };
      } else {
        console.error('Failed to insert data. Affected rows:', results.affectedRows);
        return { status: 'error', message: 'Failed to add school' }; // More specific message
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      return { status: 'error', message: 'Error adding school' }; // General error message for user
    }
  }


  async function listSchools(data) {
    try {
        const {latitude ,longitude} = data;
         
      // Calculate the distance using the Haversine formula
      const query = `
        SELECT *, 
             6371 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(longitude) - radians(${longitude})) + sin(radians(${latitude})) * sin(radians(latitude)))  
 AS distance
      FROM school
      ORDER BY distance ASC
      `;
  
      const [rows, fields] = await connection.promise().query(query);
  
      // Return the fetched data as a JSON response
      return { status: 'success', data: rows };
    } catch (error) {
      return { status: 'error', message: 'Error fetching data: ' + error.message };
    }

  }
 


  module.exports = { addSchool, listSchools };
