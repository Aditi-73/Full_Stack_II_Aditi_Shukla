# Experiment–2: Client-Side Form Validation

## Aim

To validate form inputs on the client side before submission.

## Theory

Client-side validation ensures correctness of user data and provides immediate feedback without server interaction.

## Procedure

1. Create form inputs.
2. Define validation conditions.
3. Display error messages.
4. Allow submission only for valid data.

## Validation Rules Used

### Email ID

- Must include `@`
- Must end with `.com`, `.in`, or a valid country code extension

### Password

1. Should start with a capital letter
2. Should have at least one number
3. Should have at least one special character
4. Should have at least 5 characters

## Screenshots

### 1. Home / Initial Form

![Home - Initial Form](./ss/Home.png)

### 2. Email Validation

![Email Validation Error](./ss/Email_1.png)

### 3. Password Validation - Must Start with Capital Letter

![Password Validation - Capital Letter Rule](./ss/Pass_1.png)

### 4. Password Validation - Must Have at Least One Number

![Password Validation - Number Rule](./ss/Pass_2.png)

### 5. Password Validation - Must Have at Least One Special Character

![Password Validation - Special Character Rule](./ss/Pass_3.png)

### 6. Password Validation - Must Have at Least 5 Characters

![Password Validation - Minimum Length Rule](./ss/Pass_4.png)

### 7. Successful Submission

![Form Submitted Successfully](./ss/Submitted.png)

## Run

```bash
cd Experiment_6/6.2
npm install
npm run dev
```

## Build

```bash
npm run build
```
