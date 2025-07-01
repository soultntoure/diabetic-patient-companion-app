# Backend API Documentation

This document details the available API endpoints for the Diabetic Patient Companion App.

## Base URL

`http://localhost:8000/api/v1` (for local development)

## Authentication

All requests to protected endpoints require a valid JWT token in the `Authorization` header, e.g., `Authorization: Bearer <your_token>`.

## Endpoints

*(Details of endpoints for Auth, Users, Meals, Medications, Tracking, AI Insights will be listed here, including request methods, parameters, request bodies, and responses.)*

### Example:

**GET /users/me**

*   **Description:** Get the currently authenticated user's profile.
*   **Requires Auth:** Yes
*   **Response:** `200 OK` with User schema object.

*(More endpoints to follow...)*
