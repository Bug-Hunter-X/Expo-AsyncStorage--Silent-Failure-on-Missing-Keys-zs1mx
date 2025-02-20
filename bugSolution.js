// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemSafely = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value); // Parse only if value exists
    } else {
      return null; // Return null explicitly
    }
  } catch (error) {
    console.error('Error getting item from AsyncStorage:', error);
    return null; // Return null in case of error
  }
};

// Example usage:
const data = await getItemSafely('myKey');
if (data) {
  console.log('Data:', data);
} else {
  console.log('Data not found or error occurred.');
}
