
function validateSchoolData(data) {
    const { name, address, latitude, longitude } = data;

    const validationErrors = [];

    // Validate name
    if (!name || name.trim() === '') {
        validationErrors.push('Name is required.');
    }

    // Validate address
    if (!address || address.trim() === '') {
        validationErrors.push('Address is required.');
    }

    // Validate latitude
    if (!latitude || isNaN(latitude)    ) {
        validationErrors.push('Latitude must be a valid floating-point number.');
    }

    // Validate longitude
    if (!longitude || isNaN(longitude)  ) {
        validationErrors.push('Longitude must be a valid floating-point number.');
    }

    // Check for additional validations if needed (e.g., latitude/longitude range)

    if (validationErrors.length > 0) {
        return {
            result: false,
            status: 'error',
            message: validationErrors
        };
    } else {
        return {
            result: true,
            status: 'success',
            message: 'Data is valid'
        };
    }
}


function validateLatLong(data) {
    const { latitude, longitude } = data;

    const validationErrors = [];

    // Validate latitude
    if (!latitude || isNaN(latitude)  ) {
        validationErrors.push('Latitude must be a valid floating-point number.');
    }

    // Validate longitude
    if (!longitude || isNaN(longitude) ) {
        validationErrors.push('Longitude must be a valid floating-point number.');
    }


    if (validationErrors.length > 0) {
        return {
            result: false,
            status: 'error',
            message: validationErrors
        };
    } else {
        return {
            result: true,
            status: 'success',
            message: 'Data is valid'
        };
    }

}



module.exports = { validateSchoolData , validateLatLong}