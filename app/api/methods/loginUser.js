/**
 * Mockup function for api handling
 * @param {*} email
 * @param {*} password
 */
export default function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        resolve({ response: { id: 101 } });
    });
}
