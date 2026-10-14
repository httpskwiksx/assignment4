# Assignment 4 — Forms and Validation

**Course:** Web Technologies (Frontend)  
**Student:** Ulzhan Musakhan  
**Group:** SE-2524

## Project Description

This project demonstrates how to create HTML forms, apply HTML5 validation, and style responsive forms using Bootstrap 5.3.

The assignment consists of five tasks. Each task is placed on a separate HTML page, and all pages are connected through a navigation bar.

## Tasks

### Task 0 — Simple Contact Form
A basic HTML contact form containing:
- Name (text input)
- Email (email input)
- Message (textarea)
- Submit button
- Labels for all fields

### Task 1 — HTML5 Validation
A contact form with built-in HTML5 validation using:
- `required`
- `type="email"`
- `minlength`
- `maxlength`

The browser checks required fields and input formats.

### Task 2 — Bootstrap Form Styling
A contact form styled using Bootstrap 5.3.

Features:
- Bootstrap form controls and labels
- Responsive Grid System
- Placeholders and helper text
- Styled Submit button

### Task 3 — Bootstrap Validation
A contact form with Bootstrap validation feedback.

Features:
- Green borders for valid fields (`is-valid`)
- Red borders for invalid fields (`is-invalid`)
- Success and error messages
- JavaScript validation on submission

### Task 4 — Registration Form
A responsive registration form containing:
- First Name and Last Name
- Email
- Password and Confirm Password
- Gender (radio buttons)
- Hobbies (checkboxes)
- Country (dropdown)
- Register and Reset buttons

The form uses HTML5 and Bootstrap validation. JavaScript checks whether passwords match and required information is provided.

## Technologies Used

- HTML5 — Page structure and form elements
- CSS3 — Custom styling and hover effects
- Bootstrap 5.3 — Responsive layout and form components
- JavaScript — Form validation and feedback
- GitHub Pages — Website hosting

## Project Structure

| File | Description |
|---|---|
| `index.html` | Task 0 — Contact Form |
| `task1.html` | Task 1 — HTML5 Validation |
| `task2.html` | Task 2 — Bootstrap Styling |
| `task3.html` | Task 3 — Bootstrap Validation |
| `task4.html` | Task 4 — Registration Form |
| `CSS/style.css` | Custom CSS styles |
| `JS/task3.js` | Task 3 validation |
| `JS/task4.js` | Task 4 validation |
| `README.md` | Project documentation |

## How to Run

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension.
4. Open `index.html`.
5. Right-click and select **Open with Live Server**.
6. Use the navigation bar to switch between tasks.

An internet connection is required to load Bootstrap from the CDN.

## Testing

The forms can be tested by entering valid and invalid information.

- Empty required fields should fail validation.
- Invalid email addresses should be rejected.
- Passwords must contain at least 8 characters.
- Confirm Password must match Password.
- Valid fields display green feedback.
- Invalid fields display red feedback.
- The Reset button clears the registration form.

**Note:** This is a frontend educational project. The forms demonstrate client-side validation and do not save or send data to a backend server.

## References

- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [MDN Web Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- Web Technologies lecture materials

---

**Astana IT University — Web Technologies, Assignment 4**

