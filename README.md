

## Layout

- `FormValidation/`: Angular application source, config, and tests
- `package-lock.json`: Root lockfile in the parent workspace

## Project Summary

The Angular app is a standalone application (no NgModule-based bootstrapping) that renders a single `FormValidation` component.

At runtime:

1. `src/main.ts` bootstraps the standalone `App` component.
2. `App` renders `<app-form-validation>` directly.
3. The form component builds a reactive login form using `FormBuilder` and Angular validators.
4. Submitting the form logs either the form value (valid) or an invalid message (invalid) to the browser console.

## Tech Stack

- Angular 21 (standalone components)
- Angular Reactive Forms
- Angular Router (configured but not currently used)
- Tailwind CSS 4 + PostCSS
- Vitest (through Angular test target)
- TypeScript 5.9

## Application Structure

- `src/app/app.ts`: Standalone root component, imports and renders the form component
- `src/app/components/form-validation/form-validation.ts`: Reactive form model and submit logic
- `src/app/components/form-validation/form-validation.html`: Form UI and validation messages
- `src/app/services/form-validaton-service.ts`: Placeholder injectable service (currently empty)

## Current Form Behavior

The reactive form defines these controls:

- `username`: required validator
- `email`: email validator
- `password`: minimum length of 6
- `phone`: no validators

The current template only renders inputs for:

- `email`
- `password`

Validation messages shown in the UI:

- email: required + invalid email format
- password: required + minimum length

Submit button behavior:

- Disabled while the overall form is invalid
- On submit, logs `Login Data:` with form values when valid

## Important Notes From Code Analysis

1. There is a mismatch between form model and template:
   - `username` and `phone` exist in the form group but have no input fields in the template.

2. Required-check messages are present in the template for email/password, but the form model does not mark those controls as required.
   - This means the `required` error messages currently cannot trigger.

3. The root app spec includes a title assertion that does not match the actual rendered template.
   - `app.spec.ts` checks for `Hello, FormValidation` in an `h1`, but `App` renders only `<app-form-validation>`.

4. `BrowserModule`, `ReactiveFormsModule`, `RouterOutlet`, and `CommonModule` imports in `app.ts` are not all used directly.

5. `form-validaton-service.ts` is scaffolded but not yet integrated.


