export function validateEmail(email) {
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
        return false
    return true
}

export function validatePassword(password) {
    if (password.length < 8)
        return false
    return true
}