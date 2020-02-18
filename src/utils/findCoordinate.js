


export const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const location = JSON.stringify(position);
            console.log(location);
            // store in local
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
};

